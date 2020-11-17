import React, { FC } from 'react';
import { Text, View } from 'core';
import { VideoDocument } from 'models/Videos';
import styles from './Youtube.module.scss';

export interface VideoDetailProps {
  videoId: VideoDocument['id'];
  title: VideoDocument['snippet']['title'];
  description: VideoDocument['snippet']['description'];
}

const YoutubeDetail: FC<VideoDetailProps> = ({ description, title, videoId }) => {
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <View tagName="div" className={styles.container}>
      <View tagName="div" className={styles.video}>
        <iframe className={styles.player} src={url} frameBorder="0" allowFullScreen title="video" />
      </View>
      <Text tagName="h2">{title}</Text>
      <Text tagName="h3">{description}</Text>
    </View>
  );
};

export default YoutubeDetail;
