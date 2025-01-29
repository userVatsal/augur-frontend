// src/components/Dashboard.js
import React, { useContext } from 'react';
import { DistributorContext } from '../context/DistributorContext';
import DistributorCard from './DistributorCard';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Dashboard = () => {
  const { distributorsData } = useContext(DistributorContext);

  return (
    <DashboardContainer>
      {distributorsData.map((distributor, index) => (
        <DistributorCard key={index} distributor={distributor} />
      ))}
    </DashboardContainer>
  );
};

export default Dashboard;

