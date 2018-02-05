import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import * as actionCreators from 'actions';
import resources from 'resources';

export class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar expand="sm" className="navbar-dark bg-primary">
        <NavbarBrand href="/">{resources.title}</NavbarBrand>
        <Collapse isOpen={true}>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">{resources.menu.home}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contacts">{resources.menu.contacts}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                role="button"
                onClick={this.props.toggleSignInForm}
                className="cursor-pointer">{resources.menu.signIn}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default connect(null, actionCreators)(Header);