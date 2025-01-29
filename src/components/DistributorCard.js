// src/components/DistributorCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DistributorCard = ({ distributor }) => {
  return (
    <Card>
      <h2>{distributor.name}</h2>
      <p>Last Month Quantity: {distributor.lastMonthQuantity}</p>
      <p>Forecasted Quantity: {distributor.forecastedQuantity}</p>
      <p>Year-to-Date Average: {distributor.yearToDateAverage}</p>
    </Card>
  );
};

export default DistributorCard;

