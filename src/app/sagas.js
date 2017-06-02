import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';

import { getCarList } from '../common/api';

export function* routeChangeWatcher() {
  yield takeLatest('@@router/LOCATION_CHANGE', isRootRoute);
}

function* isRootRoute(event) {
  if (event.payload.pathname !== '/') return;
  const carList = yield call(getCarList);
  yield put({type: 'FETCH_CARS_SUCCESS', payload: carList});
}
