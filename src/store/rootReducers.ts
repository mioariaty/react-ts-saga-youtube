import { AppContentReducer } from 'containers/AppLayout/reducers';
import { authReducer } from 'containers/Auth/reducers/authReducers';
import { todolist } from 'containers/HomePage/reducers/reducerTodolist';
import { YoutubePageReducer } from 'containers/YoutubePage/reducers';

const reducers = {
  todolist,
  authReducer,
  ...YoutubePageReducer,
  ...AppContentReducer,
};

export default reducers;
