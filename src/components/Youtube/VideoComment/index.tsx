import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { CommentThreadDocument } from 'models/Comments';
import React, { FC } from 'react';
import { Image, MaterialIcon, Text, View } from 'wiloke-react-core';
import styles from './VideoComment.module.scss';
TimeAgo.addLocale(en);
const time: TimeAgo = new TimeAgo();

export interface VideoCommentProps {
  commentContent: CommentThreadDocument['snippet']['topLevelComment']['snippet']['textOriginal'];
  authorName: CommentThreadDocument['snippet']['topLevelComment']['snippet']['authorDisplayName'];
  authorImage: CommentThreadDocument['snippet']['topLevelComment']['snippet']['authorProfileImageUrl'];
  publishedAt: CommentThreadDocument['snippet']['topLevelComment']['snippet']['publishedAt'];
  likeCount: CommentThreadDocument['snippet']['topLevelComment']['snippet']['likeCount'];
}

const VideoComment: FC<VideoCommentProps> = ({ authorImage, authorName, commentContent, likeCount, publishedAt }) => {
  return (
    <View tagName="div" className={styles.container} tachyons={['flex']}>
      <View tagName="div" className={styles.avatar}>
        <Image src={authorImage} />
      </View>
      <View tagName="div" className={styles.content} tachyons={['flex', 'flex-column']}>
        <View tagName="div" className={styles.contentHeader} tachyons={['flex', 'mb2']}>
          <Text tagName="h4" color="dark" tachyons={['mr3', 'fs-normal']}>
            {authorName}
          </Text>
          <Text tagName="p" color="dark4">
            {time.format(new Date(publishedAt))}
          </Text>
        </View>
        <View className={styles.comments} tachyons="mb3">
          <Text tagName="p" color="dark">
            {commentContent}
          </Text>
        </View>
        <View>
          <Text tagName="p" color="dark" tachyons={['flex', 'items-center']}>
            <MaterialIcon name="thumb_up" tachyons="mr2" /> {likeCount}
          </Text>
        </View>
      </View>
      <View tagName="div" className={styles.action}></View>
    </View>
  );
};

export default VideoComment;
