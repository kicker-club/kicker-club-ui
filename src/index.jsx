import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import kickerReducer from './reducers/kicker-reducer';
import KickerApp from './components/KickerApp';

const rootReducer = combineReducers({
    kickerReducer: kickerReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <KickerApp />
    </Provider>,
    document.getElementById('kicker-app'));