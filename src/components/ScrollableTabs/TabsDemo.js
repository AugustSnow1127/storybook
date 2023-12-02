import React from 'react'
import ScrollableTabs from "./ScrollableTabs";
import { Tabs } from 'antd';

const constructTabPane = (start, num) => {
  const ends = [];
  let index = 0;
  for (let i = start; i < start + num; i += 1) {
    ends.push(
      <Tabs.TabPane placeholder={`loading ${i}`} tab={`Tab ${i + 1}`} disabled={i === 2} key={index} />,
    );
    index += 1;
  }
  return ends;
};

const fakeTabPanes = constructTabPane(0, 12);
const fakeTabPanes2 = constructTabPane(0, 2);

const panelContent = new Array(10).fill(null).map((_, i) => {
  const id = String(i);
  return {
    key: id,
    children: `Content of Tab Pane ${i + 1}`,
    style:
      i === 0
        ? {
          height: 200,
        }
        : undefined,
  };
});

export const TabsDemo = ({ tabsType, size }) => {
  const [activeKey1, setActiveKey1] = React.useState("0");

  return (
    <>
      <ScrollableTabs
        activeKey={activeKey1}
        tabpanes={fakeTabPanes}
        style={{ width: 600 }}
        onChange={(e) => setActiveKey1(e)}
        tabsType={tabsType}
        size={size}
        pre
      />
      {panelContent.map((e) => (
        activeKey1 === e.key && (
          e.children
        )
      ))}
    </>
  );
};
