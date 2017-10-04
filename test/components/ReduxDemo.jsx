import chai from 'chai';
import { renderIntoDocument } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

import { ReduxDemoPure } from './../../src/components/ReduxDemo';

const should = chai.should();

describe('ReduxDemo', () => {
    it('1 + 1 = 2', () => {
        const result = 1 + 1;
        result.should.equal(2);
    });

    it('shallow rendering', () => {
        const score = 10;
        const renderer = new ShallowRenderer();
        const expected = <h3>{score}</h3>;

        renderer.render(<ReduxDemoPure score={score} increase={()=>{}} />);
        const result = renderer.getRenderOutput();

        should.exist(result.props.children);
        should.exist(result.props.children[1]);
        should.equal(result.props.children[1].props.children, expected.props.children);
        should.equal(result.props.children[1].props.type, expected.props.type);
    });
});