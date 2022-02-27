import React, { Dispatch, useReducer } from 'react';
import PageHead from '../../components/header/PageHead';
import { HomeWrapper } from './style';
import Pentagon from '../../components/pentagon';
import ScoreCom from '../../components/score/ScoreCom';
import {
  GameContext,
  IGameStore,
  initState,
  reducer,
} from '../../store/reducer';
import { DispatchActionType } from '../../store/action';

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const value: {
    state: IGameStore;
    dispatch: Dispatch<DispatchActionType>;
  } = {
    state,
    dispatch,
  };
  return (
    <GameContext.Provider value={value}>
      <PageHead title={'Home'} />
      <HomeWrapper>
        <ScoreCom />
        <Pentagon />
      </HomeWrapper>
    </GameContext.Provider>
  );
};

export default Home;
