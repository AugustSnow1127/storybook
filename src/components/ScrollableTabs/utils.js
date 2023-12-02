export const setTransform = (style, v) => {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
};

export const isTransform3dSupported = (style) => (
  ('transform' in style || 'webkitTransform' in style || 'MozTransform' in style) && window.atob
);

export const getDataAttr = (props) => (
  Object.keys(props).reduce((prev, key) => {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {})
);

export const isVertical = (tabbarposition) => (
  tabbarposition === 'left' || tabbarposition === 'right'
);