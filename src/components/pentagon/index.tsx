import React, { FC } from 'react';
import { PentagonWrapper } from './style';
import { PentagonIcon } from '../../icon/PentagonIcon';
import {
  LizardCircleIcon,
  PaperCircleIcon,
  RockCircleIcon,
  SpockCircleIcon,
  ScissorCircleIcon,
} from '../cicle-item/GameIcon';
import { Item_type } from '../../type/general';

interface IPentagon {
  handleChoseItem: Function;
}

const Pentagon: FC<IPentagon> = props => {
  const { handleChoseItem } = props;
  return (
    <PentagonWrapper>
      <PentagonIcon style={{ width: 350, height: 350 }} />
      <div
        onClick={() => {
          handleChoseItem(Item_type.PAPER);
        }}
      >
        <PaperCircleIcon />
      </div>
      <div
        onClick={() => {
          handleChoseItem(Item_type.LIZARD);
        }}
      >
        <LizardCircleIcon />
      </div>
      <div
        onClick={() => {
          handleChoseItem(Item_type.SPOCK);
        }}
      >
        <SpockCircleIcon />
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
    </PentagonWrapper>
  );
};

export default Pentagon;
