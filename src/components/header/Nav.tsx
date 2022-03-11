import React from 'react';
import HomeIconWhite from '../../icon/HomeIconWhite';
import HomeIconBlack from '../../icon/HomeIconBlack';
import StyledSwitch from '../styled-switch';
import { useGameStore } from '../../store/reducer';
import styled from 'styled-components';

const Nav = () => {
  const { state } = useGameStore();
  return (
    <NavWrapper className={'header-section'}>
      <div className={'header-section__left'}>
        {state.theme ? <HomeIconWhite /> : <HomeIconBlack />}
      </div>
      <div className={'header-section__right'}>
        <span className={'theme-title'}>
          {state.theme ? 'Dark Theme' : 'Light Theme'}
        </span>
        <StyledSwitch />
      </div>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  &.header-section {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    width: min(1200px, 100%);
    margin: 0 auto 2rem auto;
  }
  .header-section__right {
    display: flex;
    align-items: center;
    .theme-title {
      margin: 0 1rem;
    }
  }
`;
