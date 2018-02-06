import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contacts from './Contacts';
import KickerApp from './KickerApp';
import SignUpModal from './Auth/SignUpModal';
import SignInModal from './Auth/SignInModal';

import * as actionCreators from 'action-creators';
import resources from 'resources';

export class Master extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex flex-column h-100">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/app" component={KickerApp} />
        <Route path="/contacts" component={Contacts} />
        <Footer />
        <SignUpModal />
        <SignInModal />
      </div>
    );
  }
}

export default withRouter(connect(null, actionCreators)(Master));