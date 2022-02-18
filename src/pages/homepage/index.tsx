import React from 'react';
import PageHead from '../../components/header/PageHead';
import { HomeWrapper } from './style';
import Pentagon from '../../components/pentagon';
import ScoreCom from '../../components/score/ScoreCom';

const Home = () => {
  return (
    <>
      <PageHead title={'Home'} />
      <HomeWrapper>
        <ScoreCom />
        <Pentagon />
      </HomeWrapper>
    </>
  );
};

export default Home;
