import React from 'react';
import { Link } from 'react-router-dom';
import PageHead from '../../components/header/PageHead';
import { ContainerWrapper } from '../../components/styled-component-wrapper';
import { ROUTE } from '../../type/general';

const NotFoundPage = () => {
  return (
    <>
      <PageHead title={'Not Found Page'} />
      <ContainerWrapper>
        <h1> 404 not found </h1>
        <p style={{ textAlign: 'center' }}>
          <Link to={ROUTE.HOME}> Go to HomePage</Link>
        </p>
      </ContainerWrapper>
    </>
  );
};

export default NotFoundPage;
