import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/HomePage';
import AboutPage from 'containers/AboutPage/AboutPage';
import NotFoundPage from 'containers/NotFoundPage/NotFoundPage';
import YoutubePage from 'containers/YoutubePage/YoutubePage';
import YoutubeSearchPage from 'containers/YoutubePage/YoutubeSearchPage';

import { View } from 'wiloke-react-core';
import AppLayout from 'components/AppLayout/AppLayout';
import YoutubePlayerPage from 'containers/YoutubePage/YoutubePlayerPage';
import { Page } from './types';

export const pages: Page[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/youtube',
    exact: true,
    component: YoutubePage,
  },
  {
    path: '/search',
    exact: true,
    component: YoutubeSearchPage,
  },
  {
    path: '/youtube/:id',
    exact: true,
    component: YoutubePlayerPage,
  },
];

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <View tagName="main" backgroundColor="light" className="main">
          <Switch>
            {pages.map(({ component, path, exact }) => {
              return <Route key={path} component={component} exact={exact} path={path} />;
            })}
            <Route component={NotFoundPage} />
          </Switch>
        </View>
      </AppLayout>
      <footer></footer>
    </BrowserRouter>
  );
};

export default Routes;
