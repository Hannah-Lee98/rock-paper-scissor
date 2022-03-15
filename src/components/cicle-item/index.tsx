import React, { FC, ReactNode } from 'react';
import { CircleItemWrapper } from './style';
import { useAudio } from '../audio-player/AudioPlayer';

interface ICircleItem {
  color?: string;
  iconElement?: ReactNode;
  colorShadow: string;
  className?: string;
  hasSound?: boolean;
}

const CircleItem: FC<ICircleItem> = props => {
  const {
    color = 'pink',
    iconElement,
    colorShadow,
    className,
    hasSound = true,
  } = props;
  const { toggle } = useAudio('/sound/hover-item.wav');
  return (
    <CircleItemWrapper
      color={color}
      colorShadow={colorShadow}
      className={className}
      onMouseEnter={() => {
        if (hasSound) {
          toggle();
        }
      }}
    >
      <div className={'inner-circle'} />
      <div className={'inner-icon'}>{iconElement}</div>
    </CircleItemWrapper>
  );
};

export default CircleItem;
