export interface VideoThumbnails {
  default: {
    url: string;
    width: number;
    height: number;
  };
  medium: {
    url: string;
    width: number;
    height: number;
  };
  high: {
    url: string;
    width: number;
    height: number;
  };
  standard: {
    url: string;
    width: number;
    height: number;
  };
  maxres: {
    url: string;
    width: number;
    height: number;
  };
}
export interface VideoDocument {
  id: string;
  kind: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: VideoThumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    projection: string;
    videoId: string;
  };
  statistics: {
    commentCount: string;
    dislikeCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}

export interface VideoSearchedDoc {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    title: string;
    thumbnails: VideoThumbnails;
  };
}

export interface VideosModel {
  pageInfo?: {
    resultsPerPage: number;
    totalResults: number;
  };
  items: VideoDocument[];
}
export interface VideosSearchModel {
  pageInfo?: {
    resultsPerPage: number;
    totalResults: number;
  };
  items: VideoSearchedDoc[];
}

export interface VideoParams {
  key: string;
  part: string;
  maxResults?: number;
  q: string;
}

export interface VideoCardInteface {
  id: string;
  thumbnails: VideoThumbnails;
  title: string;
  channelTitle: string;
  duration: string;
}

export interface SearchParams {
  keyword: string;
  v: string;
}

export interface VideoPlayerParam {
  id: string;
}
