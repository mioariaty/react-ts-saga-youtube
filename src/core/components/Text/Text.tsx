import { ReactNode, HTMLAttributes, createElement, forwardRef, CSSProperties } from 'react';
import classNames from 'core/utils/classNames';
import withStyles, { WithStylesProps } from 'core/hocs/withStyles';
import { useTheme } from '../ThemeContext/ThemeContext';
import styles from './Text.module.scss';

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'ref' | 'color' | 'className' | 'style'>, WithStylesProps {
  /** #### Tên thẻ html */
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'i' | 'span' | 'strong' | 'small' | 'label' | 'div';
  /** #### Chỉnh font-size cho text */
  size?: 'inherit' | number;
  /** #### Render children */
  children?: ReactNode;
}

const TextComponent = forwardRef<HTMLElement, TextProps>(({ tagName = 'div', children, className = '', style, size, ...rest }, ref) => {
  const { debug } = useTheme();
  const classes = classNames(styles.container, className);
  const sizeStyle: CSSProperties = !!size ? { fontSize: size } : {};
  return createElement(
    tagName,
    {
      ...rest,
      ref,
      style: {
        ...style,
        ...sizeStyle,
        ...(debug ? { outline: '1px solid cyan' } : {}),
      },
      ...(classes ? { className: classes } : {}),
    },
    children,
  );
});

export const Text = withStyles<HTMLElement, TextProps>(TextComponent);
