import React, { DOMAttributes, FC } from 'react';
import { createPortal } from 'react-dom';
import { View } from 'wiloke-react-core';
import styles from './Overlay.module.scss';

export interface OverlayProps {
  onClick?: DOMAttributes<HTMLDivElement>['onClick'];
  show: boolean;
}

const Overlay: FC<OverlayProps> = ({ onClick, show }) => {
  const overlay = show && <View tagName="div" className={styles.container} onClick={onClick}></View>;
  return createPortal(overlay, document.body);
};
export default Overlay;
