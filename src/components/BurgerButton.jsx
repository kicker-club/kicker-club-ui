import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from 'action-creators/menu';
import resources from 'resources';

export class BurgerButton extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="burger cursor-pointer" onClick={this.props.openMobileMenu}>
        <div className="navbar-toggler-icon"></div>
      </div>
    );
  }
}

export default connect(null, actionCreators)(BurgerButton);