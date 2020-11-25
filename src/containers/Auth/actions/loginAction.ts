import { createAsyncAction, createDispatchAction } from 'wiloke-react-core/utils';

export const loginAsyncAction = createAsyncAction(['@loginRequest', '@loginSuccess', '@loginFailure'])<
  { endpoint: null },
  { userId: string },
  { message: string }
>();

export const useLoginRequest = createDispatchAction(loginAsyncAction.request);
