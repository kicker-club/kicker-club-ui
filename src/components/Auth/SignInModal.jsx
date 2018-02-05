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
import SignInForm from './SignInForm';

const propTypes = {
  signInIsOpened: PropTypes.bool.isRequired,
  switchSignIn: PropTypes.func.isRequired
};

export class SignInModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.signInIsOpened}
          toggle={this.props.switchSignIn}
          size="lg">
          <ModalHeader toggle={this.props.switchSignIn}>{resources.signInForm.title}</ModalHeader>
          <ModalBody>
            <SignInForm />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.switchSignIn}>{resources.signIn}</Button>
            <Button color="secondary" onClick={this.props.switchSignIn}>{resources.cancel}</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

SignInModal.propTypes = propTypes;

function mapStateToProps(state) {
  const signInIsOpened = state.authReducer.get('signInIsOpened');
  return { signInIsOpened };
}

export default connect(mapStateToProps, actionCreators)(SignInModal);