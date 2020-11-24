import AboutPage from 'containers/AboutPage/AboutPage';
import AppLayout from 'containers/AppLayout/AppLayout';
import HomePage from 'containers/HomePage/HomePage';
import NotFoundPage from 'containers/NotFoundPage/NotFoundPage';
import YoutubePage from 'containers/YoutubePage/YoutubePage';
import YoutubePlayerPage from 'containers/YoutubePage/YoutubePlayerPage';
import YoutubeSearchPage from 'containers/YoutubePage/YoutubeSearchPage';
import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { View } from 'wiloke-react-core';
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
