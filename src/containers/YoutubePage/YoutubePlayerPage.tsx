import { ProgressLoader, Text, View } from 'wiloke-react-core';
import React, { FC } from 'react';
import VideoPlayer from 'components/Youtube/YoutubePlayer';
import { useSelector } from 'react-redux';
import VideoPlayerMeta from 'components/Youtube/VideoPlayerMeta';
import { videoSelector } from './selectors';

const YoutubePlayerPage: FC = () => {
  const videoPlayer = useSelector(videoSelector);
  const { contentDetails, snippet, statistics } = videoPlayer.data[0];

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
      </>
    );
  };
  return (
    <View style={{ marginTop: 76 }} tagName="div">
      <View row>
        <View columns={[12, 10, 9]}>{_renderVideoPlayer()}</View>
        <View columns={[12, 2, 3]}>{/* related video */}</View>
      </View>
    </View>
  );
};
export default YoutubePlayerPage;
