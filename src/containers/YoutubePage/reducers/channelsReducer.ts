import { ChannelResponse } from 'models/Channels';
import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
import { getChannelByIdAction } from '../actions/getChannelByIdAction';

type ChannelAction = ActionTypes<typeof getChannelByIdAction>;

interface ChannelState {
  isLoading: boolean;
  message: string;
  data: ChannelResponse['items'];
}

const initialState: ChannelState = {
  isLoading: false,
  message: '',
  data: [],
};

export const channelReducer = createReducer<ChannelState, ChannelAction>(initialState, [
  handleAction('@getChannelByIdRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@getChannelByIdSuccess', ({ state, action }) => {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data.items,
    };
  }),
  handleAction('@getChannelByIdFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    message: action.payload.message,
  })),
]);
