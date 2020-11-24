import { range } from 'ramda';
import React, { FC } from 'react';
import { GridSmart, Skeleton, View } from 'wiloke-react-core';

interface SkeletonYoutubeCardProps {
  item: number;
  isList?: boolean;
  imageRatio?: number;
}

const SkeletonYoutubeCard: FC<SkeletonYoutubeCardProps> = ({ item, isList = false, imageRatio = 50 }) => {
  if (!!isList) {
    return (
      <View>
        <GridSmart columnWidth={990}>
          {range(0, item).map(skeItem => (
            <Skeleton key={String(skeItem)} color="gray5" textNumberLines={4} imageAspectRatioPercent={imageRatio} list={isList} />
          ))}
        </GridSmart>
      </View>
    );
  }
  return (
    <View>
      <GridSmart columnWidth={350} columnGap={30}>
        {range(0, item).map(skeItem => (
          <Skeleton key={String(skeItem)} color="gray5" imageAspectRatioPercent={56.25} textNumberLines={3} />
        ))}
      </GridSmart>
    </View>
  );
};
export default SkeletonYoutubeCard;
