import React from 'react';
import CircleItem from './index';
import ScissorIcon from '../../icon/ScissorIcon';
import SpockIcon from '../../icon/SpockIcon';
import PaperIcon from '../../icon/PaperIcon';
import RockIcon from '../../icon/RockIcon';
import LizardIcon from '../../icon/LizardIcon';
import { Primary, PrimaryShadow } from '../../type/general';

export const LizardCircleIcon = () => {
  return (
    <CircleItem
      color={Primary.LizardGradient}
      iconElement={<LizardIcon />}
      colorShadow={PrimaryShadow.LizardGradient}
      className={'game-icon lizard-icon'}
    />
  );
};

export const RockCircleIcon = () => {
  return (
    <CircleItem
      color={Primary.RocGradient}
      iconElement={<RockIcon />}
      colorShadow={PrimaryShadow.RocGradient}
      className={'game-icon rock-icon'}
    />
  );
};

export const PaperCircleIcon = () => {
  return (
    <CircleItem
      color={Primary.PaperGradient}
      iconElement={<PaperIcon />}
      colorShadow={PrimaryShadow.PaperGradient}
      className={'game-icon paper-icon'}
    />
  );
};

export const SpockCircleIcon = () => {
  return (
    <CircleItem
      color={Primary.Cya}
      iconElement={<SpockIcon />}
      colorShadow={PrimaryShadow.Cya}
      className={'game-icon spock-icon'}
    />
  );
};

export const ScissorCircleIcon = () => {
  return (
    <CircleItem
      color={Primary.ScissorGradient}
      iconElement={<ScissorIcon />}
      colorShadow={PrimaryShadow.ScissorGradient}
      className={'game-icon scissor-icon'}
    />
  );
};
