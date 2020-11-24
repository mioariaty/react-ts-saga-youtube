import watchGetRelatedVideos from './watchGetRelatedVideos';
import watchGetVideoById from './watchGetVideoById';
import watchGetVideos from './watchGetVideos';
import watchSearchVideo from './watchSearchVideo';
import watchGetCommentThreads from './watchGetCommentThread';

const sagaYoutubePage = [watchGetVideos, watchSearchVideo, watchGetVideoById, watchGetRelatedVideos, watchGetCommentThreads];

export default sagaYoutubePage;
