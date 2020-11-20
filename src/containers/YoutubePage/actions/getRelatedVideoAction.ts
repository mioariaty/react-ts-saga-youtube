import { VideoSearchedDoc, VideosSearchModel } from 'models/Videos';
import { Endpoint } from 'types/endpoint';
import { createAsyncAction, createDispatchAction } from 'wiloke-react-core';

export const getRelatedVideoAction = createAsyncAction(['@getRelatedVideoRequest', '@getRelatedVideoSuccess', '@getRelatedVideoFailure'])<
  { endpoint: Endpoint.SEARCH; videoId?: VideoSearchedDoc['id']['videoId'] },
  { data: VideosSearchModel },
  { message: string }
>();
export const useGetRelatedVideoRequest = createDispatchAction(getRelatedVideoAction.request);
