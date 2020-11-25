import VideoComment from 'components/Youtube/VideoComment';
import VideoPlayerMeta from 'components/Youtube/VideoPlayerMeta';
import YoutubeCard from 'components/Youtube/YoutubeCard/YoutubeCard';
import VideoPlayer from 'components/Youtube/YoutubePlayer';
import { CommentThreadDocument } from 'models/Comments';
import { VideoDocument, VideoSearchedDoc } from 'models/Videos';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Endpoint } from 'types/endpoint';
import { ActivityIndicator, ProgressLoader, Text, View } from 'wiloke-react-core';
import { useGetChannelByIdRequest } from './actions/getChannelByIdAction';
import { useGetCommentThreadsRequest } from './actions/getComnentThreadAction';
import { useGetRelatedVideoRequest } from './actions/getRelatedVideoAction';
import { useGetVideoByIdRequest } from './actions/getVideoByIdAction';
import { channelSelector, commentSelector, videoSearchSelector, videoSelector } from './selectors';
import SkeletonYoutubeCard from './SkeletonYoutubeCard';

const YoutubePlayerPage: FC = () => {
  const history = useHistory();
  const videoPlayer = useSelector(videoSelector);
  const relatedVideos = useSelector(videoSearchSelector);
  const commentThreads = useSelector(commentSelector);
  const channelById = useSelector(channelSelector);

  const { videoId, channelId } = videoPlayer;
  const getVideoPlayer = useGetVideoByIdRequest();
  const getComments = useGetCommentThreadsRequest();
  const getRelatedVideoRequest = useGetRelatedVideoRequest();
  const getChannelByIdRequest = useGetChannelByIdRequest();

  useEffect(() => {
    getComments({ endpoint: Endpoint.COMMENT_THREAD, videoId: videoId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  useEffect(() => {
    getRelatedVideoRequest({ endpoint: Endpoint.SEARCH, videoId: videoId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  useEffect(() => {
    getChannelByIdRequest({ endpoint: Endpoint.CHANNELS, channelId: channelId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  const _handleVideoPlayer = (videoId: VideoDocument['id'], channelId: VideoDocument['snippet']['channelId']) => () => {
    getVideoPlayer({ endpoint: Endpoint.VIDEOS, videoId: videoId, channelId: channelId });
    history.push(`/youtube/${videoId}`);
  };

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
  const _renderListComments = (item: CommentThreadDocument) => {
    const { authorDisplayName, authorProfileImageUrl, textOriginal, likeCount, publishedAt } = item.snippet.topLevelComment.snippet;
    const { id } = item;
    return (
      <VideoComment
        key={id}
        authorImage={authorProfileImageUrl}
        authorName={authorDisplayName}
        commentContent={textOriginal}
        likeCount={likeCount}
        publishedAt={publishedAt}
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

  const _renderCommentRequest = () => {
    if (commentThreads.isLoading) {
      return <ActivityIndicator />;
    }
    // if (commentThreads.message) {
    //   return (
    //     <Text tagName="h3" color="dark">
    //       {commentThreads.message}
    //     </Text>
    //   );
    // }
    return commentThreads.data.map(_renderListComments);
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

  const _renderChannelRequest = () => {
    if (channelById.isLoading) {
      return <SkeletonYoutubeCard item={1} isList />;
    }
    if (channelById.message) {
      return <Text>{channelById.message}</Text>;
    }
    console.log(channelById.data);
  };
  return (
    <View style={{ marginTop: 76 }} tagName="div">
      <View tachyons={['flex', 'flex-wrap']}>
        <View columns={[12, 8, 8]}>
          {_renderVideoPlayer()}
          {_renderChannelRequest()}
          {_renderCommentRequest()}
        </View>
        <View columns={[12, 4, 4]} tachyons={['pl3', 'pr3']}>
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
