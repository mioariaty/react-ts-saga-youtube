import { VideoDocument, VideoSearchedDoc } from 'models/Videos';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getYoutubeVideos } from '../actions/getVideosAction';
import { searchVideoAction } from '../actions/searchVideosAction';

type VideoAction = ActionTypes<typeof getYoutubeVideos | typeof searchVideoAction>;

interface VideoState {
  isLoading: boolean;
  message: string;
  data: VideoDocument[];
  videoSearch: VideoSearchedDoc[];
}

const initialState: VideoState = {
  data: [],
  message: '',
  isLoading: false,
  videoSearch: [],
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
  handleAction('@searchVideosRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@searchVideosSuccess', ({ state, action }) => {
    return {
      ...state,
      isLoading: false,
      videoSearch: action.payload.data,
    };
  }),
  handleAction('@searchVideosFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    message: action.payload.message,
  })),
]);
