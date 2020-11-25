import { call, put, takeLatest } from 'redux-saga/effects';
import fetchAPI from 'utils/functions/fetchAPI';
import { getActionType } from 'wiloke-react-core/utils';
import { loginAsyncAction } from '../actions/loginAction';

function* handleLoginRequest() {
  yield put(loginAsyncAction.request({ endpoint: null }));
  try {
    // clieant id 546987151252-83reb4gn7kte6se1ge69tj5gao9cnfj0.apps.googleusercontent.com
    const response = yield call(fetchAPI.request, {
      baseURL: '',
      params: {
        client_id: '546987151252-83reb4gn7kte6se1ge69tj5gao9cnfj0.apps.googleusercontent.com',
        grant_type: 'authorization_code',
      },
    });
    // console.log(response);

    yield put(loginAsyncAction.success({ userId: response }));
  } catch (error) {
    yield put(loginAsyncAction.failure({ message: error.message }));
  }
}

export default function* watchLoginRequest() {
  yield takeLatest(getActionType(loginAsyncAction.request), handleLoginRequest);
}
