import React, { FC, ReactNode } from 'react';
import { CircleItemWrapper } from './style';

interface ICircleItem {
  color?: string;
  iconElement?: ReactNode;
  colorShadow: string;
  className?: string;
}

const CircleItem: FC<ICircleItem> = props => {
  const { color = 'pink', iconElement, colorShadow, className } = props;
  return (
    <CircleItemWrapper
      color={color}
      colorShadow={colorShadow}
      className={className}
    >
      <div className={'inner-circle'} />
      <div className={'inner-icon'}>{iconElement}</div>
    </CircleItemWrapper>
  );
};

export default CircleItem;
