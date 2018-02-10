import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import SignInAs from './SignInAs';
import SignInAsPlayerForm from './SignInAsPlayerForm';
import SignInAsAdminForm from './SignInAsAdminForm';
import * as actionCreators from 'action-creators/auth';
import resources from 'resources';

const propTypes = {
  signInFormIsShown: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
  showSignInForm: PropTypes.func.isRequired,
  hideSignInForm: PropTypes.func.isRequired
};

export class SignInModal extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.signInFormIsShown}
          toggle={this.props.hideSignInForm}
          size="lg">
          <ModalHeader toggle={this.props.hideSignInForm}>
            {resources.signInForm.title}
          </ModalHeader>
          <ModalBody>
            <SignInAs />
            {this.props.isPlayerRole ? <SignInAsPlayerForm /> : <SignInAsAdminForm />}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.signIn(this.props.history)}>
              {resources.signIn}
            </Button>
            <Button color="secondary" onClick={this.props.hideSignInForm}>
              {resources.cancel}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

SignInModal.propTypes = propTypes;

function mapStateToProps(state) {
  const signInFormIsShown = state.authReducer.get('signInFormIsShown');
  const isPlayerRole = state.authReducer.get('isPlayerRole');
  return { signInFormIsShown, isPlayerRole };
}

export default withRouter(connect(mapStateToProps, actionCreators)(SignInModal));