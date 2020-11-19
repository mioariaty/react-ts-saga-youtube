import React, { DOMAttributes, FC, ReactNode } from 'react';
import Overlay from 'components/Overlay/Overlay';
import { createPortal } from 'react-dom';
import { View } from 'wiloke-react-core';
import styles from './Modal.module.scss';

export interface ModalProps {
  children: ReactNode;
  show: boolean;
  onClick: DOMAttributes<HTMLDivElement>['onClick'];
}

const Modal: FC<ModalProps> = ({ onClick, show, children }) => {
  const modal = (
    <>
      <Overlay show={show} onClick={onClick} />
      <View
        tagName="div"
        className={styles.container}
        style={{ transform: show ? 'translateY(0)' : 'translateY(-100vh)', opacity: show ? '1' : '0' }}
      >
        {children}
      </View>
    </>
  );
  return createPortal(modal, document.body);
};
export default Modal;
