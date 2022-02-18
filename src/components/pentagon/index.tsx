import React from 'react';
import { PentagonWrapper } from './style';
import { PentagonIcon } from '../../icon/PentagonIcon';
import {
  LizardCircleIcon,
  PaperCircleIcon,
  RockCircleIcon,
  SpockCircleIcon,
  ScissorCircleIcon,
} from '../cicle-item/GameIcon';

const Pentagon = () => {
  return (
    <PentagonWrapper>
      <PentagonIcon style={{ width: 350, height: 350 }} />
      <PaperCircleIcon />
      <LizardCircleIcon />
      <SpockCircleIcon />
      <RockCircleIcon />
      <ScissorCircleIcon />
    </PentagonWrapper>
  );
};

export default Pentagon;
