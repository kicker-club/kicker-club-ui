import React from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand } from 'reactstrap';
import MediaQuery from 'react-responsive';

import Menu from './Menu';
import MobileMenu from './MobileMenu';
import BurgerButton from './BurgerButton';
import resources from 'resources';
import * as actionCreators from 'action-creators/auth';

export class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const widthToSwitchOnMobileMenu = 800;

    return (
      <div className="header d-block">
        <Navbar expand="xs" className="navbar-dark bg-primary">
          { /* Probably we should use native bootstrap toggler and bootstrap sliding menu. */ }
          <MediaQuery maxWidth={widthToSwitchOnMobileMenu}>
            <BurgerButton />
          </MediaQuery>
          <NavbarBrand href="/">{resources.title}</NavbarBrand>
          <div className="d-inline-block">
            <MediaQuery minWidth={widthToSwitchOnMobileMenu + 1}>
              <Menu />
            </MediaQuery>
            <MediaQuery maxWidth={widthToSwitchOnMobileMenu}>
              <MobileMenu />
            </MediaQuery>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default connect(null, actionCreators)(Header);
