import { VideoDocument } from 'models/Videos';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getYoutubeVideos } from '../actions/getVideosAction';

type VideoAction = ActionTypes<typeof getYoutubeVideos>;

interface VideoState {
  isLoading: boolean;
  message: string;
  data: VideoDocument[];
}

const initialState: VideoState = {
  data: [],
  message: '',
  isLoading: false,
};

export const videoReducer = createReducer<VideoState, VideoAction>(initialState, [
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
    message: action.payload.message,
  })),
]);
