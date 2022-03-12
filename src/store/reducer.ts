import { ACTION_TYPE, DispatchActionType } from './action';
import { createContext, Dispatch, useContext } from 'react';

interface IGameStore {
  score: number;
  theme: boolean;
  gameType: number;
}

const initState: IGameStore = {
  score: 0,
  theme: true,
  gameType: 0,
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
      return {
        ...state,
        score: initState.score,
      };
    }
    case ACTION_TYPE.CHANGE_GAME_TYPE: {
      return {
        ...state,
        gameType: action.payload,
      };
    }
    default:
      return state;
  }
};

export { initState, ACTION_TYPE, GameContext, useGameStore, reducer };
export type { IGameStore };
