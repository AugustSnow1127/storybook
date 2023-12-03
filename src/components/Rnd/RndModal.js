/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Rnd from './Rnd.js';
import iconCloseW from "../../assets/ic_close_w.svg";
import { useRndStore } from './rndStore';

import {
  ModalStyle,
  ModalHeader,
  CloseIcon,
  ModalBody,
  ModalTitle,
} from './style.js';

const RndModal = ({
  children,
  title,
  storeKey,
}) => {
  const { dispatchRndStatus } = useRndStore();

  return (
    <Rnd>
      <ModalStyle>
        <ModalHeader>
          <>
            <ModalTitle>{title}</ModalTitle>
            <CloseIcon src={iconCloseW} onClick={() => dispatchRndStatus({ type: storeKey })} />
          </>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalStyle>
    </Rnd>
  );
};

export default RndModal;

RndModal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  storeKey: PropTypes.string.isRequired,
};

RndModal.defaultProps = {
  children: null,
  title: 'RndModal',
};
