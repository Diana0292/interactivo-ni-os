import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import { AppRoutes } from './routes/AppRoutes';

export const App = () => {
  return (
    <BrowserRouter>
    
        <AppRoutes/>

    </BrowserRouter>
  )
}
