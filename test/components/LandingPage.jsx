import chai from 'chai';
import { renderIntoDocument } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

import { LandingPage } from './../../src/components/LandingPage';
import Header from './../../src/components/Landing/Header';
import Footer from './../../src/components/Landing/Footer';

const should = chai.should();

// We don't have to setup fake DOM because we use Phantom.
// Shallow renderer doesn't require DOM at all.
describe('LandingPage', () => {
  const testComponentPresence = (expected) => {
    const renderer = new ShallowRenderer();

    renderer.render(<LandingPage />);
    const result = renderer.getRenderOutput();

    should.exist(result.props.children);
    should.exist(result.props.children[3]);
    should.equal(result.props.children[3].props.children, expected.props.children);
    should.equal(result.props.children[3].props.type, expected.props.type);
  };

  // Now there is connected component.
  xit('should render footer', () => {
    testComponentPresence(<Footer />);
  });

  // Now there is connected component.
  xit('should render header', () => {
    testComponentPresence(<Header />);
  });

  // TODO: It's needed to pass a store to test connected LandingPage and use redux-mock-store.
  it('should test output in connected Landing page');
});