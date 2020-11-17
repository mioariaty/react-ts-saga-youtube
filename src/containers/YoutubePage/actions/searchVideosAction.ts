import { SearchParams, VideoSearchedDoc } from 'models/Videos';
import { Endpoint } from 'types/endpoint';
import { createAsyncAction, createDispatchAction } from 'utils/functions/reduxActions';

export const searchVideoAction = createAsyncAction(['@searchVideosRequest', '@searchVideosSuccess', '@searchVideosFailure'])<
  { endpoint: Endpoint.SEARCH; keyword: SearchParams['keyword'] },
  { data: VideoSearchedDoc[] },
  { message: string }
>();
export const useSearchVideosRequest = createDispatchAction(searchVideoAction.request);
