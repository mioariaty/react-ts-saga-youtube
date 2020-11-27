import { ComponentType } from 'react';

export interface HomePageLocationState {}
export interface AboutPageLocationState {}
export interface YoutubePageLocationState {}
export interface YoutubeSearchPageLocationState {}
export interface VideoPlayerPageLocationState {}
export interface YoutubeTrendingpageLocationState {}

export interface LocationStates {
  '/'?: HomePageLocationState;
  '/about': AboutPageLocationState;
  '/youtube': YoutubePageLocationState;
  '/trending': YoutubeTrendingpageLocationState;
  '/search': YoutubeSearchPageLocationState;
  '/youtube/:id': VideoPlayerPageLocationState;
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
  name?: string;
}
