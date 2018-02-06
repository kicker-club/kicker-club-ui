import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

import Menu from './Menu';
import resources from 'resources';

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-block">
        <Navbar expand="sm" className="navbar-dark bg-primary">
          <NavbarBrand href="/">{resources.title}</NavbarBrand>
          <div className="d-inline-block">
            <Menu />
          </div>
        </Navbar>
      </div>
    );
  }
}
