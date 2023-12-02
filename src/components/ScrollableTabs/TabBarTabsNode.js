/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { isVertical } from './utils';

const TabBarTabsNode = (props) => {
  const {
    panels: children,
    activeKey,
    prefixCls,
    tabBarGutter,
    saveRef,
    tabbarposition,
    renderTabBarNode,
    direction,
    id,
    onChange,
    onTabClick = () => {},
  } = props;

  const rst = [];

  React.Children.forEach(children, (child, index) => {
    if (!child) {
      return;
    }
    const { key } = child;
    let cls = activeKey === key ? `${prefixCls}-tab-active` : '';
    cls += ` ${prefixCls}-tab`;
    let events = {};
    if (child.props.disabled) {
      cls += ` ${prefixCls}-tab-disabled`;
    } else {
      events = {
        onClick: onTabClick.bind(this, key),
      };
    }
    const ref = {};
    if (activeKey === key) {
      ref.ref = saveRef('activeTab');
    }

    const gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;

    const marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';
    const style = {
      [isVertical(tabbarposition) ? 'marginBottom' : marginProperty]: gutter,
    };
    // console.warning('tab' in child.props, 'There must be `tab` property on children of Tabs.');

    const tabId = id ? `${key}-${id}` : key;

    let node = (
      <div
        role="tab"
        aria-disabled={child.props.disabled ? 'true' : 'false'}
        aria-selected={activeKey === key ? 'true' : 'false'}
        tabIndex={activeKey === key ? 0 : -1}
        {...events}
        className={cls}
        onClick={!cls.includes("rc-tabs-tab-disabled") && activeKey !== key ? () => onChange(key) : null}
        onKeyDown={() => onChange(key)}
        key={key}
        style={style}
        id={`tab-${tabId}`}
        aria-controls={`tabpane-${tabId}`}
        {...ref}
      >
        {child.props.tab}
      </div>
    );

    if (renderTabBarNode) {
      node = renderTabBarNode(node);
    }

    rst.push(node);
  });

  return <div ref={saveRef('navTabsContainer')}>{rst}</div>;
};

TabBarTabsNode.defaultProps = {
  panels: [],
  prefixCls: [],
  tabBarGutter: null,
  onTabClick: () => {},
  saveRef: () => {},
};

export default TabBarTabsNode;
