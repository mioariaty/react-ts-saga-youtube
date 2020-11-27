import React, { FC, useCallback } from 'react';
import { View } from 'wiloke-react-core';

export interface TabTitleProps {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
}

const TabTitle: FC<TabTitleProps> = ({ index, setSelectedTab, title }) => {
  const _onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <View tagName="li">
      <button onClick={_onClick}> {title} </button>
    </View>
  );
};

export default TabTitle;
