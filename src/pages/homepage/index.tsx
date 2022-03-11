import React, { useCallback, useState } from 'react';
import PageHead from '../../components/header/PageHead';
import { HomeWrapper } from './style';
import { ACTION_TYPE, useGameStore } from '../../store/reducer';
import { ContainerWrapper } from '../../components/styled-component-wrapper';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../type/general';
import Nav from '../../components/header/Nav';
import Button from '../../components/button/Button';

const Home = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useGameStore();

  const [readyToPlay, setReadyToPlay] = useState<boolean>(false);
  const handleChoseType = useCallback(
    (type: 3 | 5) => {
      dispatch({ type: ACTION_TYPE.CHANGE_GAME_TYPE, payload: type });
      navigate(ROUTE.ON_GAME);
    },
    [dispatch, navigate],
  );

  return (
    <>
      <PageHead title={'Home'} />
      <ContainerWrapper className={`${state.theme ? 'dark' : 'light'}`}>
        <Nav />
        <HomeWrapper theme={state.theme}>
          {!readyToPlay && <h1>Welcome to the game!</h1>}
          <section className={'main-section'}>
            {!readyToPlay ? (
              <div>
                <Button
                  className={'start-btn'}
                  style={{
                    fontSize: '2.5rem',
                    textTransform: 'uppercase',
                    fontStyle: 'italic',
                  }}
                  onClick={() => {
                    setReadyToPlay(true);
                  }}
                >
                  Let's play!
                </Button>
              </div>
            ) : (
              <div className={'choose-type-game-section'}>
                <label>Choose type of game</label>
                <div>
                  <Button
                    className={'type-game-btn'}
                    size={'lg'}
                    onClick={() => {
                      handleChoseType(3);
                    }}
                  >
                    3 items
                  </Button>
                  <Button
                    className={'type-game-btn'}
                    size={'lg'}
                    onClick={() => {
                      handleChoseType(5);
                    }}
                  >
                    5 items
                  </Button>
                </div>
              </div>
            )}
          </section>
        </HomeWrapper>
      </ContainerWrapper>
    </>
  );
};

export default Home;
