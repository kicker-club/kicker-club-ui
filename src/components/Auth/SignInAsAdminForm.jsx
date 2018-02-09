import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from 'reactstrap';

import * as actionCreators from 'action-creators';
import resources from 'resources';

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changeRememberMe: PropTypes.func.isRequired
};

export class SignInAsAdminForm extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label sm={2} for="email">{resources.signInForm.email}</Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="me@example.com"
              value={this.props.email}
              onChange={(event) => this.props.changeEmail(event.target.value)} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="password">{resources.signInForm.password}</Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="password"
              value={this.props.password}
              onChange={(event) => this.props.changePassword(event.target.value)} />
          </Col>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              checked={this.props.rememberMe}
              onChange={this.props.changeRememberMe} />
            {resources.signInForm.rememberMe}
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

SignInAsAdminForm.propTypes = propTypes;

function mapStateToProps(state) {
  const rememberMe = state.authReducer.get('rememberMe');
  const email = state.authReducer.get('email');
  const password = state.authReducer.get('password');
  return { rememberMe, email, password };
}

export default connect(mapStateToProps, actionCreators)(SignInAsAdminForm);