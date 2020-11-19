import { createBrowserHistory, createMemoryHistory } from 'history';

const isTest = process.env.NODE_ENV === 'test';

export enum URL {
  Home = '/',
  Youtube = '/youtube',
  About = '/about',
  YoutubeSearch = '/search',
}

export const history = isTest ? createMemoryHistory({ initialEntries: [URL.Youtube] }) : createBrowserHistory();
