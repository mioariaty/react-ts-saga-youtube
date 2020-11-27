import { AppContentReducer } from 'containers/AppLayout/reducers';
import { AuthReducer } from 'containers/Auth/reducers';
import { todolist } from 'containers/HomePage/reducers/reducerTodolist';
import { YoutubePageReducer } from 'containers/YoutubePage/reducers';

const reducers = {
  todolist,
  ...AuthReducer,
  ...YoutubePageReducer,
  ...AppContentReducer,
};

export default reducers;
