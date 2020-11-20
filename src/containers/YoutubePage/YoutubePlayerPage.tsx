import { ProgressLoader, Text, View } from 'wiloke-react-core';
import React, { FC } from 'react';
import VideoPlayer from 'components/Youtube/YoutubePlayer';
import { useSelector } from 'react-redux';
import VideoPlayerMeta from 'components/Youtube/VideoPlayerMeta';
import { VideoDocument, VideoSearchedDoc } from 'models/Videos';
import YoutubeCard from 'components/Youtube/YoutubeCard/YoutubeCard';
import { useHistory } from 'react-router';
import { Endpoint } from 'types/endpoint';
import { useGetVideoByIdRequest } from './actions/getVideoByIdAction';
import SkeletonYoutubeCard from './SkeletonYoutubeCard';
import { videoSelector, videoSearchSelector } from './selectors';

const YoutubePlayerPage: FC = () => {
  const videoPlayer = useSelector(videoSelector);
  const relatedVideos = useSelector(videoSearchSelector);
  const getVideoPlayer = useGetVideoByIdRequest();
  const history = useHistory();

  const _renderListVideoPlayer = (item: VideoDocument) => {
    const { contentDetails, snippet, statistics } = item;
    return (
      <VideoPlayerMeta
        channelTitle={snippet.channelTitle}
        commentCount={statistics.commentCount}
        description={snippet.description}
        dislikeCount={statistics.dislikeCount}
        duration={contentDetails.duration}
        likeCount={statistics.likeCount}
        publishAt={snippet.publishedAt}
        title={snippet.title}
        viewCount={statistics.viewCount}
      />
    );
  };

  const _renderVideoPlayer = () => {
    if (videoPlayer.isLoading) {
      return <ProgressLoader done={videoPlayer.isLoading} color="danger" containerClassName="progressBar" />;
    }
    if (videoPlayer.message) {
      return (
        <Text tagName="h2" color="dark">
          {videoPlayer.message}
        </Text>
      );
    }
    return (
      <>
        <VideoPlayer videoId={videoPlayer.videoId} />
        {videoPlayer.data.map(_renderListVideoPlayer)}
      </>
    );
  };

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
  const _renderRelatedVideos = () => {
    if (relatedVideos.isLoading) {
      return <SkeletonYoutubeCard item={12} isList />;
    }
    if (relatedVideos.message) {
      return (
        <Text tagName="h2" color="dark">
          {videoPlayer.message}
        </Text>
      );
    }
    return relatedVideos.data.map(_renderListSearch);
  };

  return (
    <View style={{ marginTop: 76 }} tagName="div">
      <View row>
        <View columns={[12, 10, 8]} tachyons="pr4">
          {_renderVideoPlayer()}
        </View>
        <View columns={[12, 2, 4]}>
          <Text tagName="p" color="dark4" tachyons="mb3" style={{ fontSize: 24 }}>
            Related Videos
          </Text>
          {_renderRelatedVideos()}
        </View>
      </View>
    </View>
  );
};
export default YoutubePlayerPage;
