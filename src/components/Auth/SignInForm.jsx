import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from 'reactstrap';

import * as actionCreators from 'actions';
import resources from 'resources';

export class SignInForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label sm={2} for="email">{resources.signInForm.email}</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="me@example.com" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="password">{resources.signInForm.password}</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="password" />
          </Col>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              checked={this.props.rememberMe}
              onChange={this.props.clickRememberMe} />
            {resources.signInForm.rememberMe}
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  const rememberMe = state.authReducer.get('rememberMe');
  return { rememberMe };
}

export default connect(mapStateToProps, actionCreators)(SignInForm);