/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
import ScrollableTabBar from "./ScrollableTabBar";
import { 
  ScrollableTabsTemplate,
  ScrollableTabsStyle,
  ScrollableVersionTabsStyle,
  ScrollableSubTabsStyle,
  ScrollableStepTabsStyle,
} from "./style";

const useHook = (props) => {
  const { activeKey: propsActiveKey, previcon, nexticon } = props;

  const [hasScrollBtn, setHasScrollBtn] = React.useState(false);

  const [activeKey, setActiveKey] = React.useState("0");
  const barRef = React.useRef(null);

  const iconProps = {
    nexticon,
    previcon,
  };

  const saveBar = (bar) => {
    barRef.current = bar;
  };

  const onChange = (key) => {
    console.log('onChange', key);
    setActiveKey(key);
    props.onChange(key);
  };

  React.useEffect(() => {
    if (propsActiveKey) {
      setActiveKey(propsActiveKey);
    }
  }, [propsActiveKey]);

  return {
    saveBar,
    iconProps,
    activeKey,
    onChange,
    setHasScrollBtn,
    hasScrollBtn,
  };
};

const ScrollableTabs = (props) => {
  const state = useHook(props);
  const {
    tabpanes,
    prefixCls,
    tabbarposition,
    className,
    direction,
    contentstyle,
    tabsType,
    size,
    hasicon,
  } = props;

  const cls = classnames({
    [prefixCls]: 1,
    [`${prefixCls}-${tabbarposition}`]: 1,
    [className]: !!className,
    [`${prefixCls}-rtl`]: direction === 'rtl',
  });

  const renderScrollableTabs = () => (
    <>
      <ScrollableTabsTemplate
        states={state.states}
        {...props}
        renderTabBar={() => (
          <ScrollableTabBar
            ref={state.saveBar}
            panels={tabpanes}
            className={cls}
            onChange={state.onChange}
            activeKey={state.activeKey}
            setHasScrollBtn={state.setHasScrollBtn}
            {...state.iconProps}
          />
        )}
      />
    </>
  );

  return (
    <>
      {
        tabsType === "ScrollableTabs" && (
          <ScrollableTabsStyle hasScrollBtn={state.hasScrollBtn} size={size}>
            {renderScrollableTabs()}
          </ScrollableTabsStyle>
        )
      }
      {
        tabsType === "ScrollableVersionTabs" && (
          <ScrollableVersionTabsStyle hasScrollBtn={state.hasScrollBtn}>
            {renderScrollableTabs()}
          </ScrollableVersionTabsStyle>
        )
      }
      {
        tabsType === "ScrollableSubTabs" && (
          <ScrollableSubTabsStyle hasScrollBtn={state.hasScrollBtn}>
            {renderScrollableTabs()}
          </ScrollableSubTabsStyle>
        )
      }
      {
        tabsType === "ScrollableStepTabs" && (
          <ScrollableStepTabsStyle hasScrollBtn={state.hasScrollBtn} hasicon={hasicon}>
            {renderScrollableTabs()}
          </ScrollableStepTabsStyle>
        )
      }
    </>
  );
};

export default ScrollableTabs;

ScrollableTabs.propTypes = {
  hasicon: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  renderTabBar: PropTypes.func,
  onChange: PropTypes.func,
  items: PropTypes.any,
  className: PropTypes.any,
  tabpanes: PropTypes.node.isRequired,
  prefixCls: PropTypes.string,
  tabbarposition: PropTypes.string,
  panels: PropTypes.any,
  style: PropTypes.any,
  direction: PropTypes.string,
  previcon: PropTypes.node,
  nexticon: PropTypes.node,
  contentstyle: PropTypes.any,
  tabsType: PropTypes.string,
};

ScrollableTabs.defaultProps = {
  type: "card",
  size: "large",
  activeKey: "",
  defaultActiveKey: "",
  renderTabBar: (() => { }),
  onChange: (() => { }),
  items: [],
  className: "",
  prefixCls: 'rc-tabs',
  tabbarposition: 'top',
  panels: null,
  style: {},
  direction: 'ltr',
  previcon: (<div>&lt;</div>),
  nexticon: (<div>&gt;</div>),
  contentstyle: {},
  tabsType: "ScrollableTabsStyle",
  hasicon: "false",
};
