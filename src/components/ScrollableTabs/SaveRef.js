import React from 'react';

const SaveRef = ({ children }) => {
  const refs = React.useRef({});

  const getRef = React.useCallback((name) => refs.current[name], []);

  const saveRef = React.useCallback((name) => (node) => {
    if (node) {
      refs.current[name] = node;
    }
  }, []);

  return children(saveRef, getRef);
};

SaveRef.defaultProps = {
  children: () => null,
};

export default SaveRef;
