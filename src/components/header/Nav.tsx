import React, { useCallback, useEffect, useRef } from 'react';
import HomeIconWhite from '../../icon/HomeIconWhite';
import HomeIconBlack from '../../icon/HomeIconBlack';
import StyledSwitch from '../styled-switch';
import { ACTION_TYPE, useGameStore } from '../../store/reducer';
import styled from 'styled-components';
import UnMuteIcon from '../../icon/UnMuteIcon';
import MuteIcon from '../../icon/MuteIcon';
import UnMuteWhiteIcon from '../../icon/UnMuteWhiteIcon.tsx';
import MuteWhiteIcon from '../../icon/MuteWhiteIcon';
import AudioPlayer from '../audio-player/AudioPlayer';

const Nav = () => {
  const { state, dispatch } = useGameStore();

  const handleToggleSound = useCallback(
    e => {
      e.preventDefault();
      dispatch({ type: ACTION_TYPE.SWTCH_SOUND });
    },
    [dispatch],
  );

  return (
    <NavWrapper className={'header-section'}>
      <div className={'header-section__left'}>
        {state.theme ? <HomeIconWhite /> : <HomeIconBlack />}
      </div>
      <div className={'header-section__center'}>
        <span className={'theme-title'}>
          {state.theme ? 'Dark Theme' : 'Light Theme'}
        </span>
        <StyledSwitch />
      </div>
      <div className={'header-section__right'}>
        <span className={'sound-icon-wrapper'} onClick={handleToggleSound}>
          {!state.theme ? (
            state.gameSound ? (
              <UnMuteIcon />
            ) : (
              <MuteIcon />
            )
          ) : state.gameSound ? (
            <UnMuteWhiteIcon />
          ) : (
            <MuteWhiteIcon />
          )}
        </span>
      </div>
      <AudioPlayer
        isPlay={state.gameSound}
        src="/sound/main-bg-sound.mp3"
        loop
      />
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  &.header-section {
    display: flex;
    padding: 1rem;
    align-items: center;
    width: min(1200px, 100%);
    margin: 0 auto 2rem auto;
  }
  .header-section__left {
    flex: 1;
  }
  .header-section__center {
    display: flex;
    align-items: center;
    .theme-title {
      margin: 0 1rem;
    }
  }
  .header-section__right {
    padding: 0 1rem;
  }
  .sound-icon-wrapper {
    display: flex;
    align-items: center;
  }
`;
