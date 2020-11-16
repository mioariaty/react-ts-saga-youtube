import React from 'react';
import { text } from '@storybook/addon-knobs';
// import getOptions from 'stories/utils/getOptions';
// import { action } from '@storybook/addon-actions';
import YoutubeCard from 'components/Youtube/YoutubeCard/YoutubeCard';
import { View } from 'core';

export default {
  title: 'Components/YouTubeCard',
  component: YoutubeCard,
};
export const Default = () => {
  const title = text('Title', 'HÀNG NGÀN NGƯỜI BẮN RAP THEO TIỀN NHIỀU ĐỂ LÀM GÌ, GDUCKY CHỨNG MINH ĐẲNG CẤP Ở #SUPERSHOW1111');
  const channelName = text('Channel name', 'name');
  const uri = text(
    'Uri',
    'https://i.ytimg.com/vi/7AFYSCRnAwI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA9HWssyQ2tLoR0Fm_CoAK3CbXFVA',
  );
  return (
    <View gridEqual colMd={4}>
      <YoutubeCard channel={channelName} duration="11:12" title={title} uri={uri} />
    </View>
  );
};
