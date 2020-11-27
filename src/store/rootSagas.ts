import authSaga from 'containers/Auth/sagas/sagasLoginPage';
import sagaHomePage from 'containers/HomePage/sagas/sagaHomePage';
import { all, call, delay, spawn } from 'redux-saga/effects';
import sagaYoutubePage from '../containers/YoutubePage/sagas/sagaYoutubePage';

const sagas = [...sagaHomePage, ...sagaYoutubePage, ...authSaga];

// https://github.com/redux-saga/redux-saga/issues/760#issuecomment-273737022
const makeRestartable = (saga: any) => {
  return function*() {
    yield spawn(function*() {
      while (true) {
        try {
          yield call(saga);
          console.error('unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!', saga);
        } catch (e) {
          console.error('Saga error, the saga will be restarted', e);
        }
        yield delay(1000); // Avoid infinite failures blocking app TODO use backoff retry policy...
      }
    });
  };
};

const rootSagas = sagas.map(makeRestartable);

export default function* root() {
  yield all(rootSagas.map(call));
}
