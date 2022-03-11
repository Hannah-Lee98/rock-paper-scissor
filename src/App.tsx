import React, { Dispatch, FC, useReducer } from 'react';
import AppRoutes from './app/route';
import { GameContext, IGameStore, initState, reducer } from './store/reducer';
import { DispatchActionType } from './store/action';

const App: FC = () => {
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
      <AppRoutes />
    </GameContext.Provider>
  );
};

export default App;
