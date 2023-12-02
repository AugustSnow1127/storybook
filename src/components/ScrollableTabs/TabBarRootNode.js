/* eslint-disable react/jsx-props-no-spreading */
import React, { cloneElement } from 'react';
import classnames from 'classnames';
import { getDataAttr } from './utils';

const TabBarRootNode = ({
  prefixCls,
  onKeyDown,
  className,
  extraContent,
  style,
  tabbarposition,
  children,
  direction,
  saveRef,
  getRef,
  ...restProps
}) => {
  const getExtraContentStyle = (topOrBottom, dir) => {
    if (dir === 'rtl') {
      return topOrBottom ? { float: 'left' } : {};
    }
    return topOrBottom ? { float: 'right' } : {};
  };

  const cls = classnames(`${prefixCls}-bar`, {
    [className]: !!className,
  });
  const topOrBottom = tabbarposition === 'top' || tabbarposition === 'bottom';
  const extraContentStyle = extraContent && extraContent.props ? extraContent.props.style : {};
  let newChildren = children;
  if (extraContent) {
    newChildren = [
      cloneElement(extraContent, {
        key: 'extra',
        onKeyDown: (e) => e.stopPropagation(),
        style: {
          ...getExtraContentStyle(topOrBottom, direction),
          ...extraContentStyle,
        },
      }),
      cloneElement(children, { key: 'content' }),
    ];
    newChildren = topOrBottom ? newChildren : newChildren.reverse();
  }
  return (
    <div
      role="tablist"
      tabIndex={-1}
      className={cls}
      ref={saveRef('root')}
      onKeyDown={onKeyDown}
      style={style}
      {...getDataAttr(restProps)}
    >
      {newChildren}
    </div>
  );
};

TabBarRootNode.defaultProps = {
  prefixCls: '',
  className: '',
  style: {},
  tabbarposition: 'top',
  extraContent: null,
  children: null,
  onKeyDown: () => {},
  saveRef: () => {},
  getRef: () => {},
};

export default TabBarRootNode;
