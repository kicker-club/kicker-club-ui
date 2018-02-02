import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import signUpReducer from './reducers/signup-reducer';
import KickerApp from './components/KickerApp';
import LandingPage from './components/LandingPage';

import '../styles/bootstrap-flatly-theme.min.css';
import '../styles/main.less';

const rootReducer = combineReducers({
  signUpReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <LandingPage />
  </Provider>,
  document.getElementById('kicker-app'));