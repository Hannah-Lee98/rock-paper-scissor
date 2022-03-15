import React, { HTMLAttributes, FC, useCallback } from 'react';
import styled from 'styled-components';
import { useAudio } from '../audio-player/AudioPlayer';

interface IButton {
  size?: 'lg' | 'md' | 'sm';
  type?: 'primary' | 'outlined';
}

const Button: FC<IButton & HTMLAttributes<Element>> = props => {
  const { size, type, children, className, onClick, ...rest } = props;

  const { toggle } = useAudio('/sound/click-btn.wav');

  const handleClick = useCallback(
    async e => {
      toggle();
      setTimeout(() => {
        if (onClick) onClick(e);
      }, 10);
    },
    [onClick, toggle],
  );

  return (
    <ButtonWrapper
      {...rest}
      className={`${className} ${size || ''} ${type || ''}`}
      onClick={handleClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  border: 1px solid;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;
  font-size: 1rem;
  padding: 0.3em 1.5em;
  height: fit-content;
  font: inherit;
  font-weight: 300;
  white-space: nowrap;
  &.lg {
    font-size: 2rem;
  }
  &.sm {
    font-size: 0.5rem;
  }
`;
