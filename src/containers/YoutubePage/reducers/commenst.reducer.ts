import { CommentThreadDocument } from 'models/Comments';
import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
import { getCommentThreadAction } from '../actions/getComnentThreadAction';

type CommentAction = ActionTypes<typeof getCommentThreadAction>;

interface CommenState {
  isLoading: boolean;
  message: string;
  data: CommentThreadDocument[];
}

const initialState: CommenState = {
  isLoading: false,
  message: '',
  data: [],
};

export const commentReducer = createReducer<CommenState, CommentAction>(initialState, [
  handleAction('@getCommentThreadsRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@getCommentThreadsSuccess', ({ state, action }) => {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data.items,
    };
  }),
  handleAction('@getCommentThreadsFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    message: action.payload.message,
  })),
]);
