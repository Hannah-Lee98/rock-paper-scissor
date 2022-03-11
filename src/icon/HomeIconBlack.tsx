import React from 'react';

import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../type/general';
const HomeIconBlack = () => {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => navigate(ROUTE.HOME)}
      alt={''}
      src={'/images/home-icon-black.png'}
      style={{
        width: 30,
        height: 'auto',
        cursor: 'pointer',
      }}
    />
  );
};

export default HomeIconBlack;
