import React from 'react';
import PageHead from '../../components/header/PageHead';
import { HomeWrapper } from './style';

const Home = () => {
  return (
    <>
      <PageHead title={'Home'} />
      <HomeWrapper>
        Almost before we knew it, we had left the ground.
      </HomeWrapper>
    </>
  );
};

export default Home;
