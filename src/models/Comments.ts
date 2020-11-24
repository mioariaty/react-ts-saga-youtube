export interface CommentsDocument {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: {
      value: string;
    };
    channelId: string;
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    parentId: string;
    canRate: boolean;
    viewerRating: string;
    likeCount: string;
    moderationStatus: string;
    publishedAt: string;
    updatedAt: string;
  };
}

export interface CommentThreadDocument {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    channelId: string;
    videoId: string;
    topLevelComment: CommentsDocument;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
  replies: {
    comments: CommentsDocument[];
  };
}

export interface CommentThreadsResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: CommentThreadDocument[];
}
