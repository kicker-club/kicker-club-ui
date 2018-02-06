import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from 'action-creators';
import resources from 'resources';

export class KickerApp extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mx-auto">
        <p className="lead">Здесь будут невиданные фичи!</p>
      </div>
    );
  }
}

export default connect(null, actionCreators)(KickerApp);