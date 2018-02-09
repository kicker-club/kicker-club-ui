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
import * as actionCreators from 'action-creators';
import resources from 'resources';

const propTypes = {
  signInIsOpened: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
  toggleSignInFormVisibility: PropTypes.func.isRequired
};

export class SignInModal extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.signInIsOpened}
          toggle={this.props.toggleSignInFormVisibility}
          size="lg">
          <ModalHeader toggle={this.props.toggleSignInFormVisibility}>
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
            <Button color="secondary" onClick={this.props.toggleSignInFormVisibility}>
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
  const signInIsOpened = state.authReducer.get('signInIsOpened');
  const isPlayerRole = state.authReducer.get('isPlayerRole');
  return { signInIsOpened, isPlayerRole };
}

export default withRouter(connect(mapStateToProps, actionCreators)(SignInModal));