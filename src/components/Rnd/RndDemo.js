import React from 'react';
import { Button } from 'antd';
import RndModal from './RndModal.js';
import { useRndStore } from './rndStore';

import { RndModalChildren } from './style';

const RndDemo = ({ storeKey }) => {
  const { rndStatus, dispatchRndStatus } = useRndStore();

  const DemoModal = () => (
    rndStatus.rndModal ? (
      <RndModal storeKey={storeKey}>
        <RndModalChildren>
          This is a Resizable and Draggable Modal
        </RndModalChildren>
      </RndModal>
    ) : null
  );

  return (
    <>
      <Button type="primary" onClick={() => dispatchRndStatus({ type: storeKey })}>Click ME!</Button>
      <DemoModal />
    </>
  );
};

export default React.memo(RndDemo);
