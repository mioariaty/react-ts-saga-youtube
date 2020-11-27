import { ChannelResponse } from 'models/Channels';
import { VideoDocument } from 'models/Videos';
import { Endpoint } from 'types/endpoint';
import { createAsyncAction, createDispatchAction } from 'wiloke-react-core/utils';

export const getChannelByIdAction = createAsyncAction(['@getChannelByIdRequest', '@getChannelByIdSuccess', '@getChannelByIdFailure'])<
  { endpoint: Endpoint.CHANNELS; channelId: VideoDocument['snippet']['channelId'] },
  { data: ChannelResponse },
  { message: string }
>();
export const useGetChannelByIdRequest = createDispatchAction(getChannelByIdAction.request);
