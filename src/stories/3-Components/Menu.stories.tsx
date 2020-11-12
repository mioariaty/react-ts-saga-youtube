import React from 'react';
import { select } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
// import { action } from '@storybook/addon-actions';
import Menu, { MenuProps } from 'components/Menu/Menu';

export default {
  title: 'Components/Menu/Menu',
  component: Menu,
};

export const WithProps = () => {
  const color = select(
    'BackgroundColor',
    getOptions<MenuProps['bgColor'][]>(['dark', 'light', 'primary', 'secondary']),
    'dark',
  );
  return <Menu bgColor={color} />;
};
