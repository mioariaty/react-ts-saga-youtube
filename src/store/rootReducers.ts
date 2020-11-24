import { todolist } from 'containers/HomePage/reducers/reducerTodolist';
import { videoReducer } from 'containers/YoutubePage/reducers/youtube.reducer';
import { videoSearchReducer } from 'containers/YoutubePage/reducers/videoSearch.reducer';
import { commentReducer } from 'containers/YoutubePage/reducers/commenst.reducer';

const reducers = {
  todolist,
  videoReducer,
  videoSearchReducer,
  comments: commentReducer,
};

export default reducers;
