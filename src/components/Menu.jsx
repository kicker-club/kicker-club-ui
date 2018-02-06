import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import * as actionCreators from 'action-creators';
import resources from 'resources';

export class Menu extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const signIn = (
      <NavItem>
        <NavLink
          role="button"
          onClick={this.props.toggleSignInForm}
          className="cursor-pointer">
          {resources.menu.signIn}
        </NavLink>
      </NavItem>
    );

    const signOut =(
      <NavItem>
        <NavLink
          role="button"
          onClick={() => this.props.signOut(this.props.history)}
          className="cursor-pointer">
          {resources.menu.signOut}
        </NavLink>
      </NavItem>
    );

    return (
      <Nav navbar>
        <NavItem>
          <Link className="nav-link" to="/">{resources.menu.home}</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/contacts">{resources.menu.contacts}</Link>
        </NavItem>
        {this.props.signedIn ? signOut : signIn}
      </Nav>
    );
  }
}

function mapStateToProps(state) {
  const signedIn = state.authReducer.get('signedIn');
  return { signedIn };
}

export default withRouter(connect(mapStateToProps, actionCreators)(Menu));