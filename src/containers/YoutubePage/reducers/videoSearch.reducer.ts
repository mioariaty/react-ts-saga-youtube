import { VideoSearchedDoc } from 'models/Videos';
import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
import { getRelatedVideoAction } from '../actions/getRelatedVideoAction';
import { searchVideoAction } from '../actions/searchVideosAction';

type VideoAction = ActionTypes<typeof searchVideoAction | typeof getRelatedVideoAction>;

interface VideoState {
  isLoading: boolean;
  message: string;
  data: VideoSearchedDoc[];
}

const initialState: VideoState = {
  isLoading: false,
  message: '',
  data: [],
};

export const videoSearchReducer = createReducer<VideoState, VideoAction>(initialState, [
  handleAction('@searchVideosRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@searchVideosSuccess', ({ state, action }) => {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data,
    };
  }),
  handleAction('@searchVideosFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    message: action.payload.message,
  })),
  handleAction('@getRelatedVideoRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@getRelatedVideoSuccess', ({ state, action }) => {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data.items,
    };
  }),
  handleAction('@getRelatedVideoFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    message: action.payload.message,
  })),
]);
