import React from 'react';
import { UncontrolledCarousel, Button } from 'reactstrap';
import { connect } from 'react-redux';

import Introduction from './Landing/Introduction';
import HowItWorks from './Landing/HowItWorks';
import Advantages from './Landing/Advantages';
import TournamentTypes from './Landing/TournamentTypes';

import * as actionCreators from 'action-creators';
import resources from 'resources';

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container landing mx-auto">
        <Introduction />
        <Advantages />
        <HowItWorks />
        <UncontrolledCarousel items={resources.carouselImages} />
        <TournamentTypes />
        <Button
          onClick={this.props.toggleSignUpForm}
          color="primary"
          className="d-block mx-auto mb-5 btn-lg">
          {resources.signUp}
        </Button>
      </div>
    );
  }
}

export default connect(null, actionCreators)(Home);