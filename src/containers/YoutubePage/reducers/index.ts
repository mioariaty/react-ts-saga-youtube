import { channelReducer } from 'containers/YoutubePage/reducers/channelsReducer';
import { commentReducer } from 'containers/YoutubePage/reducers/commenst.reducer';
import { videoSearchReducer } from 'containers/YoutubePage/reducers/videoSearch.reducer';
import { videoReducer } from 'containers/YoutubePage/reducers/youtube.reducer';

export const YoutubePageReducer = {
  channelReducer,
  comments: commentReducer,
  videoSearchReducer,
  videoReducer,
};
