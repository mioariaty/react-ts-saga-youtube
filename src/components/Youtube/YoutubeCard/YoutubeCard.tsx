import { View, Text, Image } from 'wiloke-react-core';
import { VideoDocument } from 'models/Videos';
import React, { CSSProperties, DOMAttributes, FC } from 'react';
import convertTime from 'utils/functions/formatTime';
import { formatShortString } from 'utils/functions/formatViewCount';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { classNames } from 'wiloke-react-core/utils';
import styles from './YoutubeCard.module.scss';

export interface YoutubeCardProps {
  uri: VideoDocument['snippet']['thumbnails']['medium']['url'];
  title: VideoDocument['snippet']['title'];
  duration?: VideoDocument['contentDetails']['duration'];
  channel: VideoDocument['snippet']['channelTitle'];
  timeAgo?: VideoDocument['snippet']['publishedAt'];
  viewCount?: VideoDocument['statistics']['viewCount'];
  className?: string;
  style?: CSSProperties;
  isVertical?: boolean;
  onClick?: DOMAttributes<HTMLElement>['onClick'];
}
TimeAgo.addLocale(en);
const time: TimeAgo = new TimeAgo();

const YoutubeCard: FC<YoutubeCardProps> = ({ channel, duration, title, uri, className, style, timeAgo, viewCount, isVertical = false, onClick }) => {
  const vertical = isVertical ? styles.vertical : '';
  const combineProps = { style, className: classNames(styles.container, className, vertical) };
  return (
    <View {...combineProps} tagName="div" backgroundColor="gray1" onClick={onClick}>
      <View className={styles.thumbnailContainer} tagName="div">
        <Image src={uri} aspectRatioInPercent={56.25} lazyLoad />
        <Text className={styles.dutation} tagName="p" color="light" nightModeBlacklist="color">
          {convertTime(String(duration))}
        </Text>
      </View>

      <View tachyons={['flex', 'relative', 'ma0', 'flex-column']} tagName="div" className={styles.detail}>
        <View className={styles.meta} tagName="div">
          <Text color="dark" tagName="h3" className={styles.title}>
            {title}
          </Text>
          <Text color="dark3" tagName="p" className={styles.channel} tachyons="mb2">
            {channel}
          </Text>
        </View>
        <View tagName="div" tachyons={['flex', 'flex-row', 'items-center']}>
          {viewCount && (
            <Text color="dark4" tagName="p" className={styles.view}>
              {formatShortString(String(viewCount))} views
            </Text>
          )}

          {viewCount && (
            <Text color="dark" style={{ opacity: '0.7' }}>
              &nbsp; • &nbsp;
            </Text>
          )}

          <Text color="dark4" tagName="p" className={styles.time}>
            {time.format(new Date(String(timeAgo)))}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default YoutubeCard;
