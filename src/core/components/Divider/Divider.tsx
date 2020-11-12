import React, { CSSProperties, forwardRef } from 'react';
import classNames from 'core/utils/classNames';
import { ColorKey } from 'core/types/Themes';
import { getBgColorClassName } from 'core/utils/getStyles';
import withTachyons, { WithTachyonsProps } from 'core/hocs/withTachyons';
import { View } from '../View/View';
import styles from './Divider.module.scss';

export interface DividerProps extends WithTachyonsProps {
  /** #### Size của component nếu set number sẽ là width còn set array sẽ là [width, height] */
  size?: number | [number, number];
  /** #### Color của component theo ThemeProvider */
  color?: ColorKey;
}

const DividerComponent = forwardRef<HTMLElement, DividerProps>(({ size = 1, color = 'gray2', className }, ref) => {
  const sizeStyle: CSSProperties = typeof size === 'number' ? { height: 1 } : { width: size[0], height: size[1] };
  const colorClassName = getBgColorClassName(color);
  return (
    <View ref={ref} className={classNames(styles.container, className)}>
      <View className={classNames(styles.divider, colorClassName)} style={sizeStyle} />
    </View>
  );
});

export const Divider = withTachyons<HTMLElement, DividerProps>(DividerComponent);
