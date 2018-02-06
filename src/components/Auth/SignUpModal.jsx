import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actionCreators from 'action-creators';
import resources from 'resources';
import SignUpForm from './SignUpForm';

const propTypes = {
  signUpIsOpened: PropTypes.bool.isRequired,
  toggleSignUpForm: PropTypes.func.isRequired
};

export class SignUpModal extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.signUpIsOpened}
          toggle={this.props.toggleSignUpForm}
          size="lg">
          <ModalHeader toggle={this.props.toggleSignUpForm}>{resources.signUpForm.title}</ModalHeader>
          <ModalBody>
            <SignUpForm />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggleSignUpForm}>{resources.signUp}</Button>
            <Button color="secondary" onClick={this.props.toggleSignUpForm}>{resources.cancel}</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

SignUpModal.propTypes = propTypes;

function mapStateToProps(state) {
  const signUpIsOpened = state.authReducer.get('signUpIsOpened');
  return { signUpIsOpened };
}

export default connect(mapStateToProps, actionCreators)(SignUpModal);