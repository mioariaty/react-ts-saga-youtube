import { getActionType } from 'wiloke-react-core';
import { AxiosResponse } from 'axios';
import { VideosModel } from 'models/Videos';
import { put, call, takeLatest } from 'redux-saga/effects';
import fetchAPI from 'utils/functions/fetchAPI';
import { YOUTUBE_API_KEY } from '../constants/youtube.constant';
import { getVideoByIdAction } from '../actions/getVideoByIdAction';

function* handleGetVideoById({ payload }: ReturnType<typeof getVideoByIdAction.request>) {
  try {
    const response: AxiosResponse<VideosModel> = yield call(fetchAPI.request, {
      url: payload.endpoint,
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet,statistics,contentDetails',
        id: payload.videoId,
        fields: 'kind,items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,thumbnails/medium,title),statistics)',
      },
    });
    console.log(response.data);

    yield put(getVideoByIdAction.success({ data: response.data, videoId: String(payload.videoId) }));
  } catch (error) {
    yield put(getVideoByIdAction.failure(error.message));
  }
}

export default function* watchGetVideoById() {
  yield takeLatest(getActionType(getVideoByIdAction.request), handleGetVideoById);
}
