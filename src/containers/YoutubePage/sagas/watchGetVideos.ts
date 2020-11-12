import { getActionType } from 'utils/functions/reduxActions';
import { AxiosResponse } from 'axios';
import { VideosModel } from 'models/Videos';
import { put, call, takeLatest } from 'redux-saga/effects';
import fetchAPI from 'utils/functions/fetchAPI';
import { Endpoint } from 'types/endpoint';
import { getYoutubeVideos } from '../actions/getVideosAction';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from '../constants/youtube.constant';

/**
 * put() = dispatch an action
 * call() = if return a promise. Saga will stop until the promise is resolved
 */
function* handleGetVideos() {
  try {
    const response: AxiosResponse<VideosModel['items']> = yield call(fetchAPI.request, {
      method: 'GET',
      baseURL: `${YOUTUBE_API_URL}/${Endpoint.VIDEOS}`,
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: 'VN',
        maxResults: 8,
      },
      timeout: 5000,
    });
    yield put(getYoutubeVideos.success({ data: response.data }));
  } catch (error) {
    yield put(getYoutubeVideos.failure({ message: error }));
  }
}

export default function* watchGetVideos() {
  yield takeLatest(getActionType(getYoutubeVideos.request), handleGetVideos);
}
console.log(watchGetVideos());
