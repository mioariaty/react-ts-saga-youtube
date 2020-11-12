import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';
import MenuItem, { MenuItemProps } from 'components/Menu/Item/MenuItem';

export default {
  title: 'Components/Menu/Menu Item',
  component: MenuItem,
};

export const WithProps = () => {
  const underline = select(
    'Underline',
    getOptions<MenuItemProps['underline'][]>(['nounderline', 'hover', 'underline']),
    'nounderline',
  );
  const active = select(
    'Active',
    getOptions<MenuItemProps['isActive'][]>([false, true]),
    false,
  );
  const children = text('Children', 'Menu Item');
  return (
    <MenuItem isActive={active} underline={underline} onClick={action('onClick')}>
      {children}
    </MenuItem>
  );
};
