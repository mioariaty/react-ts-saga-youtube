import { ProgressLoader, Text, View } from 'wiloke-react-core';
import { VideoDocument, VideoSearchedDoc } from 'models/Videos';
import React, { FC } from 'react';
import YoutubeCard from 'components/Youtube/YoutubeCard/YoutubeCard';
import { useSelector } from 'react-redux';
import { Endpoint } from 'types/endpoint';
import { useHistory } from 'react-router';
import { videoSearchSelector } from './selectors';
import { useGetVideoByIdRequest } from './actions/getVideoByIdAction';

const YoutubeSearchPage: FC = () => {
  const videoList = useSelector(videoSearchSelector);
  const getVideoPlayer = useGetVideoByIdRequest();
  const history = useHistory();

  const _handleVideoPlayer = (videoId: VideoDocument['id'], channelId: VideoDocument['snippet']['channelId']) => () => {
    getVideoPlayer({ endpoint: Endpoint.VIDEOS, videoId: videoId, channelId: channelId });
    history.push(`/youtube/${videoId}`);
  };

  const _renderListSearch = (item: VideoSearchedDoc) => {
    const { channelTitle, publishedAt, thumbnails, title, channelId } = item.snippet;
    const { videoId } = item.id;
    return (
      <YoutubeCard
        isVertical
        key={videoId}
        channel={channelTitle}
        title={title}
        uri={thumbnails.medium.url}
        onClick={_handleVideoPlayer(videoId, channelId)}
        timeAgo={publishedAt}
      />
    );
  };

  const _renderVideoList = () => {
    if (videoList.isLoading) {
      return <ProgressLoader done={videoList.isLoading} color="danger" containerClassName="progressBar" />;
    }

    if (videoList.message) {
      return (
        <Text tagName="h2" color="dark">
          {videoList.message}
        </Text>
      );
    }
    return videoList.data.map(_renderListSearch);
  };

  return (
    <View style={{ marginTop: 76, maxWidth: 960 }} tagName="div" tachyons={['ml-auto', 'mr-auto']}>
      <View tagName="div" row tachyons={['flex-column']}>
        {_renderVideoList()}
      </View>
    </View>
  );
};
export default YoutubeSearchPage;
