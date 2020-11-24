import { CommentThreadsResponse } from 'models/Comments';
import { VideoDocument } from 'models/Videos';
import { Endpoint } from 'types/endpoint';
import { createAsyncAction, createDispatchAction } from 'wiloke-react-core/utils';

export const getCommentThreadAction = createAsyncAction(['@getCommentThreadsRequest', '@getCommentThreadsSuccess', '@getCommentThreadsFailure'])<
  { endpoint: Endpoint.COMMENT_THREAD; videoId: VideoDocument['id'] },
  { data: CommentThreadsResponse },
  { message: string }
>();
export const useGetCommentThreadsRequest = createDispatchAction(getCommentThreadAction.request);
