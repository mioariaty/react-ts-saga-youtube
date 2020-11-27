import YoutubeCard from 'components/Youtube/YoutubeCard/YoutubeCard';
import Navigation from 'containers/Navigation/Navigation';
import { VideoDocument, VideoSearchedDoc } from 'models/Videos';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Endpoint } from 'types/endpoint';
import { ProgressLoader, Text, View } from 'wiloke-react-core';
import { useGetVideoByIdRequest } from './actions/getVideoByIdAction';
import { videoSearchSelector } from './selectors';
import SkeletonYoutubeCard from './SkeletonYoutubeCard';

const YoutubeSearchPage: FC = () => {
  const videoList = useSelector(videoSearchSelector);
  const getVideoPlayer = useGetVideoByIdRequest();
  const history = useHistory();

  useEffect(() => {
    getVideoPlayer({ endpoint: Endpoint.VIDEOS });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        id={videoId}
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
      return (
        <>
          <ProgressLoader done={videoList.isLoading} color="danger" containerClassName="progressBar" />
          <SkeletonYoutubeCard item={10} isList />
        </>
      );
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
    <>
      <Navigation />
      <View style={{ marginTop: 76, maxWidth: 960 }} tagName="div" tachyons={['ml-auto', 'mr-auto']}>
        <View tagName="div" row tachyons={['flex-column']}>
          {_renderVideoList()}
        </View>
      </View>
    </>
  );
};
export default YoutubeSearchPage;
