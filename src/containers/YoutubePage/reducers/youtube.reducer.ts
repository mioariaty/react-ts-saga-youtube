import { VideoDocument } from 'models/Videos';
import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
import { getVideoByIdAction } from '../actions/getVideoByIdAction';
import { getYoutubeVideos } from '../actions/getVideosAction';

type VideoAction = ActionTypes<typeof getYoutubeVideos | typeof getVideoByIdAction>;

interface VideoState {
  isLoading: boolean;
  message: string;
  data: VideoDocument[];
  videoId: VideoDocument['id'];
  channelId: VideoDocument['snippet']['channelId'];
}

const initialState: VideoState = {
  data: [],
  message: '',
  isLoading: false,
  videoId: '',
  channelId: '',
};

export const videoReducer = createReducer<VideoState, VideoAction>(initialState, [
  handleAction('@getVideosRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@getVideosSuccess', ({ state, action }) => {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data.items,
    };
  }),
  handleAction('@getVideosFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    message: action.payload.message,
  })),
  handleAction('@getVideoByIdRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@getVideoByIdSuccess', ({ state, action }) => {
    const findId = [...action.payload.data.items];

    return {
      ...state,
      isLoading: false,
      data: action.payload.data.items,
      videoId: findId[0].id,
      channelId: findId[0].snippet.channelId,
    };
  }),
  handleAction('@getVideoByIdFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    message: action.payload.message,
  })),
]);
