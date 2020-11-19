import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
import { VideoDocument } from 'models/Videos';
import styles from './Youtube.module.scss';

export interface VideoPlayer {
  videoId: VideoDocument['id'];
}

const VideoPlayer: FC<VideoPlayer> = ({ videoId }) => {
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <View tagName="div" className={styles.container}>
      <View tagName="div" className={styles.video}>
        <iframe className={styles.player} src={url} frameBorder="0" allowFullScreen title="video" />
      </View>
    </View>
  );
};

export default VideoPlayer;
