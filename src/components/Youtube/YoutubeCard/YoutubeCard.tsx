import { classNames, View, Text } from 'core';
import { VideoDocument } from 'models/Videos';
import React, { CSSProperties, DOMAttributes, FC } from 'react';
import convertTime from 'utils/functions/formatTime';
import styles from './YoutubeCard.module.scss';
export interface YoutubeCardProps {
  uri: VideoDocument['snippet']['thumbnails']['standard']['url'];
  title: VideoDocument['snippet']['title'];
  duration: VideoDocument['contentDetails']['duration'];
  channel: VideoDocument['snippet']['channelTitle'];
  style?: CSSProperties;
  className?: string;
  onClick?: DOMAttributes<HTMLElement>['onClick'];
}

const YoutubeCard: FC<YoutubeCardProps> = ({ channel, duration, title, uri, className, style, onClick }) => {
  const combineProps = { style, className: classNames(styles.container, className) };
  return (
    <View {...combineProps} tagName="div" backgroundColor="gray1" onClick={onClick}>
      <View className={styles.thumbnailContainer} tagName="div">
        <View tagName="div" className={styles.thumbLink}></View>
        <img className={styles.thumbImage} src={uri} alt="" />
        <Text className={styles.dutation} tagName="p" color="light" nightModeBlacklist="color">
          {convertTime(duration)}
        </Text>
      </View>

      <View tachyons={['flex', 'relative', 'flex-row', 'ma0']} tagName="div" className={styles.detail}>
        {/* <View className={styles.avatar} tagName="div">
          <img src={avatarChannel} className={styles.avatarImage} alt="" />
        </View> */}
        <View className={styles.meta} tagName="div">
          <Text color="dark" tagName="h3" className={styles.title}>
            {title}
          </Text>
          <Text color="dark3" tagName="p" className={styles.channel}>
            {channel}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default YoutubeCard;
