import React from 'react';
import styles from './Spinner.module.scss';

export interface SpinnerProps {
  active: boolean;
}

export default function Spinner({ active = false }: SpinnerProps) {
  return (
    <div {...active} className={styles.loader}>
      loading...
    </div>
  );
}
