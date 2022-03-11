import React, { FC } from 'react';
import { TriangleWrapper } from './style';
import {
  PaperCircleIcon,
  RockCircleIcon,
  ScissorCircleIcon,
} from '../cicle-item/GameIcon';
import { TriangleIcon } from '../../icon/TriangleIcon';
import { Item_type } from '../../type/general';

interface ITriangle {
  handleChoseItem: Function;
}

const Triangle: FC<ITriangle> = props => {
  const { handleChoseItem } = props;

  return (
    <TriangleWrapper>
      <TriangleIcon style={{ width: 250, height: 250 }} />
      <div
        onClick={() => {
          handleChoseItem(Item_type.PAPER);
        }}
      >
        <PaperCircleIcon />
      </div>
      <div
        onClick={() => {
          handleChoseItem(Item_type.ROCK);
        }}
      >
        <RockCircleIcon />
      </div>
      <div
        onClick={() => {
          handleChoseItem(Item_type.SCISSOR);
        }}
      >
        <ScissorCircleIcon />
      </div>
    </TriangleWrapper>
  );
};

export default Triangle;
