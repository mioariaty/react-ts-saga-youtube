import { ChannelDoucment } from 'models/Channels';
import React, { FC } from 'react';
import { Text, View } from 'wiloke-react-core';
import styles from './VideoPlayerChannel.module.scss';

interface VideoPlayerChannelProps {
  title: ChannelDoucment['snippet']['title'];
  // tags: VideoDocument['snippet']['tags'];
}

const VideoPlayerChannel: FC<VideoPlayerChannelProps> = ({ title }) => {
  return (
    <View className={styles.container}>
      <View className={styles.avatar}>
        <Text color="dark">{title}</Text>
      </View>
      <View className={styles.content}></View>
      <View className={styles.action}></View>
    </View>
  );
};

export default VideoPlayerChannel;
