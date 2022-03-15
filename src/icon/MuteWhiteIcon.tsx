import React from 'react';

import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../type/general';
const MuteWhiteIcon = () => {
  return (
    <img
      alt={''}
      src={'/images/mute-white.png'}
      style={{
        width: 25,
        height: 'auto',
        cursor: 'pointer',
      }}
    />
  );
};

export default MuteWhiteIcon;
