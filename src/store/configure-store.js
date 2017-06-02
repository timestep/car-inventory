import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import { routeChangeWatcher as rootSaga } from '../app/sagas';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const isDevEnv = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const store = compose(
    _getMiddleware(),
    ..._getEnhancers()
  )(createStore)(rootReducer, initialState);

  _enableHotLoader(store);
  return store;
}

function _getMiddleware() {
  let middleware = [
    routerMiddleware(browserHistory),
    sagaMiddleware,
  ];

  if (isDevEnv) {
    middleware = [...middleware, logger];
  }

  return applyMiddleware(...middleware);
}

function _getEnhancers() {
  let enhancers = [];

  if (isDevEnv && window.devToolsExtension) {
    enhancers = [...enhancers, window.devToolsExtension() ];
  }

  return enhancers;
}

function _enableHotLoader(store) {
  if (isDevEnv && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
}

export const store = configureStore({});

sagaMiddleware.run(rootSaga);
