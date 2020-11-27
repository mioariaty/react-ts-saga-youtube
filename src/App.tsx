import AppLayout from 'containers/AppLayout/AppLayout';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { getUseDispatchRedux } from 'wiloke-react-core/utils';
import { persistor, store } from './store/configureStore';

getUseDispatchRedux(useDispatch);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>
  );
}

export default App;
