import { getActionType } from 'wiloke-react-core/utils';
import { put, call, takeLatest } from 'redux-saga/effects';
import fetchAPI from 'utils/functions/fetchAPI';
import { AxiosResponse } from 'axios';
import { VideosSearchModel } from 'models/Videos';
import { YOUTUBE_API_KEY } from '../constants/youtube.constant';
import { searchVideoAction } from '../actions/searchVideosAction';

function* handleSearchVideo({ payload }: ReturnType<typeof searchVideoAction.request>) {
  try {
    const res: AxiosResponse<VideosSearchModel> = yield call(fetchAPI.request, {
      url: payload.endpoint,
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet,id',
        maxResults: 10,
        type: 'video',
        q: payload.keyword,
      },
    });

    yield put(searchVideoAction.success({ data: res.data.items }));
  } catch (error) {
    yield put(searchVideoAction.failure(error.response));
  }
}
export default function* watchSearchVideo() {
  yield takeLatest(getActionType(searchVideoAction.request), handleSearchVideo);
}
