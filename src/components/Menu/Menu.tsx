import Input from 'components/Input/Input';
import React, { CSSProperties, DOMAttributes, FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'utils/functions/classNames';
import * as FaIcons from 'react-icons/fa';
import { MaterialIcon, View } from 'wiloke-react-core';
import { Button } from 'wiloke-react-core';

import MenuItem from './Item/MenuItem';
import styles from './Menu.module.scss';

export interface MenuProps {
  fixed?: boolean;
  logo?: 'string';
  style?: CSSProperties;
  className?: string;
  bgColor: 'dark' | 'light' | 'primary' | 'secondary';
  onSubmit: (term: string) => void;
  valueForm?: string;
  onClick?: DOMAttributes<HTMLElement>['onClick'];
}

const Menu: FC<MenuProps> = ({
  style,
  fixed,
  className,
  onSubmit,
  bgColor = 'light',
  logo = 'https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png',
  onClick,
}) => {
  const [term, setTerm] = useState('');

  const _handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(term);
  };

  const _handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTerm(event.currentTarget.value);
  };

  const isFixed = fixed ? styles.fixed : undefined;
  const combineProps = { style, className: classNames(styles.container, className, isFixed, styles[bgColor]) };
  return (
    <View tagName="div" backgroundColor="gray1" {...combineProps}>
      <MenuItem className={styles.logo}>
        <FaIcons.FaBars style={{ marginRight: 16 }} onClick={onClick as any} />
        <Link to="/youtube" className="no-underline flex-center">
          <img src={logo} alt="" />
          <span>Youtube</span>
        </Link>
      </MenuItem>
      <div className={styles.formContainer}>
        <form onSubmit={_handleSubmit}>
          <div className={styles.formGroup}>
            <Input value={term} sizeInput="small" onChange={_handleOnChange} style={{ borderRadius: 0 }} />
            <Button type="submit" backgroundColor="gray2" size="small" tachyons={['flex', 'items-center']} style={{ padding: '1px 12px' }}>
              <MaterialIcon name="search" />
            </Button>
          </div>
        </form>
      </div>
      <div className={styles.body}>
        <MenuItem href="#">Login</MenuItem>
      </div>
    </View>
  );
};
export default Menu;
