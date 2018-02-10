import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const authorizedPlayer = this.props.signedIn && this.props.isPlayerRole;
    const authorizedAdmin = this.props.signedIn && !this.props.isPlayerRole;

    return (
      <Nav navbar>
        { this.renderNavItemLink('/', 'Главная') }
        { this.renderNavItemLink('/contacts', 'Контакты') }
        { this.props.showRoleSpecificItems && authorizedPlayer && this.renderPlayerMenu() }
        { this.props.showRoleSpecificItems && authorizedAdmin && this.renderAdminMenu() }
        {
          this.props.signedIn
            ? this.renderAuthButton(() => this.props.signOut(this.props.history), 'Выйти')
            : this.renderAuthButton(this.props.showSignInForm, 'Войти')
        }
      </Nav>
    );
  }

  renderAdminMenu() {
    return [
      this.renderNavItemLink('/new', 'Создать турнир'),
      this.renderNavItemLink('/tournaments', 'Текущие турниры'),
      this.renderNavItemLink('/rating', 'Рейтинг'),
      this.renderNavItemLink('/settings', 'Настройки')
    ];
  }

  renderPlayerMenu() {
    return [
      this.renderNavItemLink('/tournaments', 'Текущие турниры'),
      this.renderNavItemLink('/rating', 'Рейтинг')
    ];
  }

  renderAuthButton(handler, anchor) {
    return (
      <NavItem>
        <NavLink
          role="button"
          onClick={handler}
          className="cursor-pointer">
          {anchor}
        </NavLink>
      </NavItem>
    );
  }

  renderNavItemLink(to, anchor) {
    return (
      <NavItem key={to}>
        <Link className="nav-link" to={to}>{anchor}</Link>
      </NavItem>
    );
  }
}

Menu.PropTypes = {
  signedIn: PropTypes.bool.isRequired,
  isPlayerRole: PropTypes.bool.isRequired
};

Menu.defaultProps = {
  showRoleSpecificItems: true
}

function mapStateToProps(state) {
  const signedIn = state.authReducer.get('signedIn');
  const isPlayerRole = state.authReducer.get('isPlayerRole');
  return { signedIn, isPlayerRole };
}

export default withRouter(connect(mapStateToProps, actionCreators)(Menu));