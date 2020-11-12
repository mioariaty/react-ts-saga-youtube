import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';
import Input, { InputProps } from 'components/Input/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const WithProps = () => {
  const size = select(
    'Size',
    getOptions<InputProps['sizeInput'][]>(['small', 'medium', 'large']),
    'medium',
  );
  const placeholder = text('Placeholder', 'Type something...');
  return <Input onChange={action('onChange')} sizeInput={size} placeholder={placeholder} />;
};
