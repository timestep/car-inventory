import { merge } from 'ramda';

export function appReducer(
  state = {},
  action,
) {
  switch (action.type) {
  case 'FETCH_CARS_SUCCESS':
    return merge(state, action.payload);
  default:
    return state;
  }
}
