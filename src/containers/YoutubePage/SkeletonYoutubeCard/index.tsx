import { range } from 'ramda';
import React, { FC } from 'react';
import { GridSmart, Skeleton, View } from 'wiloke-react-core';

interface SkeletonYoutubeCardProps {
  item: number;
  isList?: boolean;
}

const SkeletonYoutubeCard: FC<SkeletonYoutubeCardProps> = ({ item, isList = false }) => {
  if (!!isList) {
    return (
      <View>
        <GridSmart columnWidth={990}>
          {range(0, item).map(skeItem => (
            <Skeleton key={String(skeItem)} color="gray5" textNumberLines={4} imageAspectRatioPercent={50} list={isList} />
          ))}
        </GridSmart>
      </View>
    );
  }
  return (
    <View>
      <GridSmart columnWidth={350} columnCount={4} columnGap={30}>
        {range(0, item).map(skeItem => (
          <Skeleton key={String(skeItem)} color="gray5" imageAspectRatioPercent={56.25} textNumberLines={3} />
        ))}
      </GridSmart>
    </View>
  );
};
export default SkeletonYoutubeCard;
