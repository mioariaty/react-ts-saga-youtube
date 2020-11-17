import { classNames, View, Text } from 'core';
import { VideoDocument } from 'models/Videos';
import React, { CSSProperties, DOMAttributes, FC } from 'react';
import convertTime from 'utils/functions/formatTime';
import { formatShortString } from 'utils/functions/formatViewCount';

import styles from './YoutubeCard.module.scss';

export interface YoutubeCardProps {
  uri: VideoDocument['snippet']['thumbnails']['standard']['url'];
  title: VideoDocument['snippet']['title'];
  duration: VideoDocument['contentDetails']['duration'];
  channel: VideoDocument['snippet']['channelTitle'];
  timeAgo?: VideoDocument['snippet']['publishedAt'];
  viewCount: VideoDocument['statistics']['viewCount'];
  className?: string;
  style?: CSSProperties;
  isVertical?: boolean;
  onClick?: DOMAttributes<HTMLElement>['onClick'];
}

const YoutubeCard: FC<YoutubeCardProps> = ({ channel, duration, title, uri, className, style, timeAgo, viewCount, isVertical = false, onClick }) => {
  const vertical = isVertical ? styles.vertical : '';
  const combineProps = { style, className: classNames(styles.container, className, vertical) };
  return (
    <View {...combineProps} tagName="div" backgroundColor="gray1" onClick={onClick}>
      <View className={styles.thumbnailContainer} tagName="div">
        <img className={styles.thumbImage} src={uri} alt="" />
        <Text className={styles.dutation} tagName="p" color="light" nightModeBlacklist="color">
          {convertTime(duration)}
        </Text>
      </View>

      <View tachyons={['flex', 'relative', 'ma0', 'flex-column']} tagName="div" className={styles.detail}>
        {/* <View className={styles.avatar} tagName="div">
          <img
            src="https://yt3.ggpht.com/a-/AOh14GgWD73Hj05yzDoyZ4JZC_0v6m1DOat1-XcGdg=s68-c-k-c0x00ffffff-no-rj-mo"
            className={styles.avatarImage}
            alt=""
          />
        </View> */}
        <View className={styles.meta} tagName="div">
          <Text color="dark" tagName="h3" className={styles.title}>
            {title}
          </Text>
          <Text color="dark3" tagName="p" className={styles.channel}>
            {channel}
          </Text>
        </View>
        <View tagName="div" tachyons={['flex', 'flex-row', 'items-center']}>
          <Text color="dark4" tagName="p" className={styles.view}>
            {formatShortString(viewCount)} views
          </Text>
          &nbsp;
          <Text color="dark" style={{ opacity: '0.7' }}>
            •
          </Text>
          &nbsp;
          <Text color="dark4" tagName="p" className={styles.time}>
            {timeAgo}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default YoutubeCard;
