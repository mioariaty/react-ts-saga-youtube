import { VideosModel } from 'models/Videos';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getYoutubeVideos } from '../actions/getVideosAction';

type VideoAction = ActionTypes<typeof getYoutubeVideos>;

interface VideoState {
  isLoading: boolean;
  errorMessage: string;
  data: VideosModel['items'];
}

const intitialState: VideoState = {
  data: [],
  errorMessage: '',
  isLoading: false,
};

export const videoReducer = createReducer<VideoState, VideoAction>(intitialState, [
  handleAction('@getVideosRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@getVideosSuccess', ({ state, action }) => ({
    ...state,
    isLoading: false,
    data: action.payload.data,
  })),
  handleAction('@getVideosFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    errorMessage: action.payload.message,
  })),
]);
