import { ChannelDoucment } from 'models/Channels';
import React, { FC } from 'react';
import { formatShortString } from 'utils/functions/formatViewCount';
import { Button, Divider, Text, View } from 'wiloke-react-core';
import styles from './VideoPlayerChannel.module.scss';

interface VideoPlayerChannelProps {
  title: ChannelDoucment['snippet']['title'];
  avatar: ChannelDoucment['snippet']['thumbnails']['default']['url'];
  followCounts: ChannelDoucment['statistics']['subscriberCount'];
  // tags: VideoDocument['snippet']['tags'];
}

const VideoPlayerChannel: FC<VideoPlayerChannelProps> = ({ title, avatar, followCounts }) => {
  return (
    <>
      <View className={styles.container} tachyons="flex">
        <View className={styles.avatar}>
          <img src={avatar} />
        </View>
        <View className={styles.content}>
          <Text color="dark" tachyons="mb2">
            {title}
          </Text>
          <Text color="gray5">{formatShortString(String(followCounts))} Người đăng kí</Text>
        </View>
        <View className={styles.action}>
          <Button
            backgroundColor="danger"
            color="light"
            nightModeBlacklist="all"
            size="small"
            fontSize={14}
            style={{ paddingTop: '8px', paddingBottom: '8px' }}
          >
            ĐĂNG KÍ
          </Button>
        </View>
      </View>
      <Divider tachyons="mb4" />
    </>
  );
};

export default VideoPlayerChannel;
