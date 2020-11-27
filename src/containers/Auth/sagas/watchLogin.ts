import { YOUTUBE_API_KEY } from 'containers/YoutubePage/constants/youtube.constant';
import { call, put, takeLatest } from 'redux-saga/effects';
import fetchAPI from 'utils/functions/fetchAPI';
import { getActionType } from 'wiloke-react-core/utils';
import { loginAsyncAction } from '../actions/loginAction';

function* handleLoginRequest() {
  yield put(loginAsyncAction.request({ endpoint: null }));
  try {
    // client_id: 546987151252-83reb4gn7kte6se1ge69tj5gao9cnfj0.apps.googleusercontent.com
    // client_secret: eVJYi9VS0P4nNo95Iqdz7yhX
    const response = yield call(fetchAPI.request, {
      baseURL: 'https://accounts.google.com/o/oauth2/v2/auth',
      method: 'GET',
      params: {
        key: YOUTUBE_API_KEY,
        client_id: '546987151252-83reb4gn7kte6se1ge69tj5gao9cnfj0.apps.googleusercontent.com',
        scope: 'email',
      },
    });

    console.log(response);

    yield put(loginAsyncAction.success({ userId: response }));
  } catch (error) {
    yield put(loginAsyncAction.failure({ message: error.message }));
  }
}

export default function* watchLoginRequest() {
  yield takeLatest(getActionType(loginAsyncAction.request), handleLoginRequest);
}
