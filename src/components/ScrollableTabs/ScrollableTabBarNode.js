import React from 'react';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import ResizeObserver from 'resize-observer-polyfill';
import { setTransform, isTransform3dSupported } from './utils';

const useHooks = (props) => {
  const { getRef, direction, tabbarposition, onPrevClick, onNextClick, activeKey, setHasScrollBtn } = props;
  const [offset, setOffset] = React.useState(0);
  const [states, setStates] = React.useState({
    next: false,
    prev: false,
  });
  const [isCheckNextPrev, setIsCheckNextPrev] = React.useState(false);

  const getOffsetWH = (node) => {
    let prop = 'offsetWidth';
    if (tabbarposition === 'left' || tabbarposition === 'right') {
      prop = 'offsetHeight';
    }
    return node[prop];
  };

  const getScrollWH = (node) => {
    let prop = 'scrollWidth';
    if (tabbarposition === 'left' || tabbarposition === 'right') {
      prop = 'scrollHeight';
    }
    return node[prop];
  };

  const getOffsetLT = (node) => {
    let prop = 'left';
    if (tabbarposition === 'left' || tabbarposition === 'right') {
      prop = 'top';
    }
    return node.getBoundingClientRect()[prop];
  };

  const updateOffset = (minOffset, checkNextPrev = true) => {
    let target = Math.min(0, minOffset);
    if (offset !== target) {
      setOffset(target);
      let navOffset = {};
      const navStyle = getRef('nav').style;
      const transformSupported = isTransform3dSupported(navStyle);
      if (tabbarposition === 'left' || tabbarposition === 'right') {
        if (transformSupported) {
          navOffset = {
            value: `translate3d(0,${target}px,0)`,
          };
        } else {
          navOffset = {
            name: 'top',
            value: `${target}px`,
          };
        }
      } else if (transformSupported) {
        if (direction === 'rtl') {
          target = -target;
        }
        navOffset = {
          value: `translate3d(${target}px,0,0)`,
        };
      } else {
        navOffset = {
          name: 'left',
          value: `${target}px`,
        };
      }
      if (transformSupported) {
        setTransform(navStyle, navOffset.value);
      } else {
        navStyle[navOffset.name] = navOffset.value;
      }
      if (checkNextPrev) {
        setIsCheckNextPrev(true);
      }
    }
  };

  const setPrev = (v) => {
    if (states.prev !== v) {
      setStates((pre) => ({
        ...pre,
        prev: v,
      }));
    }
  };

  const setNext = (v) => {
    if (states.next !== v) {
      setStates((pre) => ({
        ...pre,
        next: v,
      }));
    }
  };

  const setNextPrev = () => {
    const navNode = getRef('nav');
    const navTabsContainer = getRef('navTabsContainer');
    const navNodeWH = getScrollWH(navTabsContainer || navNode);
    // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
    // https://github.com/ant-design/ant-design/issues/13423
    const containerWH = getOffsetWH(getRef('container')) + 1;
    const navWrapNodeWH = getOffsetWH(getRef('navWrap'));
    const minOffset = containerWH - navNodeWH;
    let { next, prev } = states;
    if (minOffset >= 0) {
      next = false;
      updateOffset(0, false);
      setOffset(0);
    } else if (minOffset < offset) {
      next = true;
    } else {
      next = false;
      // Fix https://github.com/ant-design/ant-design/issues/8861
      // Test with container offset which is stable
      // and set the offset of the nav wrap node
      const realOffset = navWrapNodeWH - navNodeWH;
      updateOffset(realOffset, false);

      setOffset(realOffset);
    }

    if (offset < 0) {
      prev = true;
    } else {
      prev = false;
    }
    setNext(next);
    setPrev(prev);
    return {
      next,
      prev,
    };
  };
  const isNextPrevShown = (paramState) => {
    if (paramState) {
      return paramState.next || paramState.prev;
    }
    return states.next || states.prev;
  };

  const scrollToActiveTab = (e) => {
    const activeTab = getRef('activeTab');
    const navWrap = getRef('navWrap');
    if ((e && e.target !== e.currentTarget) || !activeTab) {
      return;
    }

    // when not scrollable or enter scrollable first time, don't emit scrolling
    const lastNextPrevShown = isNextPrevShown();
    const needToSroll = isNextPrevShown() && lastNextPrevShown;
    if (!needToSroll) {
      return;
    }

    const activeTabWH = getScrollWH(activeTab);
    const navWrapNodeWH = getOffsetWH(navWrap);
    const wrapOffset = getOffsetLT(navWrap);
    const activeTabOffset = getOffsetLT(activeTab);
    if (wrapOffset > activeTabOffset) {
      const updatingOffset = offset + wrapOffset - activeTabOffset;
      updateOffset(updatingOffset);
    } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
      const updatingOffset = offset - (activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH));
      updateOffset(updatingOffset);
    }
  };

  const prevTransitionEnd = (e) => {
    if (e.propertyName !== 'opacity') {
      return;
    }
    const container = getRef('container');
    scrollToActiveTab({
      target: container,
      currentTarget: container,
    });
  };

  const prevOnClick = (e) => {
    onPrevClick(e);
    const navWrapNode = getRef('navWrap');
    const navWrapNodeWH = getOffsetWH(navWrapNode);
    updateOffset(offset + navWrapNodeWH);
  };

  const nextOnClick = (e) => {
    onNextClick(e);
    const navWrapNode = getRef('navWrap');
    const navWrapNodeWH = getOffsetWH(navWrapNode);
    updateOffset(offset - navWrapNodeWH);
  };

  React.useEffect(() => {
    const debouncedResize = debounce(() => {
      setNextPrev();
      scrollToActiveTab();
    }, 200);
    const resizeObserver = new ResizeObserver(debouncedResize);
    resizeObserver.observe(getRef('container'));
  }, []);

  React.useEffect(() => {
    // wait next, prev show hide
    /* eslint react/no-did-update-set-state:0 */
    if (activeKey) {
      scrollToActiveTab();
    }
  }, [activeKey]);

  React.useEffect(() => {
    if (isCheckNextPrev) {
      setIsCheckNextPrev(false);
      setNextPrev();
    }
  }, [isCheckNextPrev]);

  React.useEffect(() => {
    if (states.prev || states.next) {
      setHasScrollBtn(true);
    }
  }, [states]);

  return {
    states,
    prevOnClick,
    nextOnClick,
    prevTransitionEnd,
  };
};

