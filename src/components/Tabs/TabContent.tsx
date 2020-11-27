import React, { FC } from 'react';
import { View } from 'wiloke-react-core';

export interface TabProps {
  title: string;
}

const TabContent: FC<TabProps> = ({ children }) => {
  return <View> {children}</View>;
};

export default TabContent;
