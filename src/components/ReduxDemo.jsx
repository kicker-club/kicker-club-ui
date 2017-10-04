import React from 'react';
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';

import * as actionCreators from '../action-creator';

const propTypes = {
    score: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired
};

class ReduxDemo extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.increase()}>Click here to increase the number!</button>
                <h3>{this.props.score}</h3>
            </div>
        )
    }
}

ReduxDemo.propTypes = propTypes;

function mapStateToProps(state) {
    const score = state.kickerReducer.get('score');
    return { score };
}

export { ReduxDemo as ReduxDemoPure };
export default connect(mapStateToProps, actionCreators)(ReduxDemo);