/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ScrollableTabBarNode from './ScrollableTabBarNode';
import TabBarRootNode from './TabBarRootNode';
import TabBarTabsNode from './TabBarTabsNode';
import SaveRef from './SaveRef';

const ScrollableTabBar = React.forwardRef((props, ref) => (
  <SaveRef>
    {(saveRef, getRef) => (
      <TabBarRootNode saveRef={saveRef} getRef={getRef} {...props}>
        <ScrollableTabBarNode saveRef={saveRef} getRef={getRef} {...props}>
          <TabBarTabsNode saveRef={saveRef} {...props} />
        </ScrollableTabBarNode>
      </TabBarRootNode>
    )}
  </SaveRef>
));

export default ScrollableTabBar;

ScrollableTabBar.defaultProps = {
  prefixCls: 'rc-tabs',
  tabbarposition: 'top',
  panels: null,
  style: {},
  direction: 'ltr',
};
