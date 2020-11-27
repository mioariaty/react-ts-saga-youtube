import React from 'react';
import { Divider, View } from 'wiloke-react-core';
import YoutubeGridHeader from '../YoutubeGridHeader';

const VideoList = () => {
  return (
    <View>
      <YoutubeGridHeader title="test" />
      <Divider color="gray5" />
    </View>
  );
};
export default VideoList;
