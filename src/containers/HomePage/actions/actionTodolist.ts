import { TodolistItem } from 'utils/api/Todolist';
import { createAsyncAction, createDispatchAction } from 'wiloke-react-core/utils';
import { TodolistEndpoint } from 'utils/api/Endpoint';

export const getTodolist = createAsyncAction(['@getTodolistRequest', '@getTodolistSuccess', '@getTodolistFailure'])<
  { endpoint: TodolistEndpoint },
  { data: TodolistItem[] },
  { message: string }
>();

export const useGetTodolistRequest = createDispatchAction(getTodolist.request);
