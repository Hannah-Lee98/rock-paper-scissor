import React from 'react';
import { ScoreComWrapper } from './style';
import { useGameStore } from '../../store/reducer';

const GAME_TYPE = {
  3: {
    SCISSOR: 'SCISSOR',
    ROCK: 'ROCK',
    PAPER: 'PAPER',
  },
  5: {
    SCISSOR: 'SCISSOR',
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SPOCK: 'SPOCK',
    LIZARD: 'LIZARD',
  },
};

const ScoreCom = () => {
  const { state } = useGameStore();
  return (
    <ScoreComWrapper className={`${state.theme ? 'dark' : 'light'}`}>
      <div className={'left-section'}>
        {Object.keys(GAME_TYPE['5']).map(key => (
          <span className={'item-name'} key={key}>
            {key}
          </span>
        ))}
      </div>
      <div className={'right-section'}>
        <div className={'score-section'}>
          <div className={'label'}>Score</div>
          <div className={'score'}>{state.score}</div>
        </div>
      </div>
    </ScoreComWrapper>
  );
};

export default ScoreCom;
