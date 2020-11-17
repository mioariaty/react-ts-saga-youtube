import Spinner from 'components/Spinner/Spinner';
import { Text, View } from 'core';
import { VideoSearchedDoc } from 'models/Videos';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { videoSelector } from './selectors';

const YoutubeSearchPage: FC = () => {
  const videoList = useSelector(videoSelector);

  const _renderListSearch = (item: VideoSearchedDoc) => {
    return <View color="dark">{item.snippet.title}</View>;
  };

  const _renderVideoList = () => {
    if (videoList.isLoading) {
      return <Spinner />;
    }

    if (videoList.message) {
      return (
        <Text tagName="h2" color="dark">
          {videoList.message}
        </Text>
      );
    }
    return videoList.videoSearch.map(_renderListSearch);
  };

  return (
    <View style={{ marginTop: 76 }} tagName="div">
      <View tagName="div" row tachyons={['flex-column']}>
        {_renderVideoList()}
      </View>
    </View>
  );
};
export default YoutubeSearchPage;
