import React from 'react';
import { UncontrolledCarousel, Button } from 'reactstrap';
import { connect } from 'react-redux';

import * as actionCreators from '../action-creator';
import Header from './Landing/Header';
import Introduction from './Landing/Introduction';
import HowItWorks from './Landing/HowItWorks';
import Advantages from './Landing/Advantages';
import TournamentTypes from './Landing/TournamentTypes';
import Footer from './Landing/Footer';
import SignUpModal from './SignUpModal';
import resources from '../resources';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SignUpModal />
        <Header />
        <div className="landing-container mx-auto">
          <Introduction />
          <Advantages />
          <HowItWorks />
          <UncontrolledCarousel items={resources.carouselImages} />
          <TournamentTypes />
          <Button
            onClick={this.props.switchSignUp}
            color="primary"
            className="d-block mx-auto mb-5 btn-lg">
            {resources.signUp}
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actionCreators)(LandingPage);