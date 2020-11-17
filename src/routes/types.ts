import { ComponentType } from 'react';

export interface HomePageLocationState {}
export interface AboutPageLocationState {}
export interface YoutubePageLocationState {}
export interface YoutubeSearchPageLocationState {}
export interface LocationStates {
  '/'?: HomePageLocationState;
  '/about': AboutPageLocationState;
  '/youtube': YoutubePageLocationState;
  '/search': YoutubeSearchPageLocationState;
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}
