import React from 'react';
import { Car } from './car';

export const App = ({
  cars,
}) => {
  if (!cars) return null;
  return (
    <div>
      <Car
        details={cars[0]}
      />
    </div>
  );
};
