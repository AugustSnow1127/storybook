import RndDemo from '../components/Rnd/RndDemo';
import { RndContextProvider } from '../components/Rnd/rndStore';

const ContextRndDemo = (args) => {
  return (
    <RndContextProvider>
      <RndDemo {...args} />
    </RndContextProvider>
  )
};

export default {
  title: 'Example/Rnd',
  component: ContextRndDemo,
  tags: ['rnd'],
};

export const RndModal = {
  args: {
    storeKey: "rndModal"
  },
};