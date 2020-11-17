import { VideoDocument } from 'models/Videos';
import { Endpoint } from 'types/endpoint';
import { createAsyncAction, createDispatchAction } from 'utils/functions/reduxActions';

export const getVideoByIdAction = createAsyncAction(['@getVideoByIdRequest', '@getVideoByIdSuccess', '@getVideoByIdFailure'])<
  { endpoint: Endpoint.VIDEOS },
  { data: VideoDocument },
  { message: string }
>();
export const useGetVideoByIdRequest = createDispatchAction(getVideoByIdAction.request);
