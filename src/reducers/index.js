import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from './app.reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  app: appReducer,
});

export default rootReducer;
