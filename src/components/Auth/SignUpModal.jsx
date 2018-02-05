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

import * as actionCreators from '../../action-creator';
import resources from '../../resources';
import SignUpForm from './SignUpForm';

const propTypes = {
  signUpIsOpened: PropTypes.bool.isRequired,
  switchSignUp: PropTypes.func.isRequired
};

export class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.signUpIsOpened}
          toggle={this.props.switchSignUp}
          size="lg">
          <ModalHeader toggle={this.props.switchSignUp}>{resources.signUpForm.title}</ModalHeader>
          <ModalBody>
            <SignUpForm />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.switchSignUp}>{resources.signUp}</Button>
            <Button color="secondary" onClick={this.props.switchSignUp}>{resources.cancel}</Button>
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