import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const RndContext = createContext();

export const useRndStore = () => useContext(RndContext);

export const RndContextProvider = ({ children }) => {
  const initialState = {
    rndModal: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "rndModal":
        return { ...state, rndModal: !state.rndModal };
      default:
        return state;
    }
  };

  const [rndStatus, dispatchRndStatus] = React.useReducer(reducer, initialState);

  return (
    <RndContext.Provider
      value={{
        rndStatus,
        dispatchRndStatus,
      }}
    >
      {children}
    </RndContext.Provider>
  );
};

RndContext.propTypes = {
  children: PropTypes.node.isRequired,
};
