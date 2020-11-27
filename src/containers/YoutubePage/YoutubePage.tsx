import YoutubeCard from 'components/Youtube/YoutubeCard/YoutubeCard';
import Navigation from 'containers/Navigation/Navigation';
import { VideoDocument } from 'models/Videos';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Endpoint } from 'types/endpoint';
import { GridSmart, ProgressLoader, Text, View } from 'wiloke-react-core';
import { useGetChannelByIdRequest } from './actions/getChannelByIdAction';
import { useGetCommentThreadsRequest } from './actions/getComnentThreadAction';
import { useGetRelatedVideoRequest } from './actions/getRelatedVideoAction';
import { useGetVideoByIdRequest } from './actions/getVideoByIdAction';
import { useGetVideosRequest } from './actions/getVideosAction';
import { videoSelector } from './selectors';
import SkeletonYoutubeCard from './SkeletonYoutubeCard';

const YoutubePage: FC = () => {
  const videoList = useSelector(videoSelector);

  const getVideoListRequest = useGetVideosRequest();
  const getVideoPlayer = useGetVideoByIdRequest();
  const getRelatedVideo = useGetRelatedVideoRequest();
  const getComments = useGetCommentThreadsRequest();
  const getChannels = useGetChannelByIdRequest();

  useEffect(() => {
    getVideoListRequest({ endpoint: Endpoint.VIDEOS });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _handleVideoPlayer = (videoId: VideoDocument['id'], channelId: VideoDocument['snippet']['channelId']) => async () => {
    await getVideoPlayer({ endpoint: Endpoint.VIDEOS, videoId: videoId, channelId: channelId });
    await getRelatedVideo({ endpoint: Endpoint.SEARCH, videoId: videoId });
    await getComments({ endpoint: Endpoint.COMMENT_THREAD, videoId: videoId });
    await getChannels({ endpoint: Endpoint.CHANNELS, channelId: channelId });
  };

  const _renderList = (item: VideoDocument) => {
    return (
      <YoutubeCard
        key={item.id}
        id={item.id}
        channel={item.snippet.channelTitle}
        duration={item.contentDetails?.duration}
        uri={item.snippet.thumbnails.medium.url}
        title={item.snippet.title}
        viewCount={item.statistics?.viewCount}
        timeAgo={item.snippet.publishedAt}
        onClick={_handleVideoPlayer(item.id, item.snippet.channelId)}
      />
    );
  };

  const renderVideoList = () => {
    if (videoList.isLoading) {
      return (
        <>
          <ProgressLoader done={videoList.isLoading} color="danger" containerClassName="progressBar" />
          <SkeletonYoutubeCard item={8} />
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

    return (
      <GridSmart columnWidth={350} columnCount={5} columnGap={16}>
        {videoList.data.map(_renderList)}
      </GridSmart>
    );
  };

  return (
    <>
      <Navigation />
      <View style={{ marginTop: 76 }} tagName="div">
        {renderVideoList()}
      </View>
    </>
  );
};

export default YoutubePage;
