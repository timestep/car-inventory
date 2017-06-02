import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './store/routes';
import { store } from './store/configure-store';
import './styles/index.css';

import { HeaderComponent } from './common/header';
import { FooterComponent } from './common/footer';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <div>
    <HeaderComponent />
      <Provider store={ store }>
        <Router history={ history }>
          { routes }
        </Router>
      </Provider>
    <FooterComponent />
  </div>
  , document.getElementById('root')
);
