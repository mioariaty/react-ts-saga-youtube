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
  high?: {
    url: string;
    width: number;
    height: number;
  };
  standard: {
    url: string;
    width: number;
    height: number;
  };
  maxres?: {
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
}
export interface VideosModel {
  pageInfo?: {
    resultsPerPage: number;
    totalResults: number;
  };
  items: VideoDocument[];
}

export interface VideoParams {
  key: string;
  id?: string;
  part: string;
  playlistId?: string;
  maxResults?: number;
  regionCode?: string;
}

export interface VideoCardInteface {
  id: string;
  thumbnails: VideoThumbnails;
  title: string;
  channelTitle: string;
  duration: string;
}

export interface SearchParams {
  q: string;
}
