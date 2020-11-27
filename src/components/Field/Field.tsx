import React, { CSSProperties, FC, ReactNode } from 'react';
import { Text, View, withTachyons, WithTachyonsProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Field.module.scss';

export interface FieldProps extends WithTachyonsProps {
  children: ReactNode;
  /** Label của field có thể có hoặc không */
  label?: string;
  /** style inline field */
  style?: CSSProperties;
  /** override className của field */
  className?: string;
}

const FieldComponent: FC<FieldProps> = ({ label, children, style, className }) => {
  const combineProps = { style, className: classNames(styles.container, className) };
  return (
    <View {...combineProps}>
      {!!label && (
        <Text color="dark4" tagName="p" className={styles.label}>
          {label}
        </Text>
      )}
      {children}
    </View>
  );
};

const Field = withTachyons<HTMLElement, FieldProps>(FieldComponent);

export default Field;
