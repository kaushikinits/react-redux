import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import AllBooks from './app-redux/app-def-state/app-state';
import RootReducer from './app-redux/app-reducers';

import AppRouteSettings from './app-route';

const store = createStore(RootReducer, AllBooks);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={AppRouteSettings} />
  </Provider>,
  document.getElementById('root')
);
