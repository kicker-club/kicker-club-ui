import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// TODO: Replace by BrowserRouter when backend is ready.
import { HashRouter as Router } from 'react-router-dom';

import authReducer from 'reducers/auth-reducer';
import menuReducer from 'reducers/menu-reducer';
import Demo from 'components/Demo';
import Master from 'components/Master';

import '../styles/index.less';

const rootReducer = combineReducers({
  authReducer,
  menuReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Master />
    </Router>
  </Provider>,
  document.getElementById('kicker-app'));