import { AxiosResponse } from 'axios';
import { ChannelResponse } from 'models/Channels';
import { call, put, takeLatest } from 'redux-saga/effects';
import fetchAPI from 'utils/functions/fetchAPI';
import { getActionType } from 'wiloke-react-core/utils';
import { getChannelByIdAction } from '../actions/getChannelByIdAction';
import { YOUTUBE_API_KEY } from '../constants/youtube.constant';

function* handleGetChannelByIdRequest({ payload }: ReturnType<typeof getChannelByIdAction.request>) {
  try {
    const response: AxiosResponse<ChannelResponse> = yield call(fetchAPI.request, {
      method: 'GET',
      url: payload.endpoint,
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet,statistics',
        id: payload.channelId,
      },
    });

    yield put(getChannelByIdAction.success({ data: response.data }));
  } catch (error) {
    yield put(getChannelByIdAction.failure({ message: error.message }));
  }
}

export default function* watchGetChannelById() {
  yield takeLatest(getActionType(getChannelByIdAction.request), handleGetChannelByIdRequest);
}
