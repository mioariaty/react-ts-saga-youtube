import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
import { loginAsyncAction } from '../actions/loginAction';

type AuthAction = ActionTypes<typeof loginAsyncAction>;

interface AuthState {
  isSignedIn: boolean;
  userId: string | null;
  message: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  isSignedIn: false,
  userId: '',
  message: '',
  isLoading: false,
};

export const authReducer = createReducer<AuthState, AuthAction>(initialState, [
  handleAction('@loginRequest', ({ state }) => ({
    ...state,
    isLoading: true,
  })),
  handleAction('@loginSuccess', ({ state, action }) => ({
    ...state,
    isSignedIn: true,
    userId: action.payload.userId,
    isLoading: false,
  })),
  handleAction('@loginFailure', ({ state, action }) => ({
    ...state,
    isLoading: false,
    message: action.payload.message,
  })),
]);
