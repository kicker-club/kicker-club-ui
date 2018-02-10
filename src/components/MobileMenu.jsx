import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import Menu from './Menu';
import * as actionCreators from 'action-creators/menu';

// At first I wanted to use react-burger-menu because of animation. But using scaleRotate there
// requires overflow:auto and height:100% for container. It leads to the footer rework.

export class MobileMenu extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Modal.setAppElement('.header');
  }

  render() {
    return (
      <SlidingPane
        isOpen={this.props.mobileMenuIsOpened}
        onRequestClose={this.props.hideMobileMenu}
        title={<NavbarBrand>Kicker Club</NavbarBrand>}
        from='left'
        width='300px'>
        <Navbar className="navbar-dark">
          <Menu />
        </Navbar>
      </SlidingPane>
    );
  }
}

function mapStateToProps(state) {
  const mobileMenuIsOpened = state.menuReducer.get('mobileMenuIsOpened');
  return { mobileMenuIsOpened };
}

export default withRouter(connect(mapStateToProps, actionCreators)(MobileMenu));