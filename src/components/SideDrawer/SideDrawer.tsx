import MenuItem from 'components/Menu/Item/MenuItem';
// import Overlay from 'components/Overlay/Overlay';
import React, { Component, CSSProperties, DOMAttributes, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { pages } from 'routes';
import classNames from 'utils/functions/classNames';
import { View } from 'wiloke-react-core';
import styles from './Sidedrawer.module.scss';

export interface SideDrawerProps {
  children?: ReactNode;
  anchor: 'bottom' | 'left' | 'right' | 'top';
  className?: string;
  open: boolean;
  style: CSSProperties;
  onClose?: DOMAttributes<HTMLElement>['onClick'];
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
        <View tagName="div" backgroundColor="gray1" {...combineProps}>
          <div className={styles.navMenuItems}>
            {pages.map(navItem => {
              if (navItem.name) {
                return (
                  <NavLink exact={navItem.exact} activeClassName={styles.active} to={navItem.path} className={styles.navItem}>
                    <MenuItem>{navItem.name}</MenuItem>
                  </NavLink>
                );
              }
            })}
          </div>
        </View>
      </>
    );
  }
}

export default SideDrawer;
