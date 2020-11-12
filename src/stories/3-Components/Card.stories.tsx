import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import getOptions from 'stories/utils/getOptions';
import { action } from '@storybook/addon-actions';
import Card, { CardProps } from 'components/Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const WithProps = () => {
  const hover = select(
    'Hoverable',
    getOptions<CardProps['hoverable'][]>([true, false]),
    false,
  );
  const bordered = select(
    'Bordered',
    getOptions<CardProps['bordered'][]>([true, false]),
    false,
  );
  const title = text('Title', '');
  const children = text('Content', 'Card');
  const image = text('Image', 'https://images.pexels.com/photos/5739049/pexels-photo-5739049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  return (
    <Card onClick={action('onClick')} style={{ width: 300 }} hoverable={hover} bordered={bordered} cover={image} title={title}>
      <p>{children}</p>
    </Card>
  );
};
