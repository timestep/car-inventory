import React from 'react';

export const Car = ({
  details,
}) => {
  if (!details) return null;
  return (
    <div>
      <img src={details.photos[0].sizes.base.url} />
      <div>Price: {details.price}</div>
      <div>Milage: {details.mileage}</div>
      <div>Type: {details.type}</div>
      <div>Model: {details.model}</div>
    </div>
  );
};
