import React, { CSSProperties, FC, ReactNode } from 'react';
import { ColorKey, View } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Section.module.scss';

export interface SectionProps {
  children: ReactNode;
  backgroundColorNative?: string;
  backgroundType?: 'full' | 'left' | 'right';
  backgroundColor?: ColorKey;
  style?: CSSProperties;
}

const Section: FC<SectionProps> = ({ style, children, backgroundColorNative, backgroundColor, backgroundType = 'full' }) => {
  const generalSetting = { style, className: classNames(styles.container) };
  return (
    <View tagName="section" {...generalSetting}>
      <View
        className={classNames(styles.background, styles[backgroundType])}
        style={{ backgroundColor: backgroundColorNative }}
        tachyons={['absolute', 'absolute--fill']}
        backgroundColor={backgroundColor}
      />
      {children}
    </View>
  );
};

export default Section;
