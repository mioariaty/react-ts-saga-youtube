import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import React, { CSSProperties, FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'utils/functions/classNames';
import * as FaIcons from 'react-icons/fa';
import MenuItem from './Item/MenuItem';
import styles from './Menu.module.scss';

export interface MenuProps {
  fixed?: boolean;
  logo?: 'string';
  style?: CSSProperties;
  className?: string;
  bgColor: 'dark' | 'light' | 'primary' | 'secondary';
}

const Menu: FC<MenuProps> = ({
  style,
  fixed,
  className,
  bgColor = 'light',
  logo = 'https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png',
}) => {
  const isFixed = fixed ? styles.fixed : undefined;
  const combineProps = { style, className: classNames(styles.container, className, isFixed, styles[bgColor]) };

  return (
    <div {...combineProps}>
      <MenuItem className={styles.logo}>
        <FaIcons.FaBars style={{ marginRight: 16 }} />
        <Link to="/youtube" className="no-underline flex-center">
          <img src={logo} alt="" />
          <span>Youtube</span>
        </Link>
      </MenuItem>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formGroup}>
            <Input sizeInput="small" />
            <Button size="small">Search</Button>
          </div>
        </form>
      </div>
      <div className={styles.body}>
        <MenuItem href="#">Login</MenuItem>
      </div>
    </div>
  );
};
export default Menu;
