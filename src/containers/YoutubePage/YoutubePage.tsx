import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from 'core';
import { VideoDocument, VideoSearchedDoc } from 'models/Videos';
import YoutubeCard from 'components/Youtube/YoutubeCard/YoutubeCard';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Menu from 'components/Menu/Menu';
import { Endpoint } from 'types/endpoint';
import { useHistory } from 'react-router';
import Spinner from '../../components/Spinner/Spinner';
import { videoSelector } from './selectors';
import { useGetVideosRequest } from './actions/getVideosAction';
import { useSearchVideosRequest } from './actions/searchVideosAction';

TimeAgo.addLocale(en);
const timeAgo: TimeAgo = new TimeAgo();

const YoutubePage: FC = () => {
  const history = useHistory();
  const videoList = useSelector(videoSelector);
  const getVideoListRequest = useGetVideosRequest();
  const getSearchedVideo = useSearchVideosRequest();

  useEffect(() => {
    getVideoListRequest({ endpoint: Endpoint.VIDEOS });
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
        duration={item.contentDetails?.duration}
        uri={item.snippet.thumbnails.medium.url}
        title={item.snippet.title}
        viewCount={item.statistics?.viewCount}
        onClick={_onOpenIframeVideo(item.id)}
        timeAgo={timeAgo.format(new Date(item.snippet.publishedAt))}
      />
    );
  };

  const _renderListSearch = (item: VideoSearchedDoc) => {
    return <div key={item.id.videoId}> {item.snippet.title} </div>;
  };

  const renderVideoList = () => {
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

    return (
      <View gridEqual colMd={4} tagName="div">
        {videoList.data.map(_renderList)}
      </View>
    );
  };

  const _handleOnSubmit = (params: string) => {
    getSearchedVideo({ endpoint: Endpoint.SEARCH, keyword: params });
    history.push('/search');
  };

  return (
    <>
      <Menu bgColor="dark" fixed onSubmit={_handleOnSubmit} />
      <View style={{ marginTop: 76 }} tagName="div">
        {renderVideoList()}
      </View>
    </>
  );
};

export default YoutubePage;
