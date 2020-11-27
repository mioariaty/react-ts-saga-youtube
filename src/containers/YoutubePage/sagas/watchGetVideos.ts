import { getActionType } from 'wiloke-react-core/utils';
import { AxiosResponse } from 'axios';
import { VideosModel } from 'models/Videos';
import { put, call, takeLatest } from 'redux-saga/effects';
import fetchAPI from 'utils/functions/fetchAPI';
import { getYoutubeVideos } from '../actions/getVideosAction';
import { YOUTUBE_API_KEY } from '../constants/youtube.constant';

/**
 * put() = Dispatch an action
 * call() = Return a promise. Saga will stop until the promise is resolved
 * takeLatest() = Chỉ cho phép một function được chạy trong một thời điểm. Tức là nếu như trước đó có một function đang chạy, nó sẽ hủy function đó và chạy lại lần nữa với dữ liệu mới nhất.
 */

function* handleGetVideos({ payload }: ReturnType<typeof getYoutubeVideos.request>) {
  try {
    const response: AxiosResponse<VideosModel> = yield call(fetchAPI.request, {
      method: 'GET',
      url: payload.endpoint,
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'VN',
        maxResults: 30,
      },
    });

    yield put(getYoutubeVideos.success({ data: { items: response.data.items } }));
  } catch (error) {
    yield put(getYoutubeVideos.failure({ message: error.message }));
  }
}

export default function* watchGetVideos() {
  yield takeLatest(getActionType(getYoutubeVideos.request), handleGetVideos);
}
