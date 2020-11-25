import AboutPage from 'containers/AboutPage/AboutPage';
import HomePage from 'containers/HomePage/HomePage';
import NotFoundPage from 'containers/NotFoundPage/NotFoundPage';
import YoutubePage from 'containers/YoutubePage/YoutubePage';
import YoutubePlayerPage from 'containers/YoutubePage/YoutubePlayerPage';
import YoutubeSearchPage from 'containers/YoutubePage/YoutubeSearchPage';
import YoutubeTrendingPage from 'containers/YoutubePage/YoutubeTrendingPage';
import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { View } from 'wiloke-react-core';
import { Page } from './types';

export const pages: Page[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    name: 'Home',
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
    name: 'About',
  },
  {
    path: '/youtube',
    exact: true,
    component: YoutubePage,
    name: 'Youtube',
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
  {
    path: '/trending',
    exact: true,
    component: YoutubeTrendingPage,
    name: 'Trending',
  },
];

const Routes: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <View tagName="main" backgroundColor="light" className="main">
        <Switch>
          {pages.map(({ component, path, exact }) => {
            return <Route key={path} component={component} exact={exact} path={path} />;
          })}
          <Route component={NotFoundPage} />
        </Switch>
        {children}
      </View>
      <footer></footer>
    </BrowserRouter>
  );
};

export default Routes;
