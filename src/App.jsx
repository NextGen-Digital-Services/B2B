import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RFQCartProvider } from './context/RFQCartContext';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <BrowserRouter>
      <RFQCartProvider>
        <AppRouter />
      </RFQCartProvider>
    </BrowserRouter>
  );
}
export { App };
