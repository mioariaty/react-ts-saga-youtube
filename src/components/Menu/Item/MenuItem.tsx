import React, { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'utils/functions/classNames';
import styles from './MenuItem.module.scss';

export interface MenuItemProps {
  children: ReactNode;
  href?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: HTMLAttributes<HTMLElement>['onClick'];
  underline?: 'nounderline' | 'underline' | 'hover';
  isActive?: boolean;
}
const MenuItem: FC<MenuItemProps> = ({ children, href, style, className, onClick, underline = 'none', isActive = false }) => {
  const activeItem = isActive ? styles.active : underline;
  const combineProps = { style, className: classNames(styles.container, className, activeItem, styles[underline]) };
  if (!!href) {
    return (
      <a {...combineProps} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <div {...combineProps} onClick={onClick}>
      {children}
    </div>
  );
};

export default MenuItem;
