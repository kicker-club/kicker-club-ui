import React from 'react';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { renderIntoDocument } from 'react-dom/test-utils';
import configureStore from 'redux-mock-store'

// We don't have to setup fake DOM because we use Phantom.
// Shallow renderer doesn't require DOM at all.

export function createMockedStore() {
  // It's possible to use a real 'createStore' function and real reducer.
  // But it's not recommended so we won't check output but actions.
  const mockStore = configureStore();
  return mockStore({
    authReducer: Map({})
  });
}

export function renderConnectedComponent(ConnectedCustomComponent, store) {
  // Also we can use <ConnectedCustomComponent store={store} /> without Provider
  // if nested components don't use a store (not connected components).
  // It's not neccessary to wrap every component with Router.
  // Actually it's needed only for components that use 'withRouter'.
  const component = (
    <Router>
      <Provider store={store}>
        <ConnectedCustomComponent />
      </Provider>
    </Router>
  );
  return renderIntoDocument(component);
}