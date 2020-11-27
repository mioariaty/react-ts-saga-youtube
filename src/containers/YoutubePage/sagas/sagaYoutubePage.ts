import watchGetChannelById from './watchGetChannelById';
import watchGetCommentThreads from './watchGetCommentThread';
import watchGetRelatedVideos from './watchGetRelatedVideos';
import watchGetVideoById from './watchGetVideoById';
import watchGetVideos from './watchGetVideos';
import watchSearchVideo from './watchSearchVideo';

const sagaYoutubePage = [watchGetVideos, watchSearchVideo, watchGetVideoById, watchGetRelatedVideos, watchGetCommentThreads, watchGetChannelById];

export default sagaYoutubePage;
