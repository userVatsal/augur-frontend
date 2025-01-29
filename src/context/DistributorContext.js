
import { createContext, useState } from 'react';
import { distributors } from '../mock/distributors';

export const DistributorContext = createContext();

export const DistributorProvider = ({ children }) => {
  const [distributorsData, setDistributorsData] = useState(distributors);

  return (
    <DistributorContext.Provider value={{ distributorsData, setDistributorsData }}>
      {children}
    </DistributorContext.Provider>
  );
};
