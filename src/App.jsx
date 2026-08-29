import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { RFQCartProvider } from './context/RFQCartContext';
import { ZycoonProvider } from './context/ZycoonContext';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ZycoonProvider>
          <RFQCartProvider>
            <AppRouter />
          </RFQCartProvider>
        </ZycoonProvider>
      </BrowserRouter>
    </MotionConfig>
  );
}
export { App };
