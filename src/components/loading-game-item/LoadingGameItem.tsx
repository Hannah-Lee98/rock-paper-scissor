import React, { FC, useEffect, useState } from 'react';
import { renderItem } from '../../pages/on-game';
import { getRandomGameItem } from '../../utils';

const LoadingGameItem: FC = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const myTimeout = setInterval(() => {
      setCount(s => {
        if (s === 5) {
          return 1;
        }
        return ++s;
      });
    }, 100);

    return () => {
      clearInterval(myTimeout);
    };
  }, []);

  return <>{renderItem(getRandomGameItem(count.toString()))}</>;
};

export default LoadingGameItem;
