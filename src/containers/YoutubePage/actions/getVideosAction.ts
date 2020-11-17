import { VideosModel } from 'models/Videos';
import { Endpoint } from 'types/endpoint';
import { createAsyncAction, createDispatchAction } from 'utils/functions/reduxActions';

export const getYoutubeVideos = createAsyncAction(['@getVideosRequest', '@getVideosSuccess', '@getVideosFailure'])<
  { endpoint: Endpoint.VIDEOS },
  { data: VideosModel['items'] },
  { message: string }
>();
export const useGetVideosRequest = createDispatchAction(getYoutubeVideos.request);
