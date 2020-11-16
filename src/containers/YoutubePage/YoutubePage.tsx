import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'core';
import { VideoDocument } from 'models/Videos';
import YoutubeCard from 'components/Youtube/YoutubeCard/YoutubeCard';
import Spinner from '../../components/Spinner/Spinner';
import { videoSelector } from './selectors';
import { useGetVideosRequest } from './actions/getVideosAction';

const YoutubePage: FC = () => {
  const videoList = useSelector(videoSelector);
  const getVideoListRequest = useGetVideosRequest();

  useEffect(() => {
    getVideoListRequest(null);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _onOpenIframeVideo = (id: VideoDocument['id']) => () => {
    console.log(id);
  };

  const _renderList = (item: VideoDocument) => {
    return (
      <YoutubeCard
        key={item.id}
        channel={item.snippet.channelTitle}
        duration={item.contentDetails.duration}
        uri={item.snippet.thumbnails.medium.url}
        title={item.snippet.title}
        onClick={_onOpenIframeVideo(item.id)}
      />
    );
  };

  const renderVideoList = () => {
    if (videoList.isLoading) {
      return <Spinner />;
    }
    if (videoList.message) {
      return <p>error</p>;
    }
    return (
      <View gridEqual colMd={4} tagName="div">
        {videoList.data.map(_renderList)}
      </View>
    );
  };

  return <View tagName="div">{renderVideoList()}</View>;
};

export default YoutubePage;
