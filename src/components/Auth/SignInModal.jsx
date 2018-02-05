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

import * as actionCreators from 'actions';
import resources from 'resources';
import SignInForm from './SignInForm';

const propTypes = {
  signInIsOpened: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
  toggleSignInForm: PropTypes.func.isRequired
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
          toggle={this.props.toggleSignInForm}
          size="lg">
          <ModalHeader toggle={this.props.toggleSignInForm}>{resources.signInForm.title}</ModalHeader>
          <ModalBody>
            <SignInForm />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.signIn}>{resources.signIn}</Button>
            <Button color="secondary" onClick={this.props.toggleSignInForm}>{resources.cancel}</Button>
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