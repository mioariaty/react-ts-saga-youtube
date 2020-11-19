import { TitleVideoCategoryInteraface } from 'models/HeaderTitle';
import React from 'react';
import { Text, View } from 'wiloke-react-core';
import styles from './YoutubeGridHeader.module.scss';

interface YoutubeGridHeaderProps {
  title: TitleVideoCategoryInteraface['snippet']['title'];
}

export default function YoutubeGridHeader({ title }: YoutubeGridHeaderProps) {
  return (
    <View className={styles.container}>
      <Text tagName="h3" className={styles.title}>
        {title}
      </Text>
    </View>
  );
}
