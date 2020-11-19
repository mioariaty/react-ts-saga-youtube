import { VideoDocument, VideosModel } from 'models/Videos';
import { Endpoint } from 'types/endpoint';
import { createAsyncAction, createDispatchAction } from 'wiloke-react-core';

export const getVideoByIdAction = createAsyncAction(['@getVideoByIdRequest', '@getVideoByIdSuccess', '@getVideoByIdFailure'])<
  { endpoint: Endpoint.VIDEOS; videoId: VideoDocument['id']; channelId: VideoDocument['snippet']['channelId'] },
  { data: VideosModel; videoId: VideoDocument['id'] },
  { message: string }
>();
export const useGetVideoByIdRequest = createDispatchAction(getVideoByIdAction.request);
