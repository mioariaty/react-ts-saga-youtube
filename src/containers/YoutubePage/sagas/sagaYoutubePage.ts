import watchGetRelatedVideos from './watchGetRelatedVideos';
import watchGetVideoById from './watchGetVideoById';
import watchGetVideos from './watchGetVideos';
import watchSearchVideo from './watchSearchVideo';

const sagaYoutubePage = [watchGetVideos, watchSearchVideo, watchGetVideoById, watchGetRelatedVideos];

export default sagaYoutubePage;
