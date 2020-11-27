import React, { FC, ReactNode } from 'react';
import { Waypoint } from 'react-waypoint';
import { Loader } from 'semantic-ui-react';
import styles from './infiniteScroll.module.scss';
export interface InfiniteScrollProps {
  children: ReactNode;
  isLoading: boolean;
  callback: (args: Waypoint.CallbackArgs) => void;
}

const InfiniteScroll: FC<InfiniteScrollProps> = ({ callback, children, isLoading }) => {
  return (
    <>
      {children}
      <Waypoint onEnter={callback} bottomOffset="-15px">
        <div className={styles.container}>
          <Loader active={isLoading} inline="centered" />
        </div>
      </Waypoint>
    </>
  );
};

export default InfiniteScroll;
