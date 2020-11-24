import YoutubeCard from 'components/Youtube/YoutubeCard/YoutubeCard';
import { VideoDocument } from 'models/Videos';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Endpoint } from 'types/endpoint';
import { ProgressLoader, Text, View } from 'wiloke-react-core';
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
  const history = useHistory();

  useEffect(() => {
    getVideoListRequest({ endpoint: Endpoint.VIDEOS });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _handleVideoPlayer = (videoId: VideoDocument['id'], channelId: VideoDocument['snippet']['channelId']) => {
    return () => {
      getVideoPlayer({ endpoint: Endpoint.VIDEOS, videoId: videoId, channelId: channelId });
      getRelatedVideo({ endpoint: Endpoint.SEARCH, videoId: videoId });
      getComments({ endpoint: Endpoint.COMMENT_THREAD, videoId: videoId });
      history.push(`/youtube/watch?v=${videoId}`);
    };
  };

  const _renderList = (item: VideoDocument) => {
    return (
      <YoutubeCard
        key={item.id}
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
      <View gridEqual colSm={2} colXs={1} colMd={3} colLg={4} tagName="div">
        {videoList.data.map(_renderList)}
      </View>
    );
  };

  return (
    <>
      <View style={{ marginTop: 76 }} tagName="div">
        {renderVideoList()}
      </View>
    </>
  );
};

export default YoutubePage;
