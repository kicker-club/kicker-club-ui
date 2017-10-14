import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import kickerReducer from './reducers/kicker-reducer';
import KickerApp from './components/KickerApp';

import '../styles/bootstrap-flatly-theme.min.css';
import '../styles/main.less';

const rootReducer = combineReducers({
    kickerReducer: kickerReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <KickerApp />
    </Provider>,
    document.getElementById('kicker-app'));