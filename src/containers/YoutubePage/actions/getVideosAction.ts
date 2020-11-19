import { VideosModel } from 'models/Videos';
import { Endpoint } from 'types/endpoint';
import { createAsyncAction, createDispatchAction } from 'wiloke-react-core';

export const getYoutubeVideos = createAsyncAction(['@getVideosRequest', '@getVideosSuccess', '@getVideosFailure'])<
  { endpoint: Endpoint.VIDEOS },
  { data: VideosModel },
  { message: string }
>();
export const useGetVideosRequest = createDispatchAction(getYoutubeVideos.request);
