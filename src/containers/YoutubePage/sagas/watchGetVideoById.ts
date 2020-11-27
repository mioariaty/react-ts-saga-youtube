import { AxiosResponse } from 'axios';
import { VideosModel } from 'models/Videos';
import { call, put, takeLatest } from 'redux-saga/effects';
import fetchAPI from 'utils/functions/fetchAPI';
import { getActionType } from 'wiloke-react-core/utils';
import { getVideoByIdAction } from '../actions/getVideoByIdAction';
import { YOUTUBE_API_KEY } from '../constants/youtube.constant';

function* handleGetVideoById({ payload }: ReturnType<typeof getVideoByIdAction.request>) {
  try {
    const response: AxiosResponse<VideosModel> = yield call(fetchAPI.request, {
      url: payload.endpoint,
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet,statistics,contentDetails',
        id: payload.videoId,
      },
    });
    yield put(getVideoByIdAction.success({ data: response.data, videoId: String(payload.videoId) }));
  } catch (error) {
    yield put(getVideoByIdAction.failure(error.message));
  }
}

export default function* watchGetVideoById() {
  yield takeLatest(getActionType(getVideoByIdAction.request), handleGetVideoById);
}
