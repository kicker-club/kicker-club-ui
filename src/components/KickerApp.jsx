import React from 'react';
import { connect } from 'react-redux';

import ReduxDemo from './ReduxDemo';

class KickerApp extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello Kicker Club!</h1>
                <ReduxDemo />
            </div>
        )
    }
}

export default KickerApp;