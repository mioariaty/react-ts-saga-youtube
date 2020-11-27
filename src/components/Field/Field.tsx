import React, { CSSProperties, FC, ReactElement, ReactNode } from 'react';
import { Text, View, WithStylesProps, withTachyons, WithTachyonsProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Field.module.scss';

interface LabelOptions {
  text: string;
  link?: ReactElement;
}
export interface FieldProps extends WithTachyonsProps {
  children: ReactNode;
  /** Label của field có thể có hoặc không */
  label?: LabelOptions;
  /** style inline field */
  style?: CSSProperties;
  /** override className của field */
  className?: string;
  color?: WithStylesProps['color'];
}

const FieldComponent: FC<FieldProps> = ({ label, children, style, className, color = 'dark3' }) => {
  const combineProps = { style, className: classNames(styles.container, className) };
  return (
    <View {...combineProps}>
      {!!label && (
        <Text color={color} tagName="p" className={styles.label} tachyons="mb2">
          {label.text} {label.link}
        </Text>
      )}
      {children}
    </View>
  );
};

const Field = withTachyons<HTMLElement, FieldProps>(FieldComponent);

export default Field;
