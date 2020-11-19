import { todolist } from 'containers/HomePage/reducers/reducerTodolist';
import { videoReducer } from 'containers/YoutubePage/reducers/youtube.reducer';
import { videoSearchReducer } from 'containers/YoutubePage/reducers/videoSearch.reducer';

const reducers = {
  todolist,
  videoReducer,
  videoSearchReducer,
};

export default reducers;
