import React from 'react';
import { hydrate, render } from 'react-dom';
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import './styles/main.scss';
import { View } from 'wiloke-react-core';

const isDev = process.env.NODE_ENV === 'development';
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrate(
    <View backgroundColor="light" style={{ height: '100%' }}>
      <App />
    </View>,
    rootElement,
  );
} else {
  render(
    <View backgroundColor="light" style={{ height: '100%' }}>
      <App />
    </View>,
    rootElement,
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (isDev) {
  serviceWorker.unregister();
  if ((module as any).hot) {
    (module as any).hot.accept();
  }
} else {
  serviceWorker.unregister();
}
