import { TabsDemo } from '../components/ScrollableTabs/TabsDemo';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/ScrollableTabs',
  component: TabsDemo,
  tags: ['tabs'],
};

export const MainTabs = {
  args: {
    tabsType: "ScrollableTabs"
  },
};

export const SmallMainTabs = {
  args: {
    size: 'small',
    tabsType: 'ScrollableTabs',
  },
};

export const VersionTabs = {
  args: {
    tabsType: 'ScrollableVersionTabs',
  },
};

export const SmallVersionTabs = {
  args: {
    size: 'small',
    tabsType: 'ScrollableVersionTabs',
  },
};

export const SubTabs = {
  args: {
    tabsType: 'ScrollableSubTabs',
  },
};

export const SmallSubTabs = {
  args: {
    size: 'small',
    tabsType: 'ScrollableSubTabs',
  },
};

export const StepTabs = {
  args: {
    tabsType: 'ScrollableStepTabs',
  },
};

export const SmallStepTabs = {
  args: {
    size: 'small',
    tabsType: 'ScrollableStepTabs',
  },
};
