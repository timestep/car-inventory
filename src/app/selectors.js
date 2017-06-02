import { createSelector } from 'reselect';

export const appSelector = (state) => state.app;

export const carsSelector = createSelector(
  appSelector,
  (app) => app.cars
);
