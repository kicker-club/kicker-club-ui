import React from 'react';
import { Map } from 'immutable';
import chai from 'chai';
import {
  Simulate,
  scryRenderedDOMComponentsWithTag
} from 'react-dom/test-utils';

import { createMockedStore, renderConnectedComponent } from '../test-utils';
import ConnectedMenu, { Menu } from 'components/Menu';
import { signIn } from 'action-creators';
import resources from 'resources';

const should = chai.should();

describe('Menu', () => {
  const getLinkByText = (renderedComponent, text) => {
    const links = scryRenderedDOMComponentsWithTag(renderedComponent, 'a');
    return links.find(link => link.textContent === text);
  };

  it('should show sign in form after click on \'Sign In\'', () => {
    const store = createMockedStore();
    const renderedComponent = renderConnectedComponent(ConnectedMenu, store);
    const link = getLinkByText(renderedComponent, resources.signIn);

    Simulate.click(link);

    const action = store.getActions()[0];
    action.type.should.equal('TOGGLE_SIGN_IN_FORM_VISIBILITY');
  });

  it('should sign out after click on \'Sign Out\'', () => {
    const store = createMockedStore();
    store.getState().authReducer = Map({signedIn: true});
    const renderedComponent = renderConnectedComponent(ConnectedMenu, store);
    const link = getLinkByText(renderedComponent, resources.menu.signOut);

    Simulate.click(link);

    const action = store.getActions()[0];
    action.type.should.equal('SIGN_OUT');
  });
});