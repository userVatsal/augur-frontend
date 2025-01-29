// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DistributorProvider } from './context/DistributorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DistributorProvider>
      <App />
    </DistributorProvider>
  </React.StrictMode>
);

