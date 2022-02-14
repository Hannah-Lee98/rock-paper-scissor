import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/homepage';
import { ROUTE } from '../type/general';
import OnGame from '../pages/on-game';
import NotFoundPage from '../pages/not-found';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.ON_GAME} element={<OnGame />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
