import React, { FC, ReactElement, useState } from 'react';
import { View } from 'wiloke-react-core';
import TabTitle from './TabTitle';

export interface TabsProps {
  children: ReactElement[];
}

const Tabs: FC<TabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
      <View tagName="ul">
        {children.map((item, index) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          <TabTitle key={index} title={item.props.title} index={index} setSelectedTab={setSelectedTab} />;
        })}
      </View>
      {children[selectedTab]}
    </>
  );
};

export default Tabs;
