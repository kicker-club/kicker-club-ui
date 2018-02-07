import React from 'react';
import chai from 'chai';
import ShallowRenderer from 'react-test-renderer/shallow';

import HowItWorks from 'components/Landing/HowItWorks';
import resources from 'resources';

const should = chai.should();

describe('HowItWorks', () => {
  it('should render title', () => {
    const expected = <h1 className="display-3 text-center">{resources.howItWorks.title}</h1>;
    const renderer = new ShallowRenderer();
    renderer.render(<HowItWorks />);
    const result = renderer.getRenderOutput();

    should.equal(result.type, 'div');
    should.exist(result.props.children[0].props.children);
    should.equal(expected.props.children, result.props.children[0].props.children);
  });
});