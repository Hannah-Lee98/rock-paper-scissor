import React, { FC } from 'react';
import CircleItem from './index';
import ScissorIcon from '../../icon/ScissorIcon';
import SpockIcon from '../../icon/SpockIcon';
import PaperIcon from '../../icon/PaperIcon';
import RockIcon from '../../icon/RockIcon';
import LizardIcon from '../../icon/LizardIcon';
import { Primary, PrimaryShadow } from '../../type/general';

interface GameIcon {
  hasSound?: boolean;
}
export const LizardCircleIcon: FC<GameIcon> = props => {
  const { hasSound } = props;
  return (
    <CircleItem
      color={Primary.LizardGradient}
      iconElement={<LizardIcon />}
      colorShadow={PrimaryShadow.LizardGradient}
      className={'game-icon lizard-icon'}
      hasSound={hasSound}
    />
  );
};

export const RockCircleIcon: FC<GameIcon> = props => {
  const { hasSound } = props;
  return (
    <CircleItem
      color={Primary.RocGradient}
      iconElement={<RockIcon />}
      colorShadow={PrimaryShadow.RocGradient}
      className={'game-icon rock-icon'}
      hasSound={hasSound}
    />
  );
};

export const PaperCircleIcon: FC<GameIcon> = props => {
  const { hasSound } = props;
  return (
    <CircleItem
      color={Primary.PaperGradient}
      iconElement={<PaperIcon />}
      colorShadow={PrimaryShadow.PaperGradient}
      className={'game-icon paper-icon'}
      hasSound={hasSound}
    />
  );
};

export const SpockCircleIcon: FC<GameIcon> = props => {
  const { hasSound } = props;
  return (
    <CircleItem
      color={Primary.Cya}
      iconElement={<SpockIcon />}
      colorShadow={PrimaryShadow.Cya}
      className={'game-icon spock-icon'}
      hasSound={hasSound}
    />
  );
};

export const ScissorCircleIcon: FC<GameIcon> = props => {
  const { hasSound } = props;
  return (
    <CircleItem
      color={Primary.ScissorGradient}
      iconElement={<ScissorIcon />}
      colorShadow={PrimaryShadow.ScissorGradient}
      className={'game-icon scissor-icon'}
      hasSound={hasSound}
    />
  );
};