const ScrollableTabBarNode = (props) => {
  const state = useHooks(props);
  const { prefixCls, scrollAnimated, previcon, nexticon, saveRef, children } = props;

  const {
    states,
    prevOnClick,
    nextOnClick,
    prevTransitionEnd,
  } = state;
  const { next, prev } = states;
  const showNextPrev = prev || next;

  const prevButton = (
    <span
      onClick={prev ? prevOnClick : null}
      onKeyDown={prev ? prevOnClick : null}
      unselectable="unselectable"
      className={classnames({
        [`${prefixCls}-tab-prev`]: 1,
        [`${prefixCls}-tab-btn-disabled`]: !prev,
        [`${prefixCls}-tab-arrow-show`]: showNextPrev,
      })}
      onTransitionEnd={prevTransitionEnd}
    >
      {previcon || <span className={`${prefixCls}-tab-prev-icon`} />}
    </span>
  );

  const nextButton = (
    <span
      onClick={next ? nextOnClick : null}
      onKeyDown={next ? nextOnClick : null}
      unselectable="unselectable"
      className={classnames({
        [`${prefixCls}-tab-next`]: 1,
        [`${prefixCls}-tab-btn-disabled`]: !next,
        [`${prefixCls}-tab-arrow-show`]: showNextPrev,
      })}
    >
      {nexticon || <span className={`${prefixCls}-tab-next-icon`} />}
    </span>
  );

  const navClassName = `${prefixCls}-nav`;
  const navClasses = classnames({
    [navClassName]: true,
    [scrollAnimated ? `${navClassName}-animated` : `${navClassName}-no-animated`]: true,
  });

  return (
    <div
      className={classnames({
        [`${prefixCls}-nav-container`]: 1,
        [`${prefixCls}-nav-container-scrolling`]: showNextPrev,
      })}
      key="container"
      ref={saveRef('container')}
    >
      {prevButton}
      {nextButton}
      <div className={`${prefixCls}-nav-wrap`} ref={saveRef('navWrap')}>
        <div className={`${prefixCls}-nav-scroll`}>
          <div className={navClasses} ref={saveRef('nav')}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableTabBarNode;

ScrollableTabBarNode.defaultProps = {
  tabbarposition: 'left',
  prefixCls: '',
  scrollAnimated: true,
  onPrevClick: (() => { }),
  onNextClick: (() => { }),
};
