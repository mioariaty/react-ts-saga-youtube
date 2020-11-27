import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
import { VideoDocument } from 'models/Videos';
import styles from './Youtube.module.scss';

export interface VideoPlayer {
  videoId: VideoDocument['id'];
}

const VideoPlayer: FC<VideoPlayer> = ({ videoId }) => {
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  return (
    <View tagName="div" className={styles.container}>
      <iframe className={styles.video} src={url} frameBorder="0" allowFullScreen title="video" />
    </View>
  );
};

export default VideoPlayer;
