import React, { DOMAttributes, FC } from 'react';
import { createPortal } from 'react-dom';
import styles from './Overlay.module.scss';

export interface OverlayProps {
  onClick?: DOMAttributes<HTMLDivElement>['onClick'];
}

const Overlay: FC<OverlayProps> = ({ onClick }) => {
  const overlay = <div className={styles.container} onClick={onClick}></div>;
  return createPortal(overlay, document.body);
};
export default Overlay;
