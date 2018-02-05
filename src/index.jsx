import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import authReducer from 'reducers/auth-reducer';
import KickerApp from 'components/KickerApp';
import LandingPage from 'components/LandingPage';

import '../styles/bootstrap-flatly-theme.min.css';
import '../styles/main.less';

const rootReducer = combineReducers({
  authReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <LandingPage />
  </Provider>,
  document.getElementById('kicker-app'));