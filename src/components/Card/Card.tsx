import React, { CSSProperties, DOMAttributes, FC, ReactNode } from 'react';
import classNames from 'utils/functions/classNames';
import styles from './Card.module.scss';

export interface CardProps {
  /** React children */
  children: ReactNode;
  /** Thuộc tính href của thẻ a */
  href?: string;
  /** Ảnh của card */
  cover?: string;
  /** Tiêu đề của card */
  title?: string;
  /** Thuộc tính viền của card */
  bordered?: boolean;
  /** Thuộc tính style inline */
  style?: CSSProperties;
  /** Thuộc tính hover của card */
  hoverable?: boolean;
  /** Thuộc tính class của button */
  className?: string;
  /** Sự kiện click */
  onClick?: DOMAttributes<HTMLElement>['onClick'];
}

const Card: FC<CardProps> = ({ children, bordered = false, cover, hoverable = true, className, href, style, title, onClick }) => {
  const hasBordered = bordered ? styles.hasBorder : undefined;
  const hasHover = hoverable ? styles.hasHover : undefined;

  const combineProps = { style, className: classNames(styles.container, className, hasBordered, hasHover) };
  if (!!href) {
    return (
      <a {...combineProps} href={href} onClick={onClick}>
        <div className={styles.header}>
          <img src={cover} />
          {title}
        </div>
        <div className={styles.body}>{children}</div>
      </a>
    );
  }
  return (
    <div {...combineProps} onClick={onClick}>
      <div className={styles.header}>
        <img src={cover} />
        {title}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Card;
