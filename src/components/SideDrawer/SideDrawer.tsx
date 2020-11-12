import MenuItem from 'components/Menu/Item/MenuItem';
// import Overlay from 'components/Overlay/Overlay';
import React, { Component, CSSProperties, DOMAttributes, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'utils/functions/classNames';
import styles from './Sidedrawer.module.scss';

export interface SideDrawerProps {
  children?: ReactNode;
  anchor: 'bottom' | 'left' | 'right' | 'top';
  className?: string;
  open: boolean;
  style: CSSProperties;
  onClose: DOMAttributes<HTMLElement>['onClick'];
}
type DefaultProps = Pick<SideDrawerProps, 'style' | 'anchor' | 'open'>;

class SideDrawer extends Component<SideDrawerProps, {}> {
  static defaultProps: DefaultProps = {
    style: {},
    anchor: 'left',
    open: true,
  };

  render() {
    const { style, anchor, className, open } = this.props;
    const isOpened = open ? styles.opened : undefined;
    const combineProps = { style, className: classNames(styles.container, className, isOpened, styles[anchor]) };
    return (
      <>
        {/* {open && <Overlay onClick={onClose} />} */}
        <div {...combineProps}>
          <div className={styles.navMenuItems}>
            <NavLink to="/">
              <MenuItem className={styles.navItem}>Home</MenuItem>
            </NavLink>
            <NavLink to="/about">
              <MenuItem className={styles.navItem}>About</MenuItem>
            </NavLink>
            <NavLink exact to="/youtube" activeClassName={styles.active} className={styles.navItem}>
              <MenuItem>Youtube</MenuItem>
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default SideDrawer;
