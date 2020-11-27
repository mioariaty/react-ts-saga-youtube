import { AxiosResponse } from 'axios';
import { CommentThreadsResponse } from 'models/Comments';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import fetchAPI from 'utils/functions/fetchAPI';
import { getActionType } from 'wiloke-react-core/utils';
import { getCommentThreadAction } from '../actions/getComnentThreadAction';
import { YOUTUBE_API_KEY } from '../constants/youtube.constant';

function* handleGetCommentThreads({ payload }: ReturnType<typeof getCommentThreadAction.request>) {
  try {
    yield delay(300);
    const response: AxiosResponse<CommentThreadsResponse> = yield call(fetchAPI.request, {
      method: 'GET',
      url: payload.endpoint,
      params: {
        key: YOUTUBE_API_KEY,
        part: 'id,snippet,replies',
        videoId: payload.videoId,
        order: 'time',
        maxResults: 30,
      },
    });

    yield put(getCommentThreadAction.success({ data: response.data }));
  } catch (error) {
    yield put(getCommentThreadAction.failure({ message: error.message }));
  }
}

export default function* watchGetCommentThreads() {
  yield takeLatest(getActionType(getCommentThreadAction.request), handleGetCommentThreads);
}
