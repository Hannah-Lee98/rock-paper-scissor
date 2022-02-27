import { ACTION_TYPE, DispatchActionType } from './action';
import { createContext, Dispatch, useContext } from 'react';

interface IGameStore {
  score: number;
  theme: boolean;
}

const initState: IGameStore = {
  score: 0,
  theme: true,
};

const GameContext = createContext<
  | {
      state: IGameStore;
      dispatch: Dispatch<DispatchActionType>;
    }
  | undefined
>(undefined);

function useGameStore() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameStore must be used within a GameContext');
  }
  return context;
}

const reducer = (state: IGameStore, action: DispatchActionType) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_SCORE: {
      return {
        ...state,
        score: state.score + 1,
      };
    }
    case ACTION_TYPE.CHANGE_THEME: {
      return {
        ...state,
        theme: !state.theme,
      };
    }
    case ACTION_TYPE.RESET_SCORE: {
      return initState;
    }
    default:
      return state;
  }
};

export { initState, ACTION_TYPE, GameContext, useGameStore, reducer };
export type { IGameStore };
