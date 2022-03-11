import React, { FC } from 'react';
import styled from 'styled-components';
import { THEME } from '../../type/general';
import { useGameStore } from '../../store/reducer';

const CircleShadow: FC = props => {
  const { state } = useGameStore();
  return (
    <CircleShadowWrapper theme={state.theme}>
      <div className={'shadow-circle shadow-circle__1'} />
      <div className={'shadow-circle shadow-circle__2'} />
      <div className={'shadow-circle shadow-circle__3'} />
      <div className={'shadow-circle shadow-circle__4'} />
      {props.children}
    </CircleShadowWrapper>
  );
};

export default CircleShadow;

interface ICircleShadowWrapper {
  theme: boolean;
}

const CircleShadowWrapper = styled.div<ICircleShadowWrapper>`
  position: relative;
  --scale-ratio: 1.15;
  --delay: 0.3s;
  .shadow-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(var(--scale-ratio));
    border-radius: 50%;
    opacity: 0.05;
    background: ${p => (p.theme ? THEME.DARK.BG : THEME.LIGHT.BG)};
  }
  .shadow-circle__1 {
  }
  .shadow-circle__2 {
    --scale-ratio: 1.45;
    --delay: 0.5s;
  }
  .shadow-circle__3 {
    --scale-ratio: 1.8;
    --delay: 0.8s;
  }
  .shadow-circle__4 {
    --scale-ratio: 2.2;
    --delay: 1s;
  }
  .game-icon {
    animation: scale-animation 2s infinite ease-in-out;
  }
  @keyframes scale-animation {
    from {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.05);
    }
    to {
      transform: scale(0.9);
    }
  }
`;
