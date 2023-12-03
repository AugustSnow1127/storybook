import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';

import { RndStyle } from './style';

const Rnd = ({ children, w, h, l, t, rndClassName }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [size, setSize] = React.useState({
    width: w,
    height: h,
    left: l,
    top: t,
  });
  const [deltaSize, setDeltaSize] = React.useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [dragStartSize, setDragStartSize] = React.useState({ width: 0, height: 0 });

  const initialBounds = React.useMemo(() => {
    const { clientWidth, clientHeight } = window.document?.documentElement;

    // 元件初始的位置和螢幕邊界的距離
    const targetRect = {
      left: l,
      right: l + w,
      top: t,
      bottom: t + h,
    };

    return {
      left: -targetRect?.left,
      right: clientWidth - targetRect?.right,
      top: -targetRect?.top,
      bottom: clientHeight - targetRect?.bottom,
    };
  }, []);

  const [bounds, setBounds] = React.useState(initialBounds);

  const handleDrag = (e, data) => {
    setPosition(data);
  };

  const handleResizeStart = (e, direction, ref, d) => {
    e.stopPropagation();
    setDragStartSize(size);
  };

  const handleResizeStop = (e, dir, ref, d) => {
    setSize({
      ...size,
      width: size.width + d.width,
      height: size.height + d.height,
    });

    const deltaList = {
      left: ["left"],
      top: ["top"],
      right: ["right"],
      bottom: ["bottom"],
      topLeft: ["left", "top"],
      bottomLeft: ["left", "bottom"],
      topRight: ["right", "top"],
      bottomRight: ["right", "bottom"],
    };

    const delta = deltaList[dir].reduce((acc, cur) => {
      acc[cur] = d[cur === "left" || cur === "right" ? "width" : "height"];
      return acc;
    }, {});

    setDeltaSize(delta);
    setDragStartSize(undefined);
  };

  const onResize = React.useCallback(({ delta, direction, dSize }) => {
    if (!dragStartSize) {
      return;
    }

    const directions = ["top", "left", "topLeft", "bottomLeft", "topRight"];

    if (directions.indexOf(direction) !== -1) {
      let newLeft = dSize.left;
      let newTop = dSize.top;

      switch (direction) {
        case "bottomLeft":
          newLeft = dragStartSize.left - delta.width;
          break;
        case "topRight":
          newTop = dragStartSize.top - delta.height;
          break;
        default:
          newLeft = dragStartSize.left - delta.width;
          newTop = dragStartSize.top - delta.height;
          break;
      }

      setSize({
        ...dSize,
        left: newLeft,
        top: newTop,
      });
    }
  }, [dragStartSize]);

  React.useEffect(() => {
    const calcBounds = () => {
      setBounds({
        left: bounds.left + (deltaSize?.left || 0),
        right: bounds.right - (deltaSize?.right || 0),
        top: bounds.top + (deltaSize?.top || 0),
        bottom: bounds.bottom - (deltaSize?.bottom || 0),
      });
    };

    calcBounds();
  }, [deltaSize]);

  return (
    <RndStyle className={rndClassName}>
      <Draggable
        onDrag={handleDrag}
        position={position}
        bounds={bounds}
      >
        <Resizable
          style={{
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
            left: `${size.left}px`,
            top: `${size.top}px`,
            boxSizing: "border-box",
          }}
          defaultSize={size}
          onResize={(event, direction, ref, delta) => {
            onResize({ delta, direction, dSize: size });
          }}
          onResizeStart={handleResizeStart}
          onResizeStop={handleResizeStop}
          minHeight={320} // DDE固定最小値
          minWidth={480} // DDE固定最小値
        >
          {children}
        </Resizable>
      </Draggable>
    </RndStyle>
  );
};

export default Rnd;

Rnd.propTypes = {
  w: PropTypes.number,
  h: PropTypes.number,
  l: PropTypes.number,
  t: PropTypes.number,
  rndClassName: PropTypes.string,
};

Rnd.defaultProps = {
  w: 500,
  h: 360,
  l: 300,
  t: 300,
  rndClassName: 'rndModal',
};
