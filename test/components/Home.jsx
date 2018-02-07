import React from 'react';
import chai from 'chai';
import {
  Simulate,
  scryRenderedDOMComponentsWithTag
} from 'react-dom/test-utils';

import { createMockedStore, renderConnectedComponent } from '../test-utils';
import ConnectedHome, { Home } from 'components/Home';

const should = chai.should();

describe('Home', () => {
  it('should show sign up form after click on the last button', () => {
    const store = createMockedStore();
    const renderedComponent = renderConnectedComponent(ConnectedHome, store);
    const buttons = scryRenderedDOMComponentsWithTag(renderedComponent, 'button');

    Simulate.click(buttons[buttons.length - 1]);

    const action = store.getActions()[0];
    action.type.should.equal('TOGGLE_SIGN_UP_FORM');
  });
});