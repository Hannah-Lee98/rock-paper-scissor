import { useContext } from 'react';

export enum ACTION_TYPE {
  ADD_SCORE = 'game/ADD_SCORE',
  RESET_SCORE = 'game/RESET_SCORE',
  CHANGE_THEME = 'theme/CHANGE_THEME',
}

export type DispatchActionType = { type: ACTION_TYPE; payload?: any };
