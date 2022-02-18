import React, { useState } from 'react';
import { ScoreComWrapper } from './style';

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
  // const [gameType, setGameType] = useState<3 | 5>(3);
  const [score, setScore] = useState<number>(12);
  return (
    <ScoreComWrapper>
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
          <div className={'score'}>{score}</div>
        </div>
      </div>
    </ScoreComWrapper>
  );
};

export default ScoreCom;
