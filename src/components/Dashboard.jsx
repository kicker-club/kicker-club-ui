import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from 'action-creators/auth';
import resources from 'resources';

export class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mx-auto">
        <p className="lead">Ниасилили</p>
      </div>
    );
  }
}

export default connect(null, actionCreators)(Dashboard);