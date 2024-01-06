import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { Footer, Navegacion } from './components';

export const App = () => {
  return (
    <BrowserRouter>
      <Navegacion />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}
