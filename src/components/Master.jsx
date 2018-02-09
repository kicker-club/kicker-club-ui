import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contacts from './Contacts';
import Dashboard from './Dashboard';
import SignUpModal from './Auth/SignUpModal';
import SignInModal from './Auth/SignInModal';

import { routes } from 'consts';
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
        <Switch>
          <Route exact path={routes.root} component={Home} />
          <Route path={routes.contacts} component={Contacts} />
          {
            this.props.signedIn
              ? <Route path={routes.dashboard} component={Dashboard} />
              : <Redirect to={{
                  pathname: routes.root,
                  state: { from: this.props.location }
                }} />
          }
        </Switch>
        <Footer />
        <SignUpModal />
        <SignInModal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const signedIn = state.authReducer.get('signedIn');
  return { signedIn };
}

export default withRouter(connect(mapStateToProps, actionCreators)(Master));