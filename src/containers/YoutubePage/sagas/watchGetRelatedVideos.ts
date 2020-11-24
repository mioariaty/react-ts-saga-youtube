import { getActionType } from 'wiloke-react-core/utils';
import { put, call, takeLatest } from 'redux-saga/effects';
import fetchAPI from 'utils/functions/fetchAPI';
import { AxiosResponse } from 'axios';
import { VideosSearchModel } from 'models/Videos';
import { YOUTUBE_API_KEY } from '../constants/youtube.constant';
import { getRelatedVideoAction } from '../actions/getRelatedVideoAction';

function* handleGetRelatedVideos({ payload }: ReturnType<typeof getRelatedVideoAction.request>) {
  try {
    const res: AxiosResponse<VideosSearchModel> = yield call(fetchAPI.request, {
      url: payload.endpoint,
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        order: 'viewCount',
        type: 'video',
        maxResults: 12,
        relatedToVideoId: payload.videoId,
      },
    });
    yield put(getRelatedVideoAction.success({ data: res.data }));
  } catch (error) {
    yield put(getRelatedVideoAction.failure(error.response));
  }
}
export default function* watchGetRelatedVideos() {
  yield takeLatest(getActionType(getRelatedVideoAction.request), handleGetRelatedVideos);
}
