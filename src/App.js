// src/App.js
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { DistributorProvider } from './context/DistributorContext';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const App = () => {
  return (
    <DistributorProvider>
      <AppContainer>
        <Header />
        <Dashboard />
      </AppContainer>
    </DistributorProvider>
  );
};

export default App;

