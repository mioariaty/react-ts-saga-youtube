import React, { InputHTMLAttributes, FC, HTMLAttributes } from 'react';
import styles from './Input.module.scss';

type Size = 'small' | 'medium' | 'large';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Kích cỡ của input
   */
  sizeInput?: Size;
  onChange?: HTMLAttributes<HTMLInputElement>['onChange'];
}

const Input: FC<InputProps> = ({ sizeInput = 'medium', onChange, ...rest }) => {
  return <input {...rest} onChange={onChange} className={[styles.container, styles[sizeInput]].join(' ')} />;
};
export default Input;
