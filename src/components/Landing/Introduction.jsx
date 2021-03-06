import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'reactstrap';

import * as actionCreators from 'action-creators/auth';
import resources from 'resources';

export class Introduction extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">{resources.intro.title}</h1>
        <p className="lead">{resources.intro.largeDescription}</p>
        <p>{resources.intro.smallDescription}</p>
        <p className="lead">
          <Button onClick={this.props.toggleSignUpForm} color="primary btn-lg">{resources.signUp}</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default connect(null, actionCreators)(Introduction);