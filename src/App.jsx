import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { Footer } from './components';

export const App = () => {
  return (
    <BrowserRouter>

      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}
