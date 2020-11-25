import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { VideoDocument } from 'models/Videos';
import React, { FC } from 'react';
import { MaterialIcon, Text, View } from 'wiloke-react-core';
import styles from './VideoPlayerMeta.module.scss';

TimeAgo.addLocale(en);
const time: TimeAgo = new TimeAgo();

export interface VideoPlayerMetaProps {
  publishAt: VideoDocument['snippet']['publishedAt'];
  title: VideoDocument['snippet']['title'];
  channelTitle: VideoDocument['snippet']['channelTitle'];
  description: VideoDocument['snippet']['description'];
  commentCount: VideoDocument['statistics']['commentCount'];
  dislikeCount: VideoDocument['statistics']['dislikeCount'];
  likeCount: VideoDocument['statistics']['likeCount'];
  viewCount: VideoDocument['statistics']['viewCount'];
  duration: VideoDocument['contentDetails']['duration'];
}

const VideoPlayerMeta: FC<VideoPlayerMetaProps> = ({ title, viewCount, publishAt, likeCount, dislikeCount }) => {
  const regex = /(.)(?=(\d{3})+$)/g;
  return (
    <View tagName="div" className={styles.container}>
      <Text tagName="h2" color="dark" tachyons="mb3" className={styles.title}>
        {title}
      </Text>
      <View tagName="div" tachyons={['flex', 'justify-between']}>
        <View tagName="div" tachyons={['flex', 'items-center']} className={styles.view}>
          <Text color="gray5" tagName="p">
            {viewCount.replace(regex, '$1,')} views
          </Text>
          <Text color="gray5" tachyons={['mr3', 'ml3']}>
            -
          </Text>
          <Text color="gray5" tagName="p">
            {time.format(new Date(String(publishAt)))}
          </Text>
        </View>
        <View tagName="div" tachyons={['flex', 'items-center', 'mb3']} className={styles.actionMeta}>
          <Text color="gray5" tachyons={['flex', 'items-center', 'mr4']}>
            <MaterialIcon name="thumb_up" /> &nbsp; {likeCount.replace(regex, '$1,')}
          </Text>
          <Text color="gray5" tachyons={['flex', 'items-center']}>
            <MaterialIcon name="thumb_down" /> &nbsp; {dislikeCount.replace(regex, '$1,')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VideoPlayerMeta;
