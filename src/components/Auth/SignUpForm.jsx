import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

import * as actionCreators from 'actions';
import resources from 'resources';

export class SignUpForm extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="club">{resources.signUpForm.clubName}</Label>
          <Input type="text" name="club" id="club" />
        </FormGroup>
        <FormGroup>
          <Label for="username">{resources.signUpForm.username}</Label>
          <Input type="text" name="username" id="username" />
        </FormGroup>
        <FormGroup>
          <Label for="email">{resources.signUpForm.email}</Label>
          <Input type="email" name="email" id="email" placeholder="me@example.com" />
        </FormGroup>
        <FormGroup>
          <Label for="password">{resources.signUpForm.password}</Label>
          <Input type="password" name="password" id="password" />
        </FormGroup>
        <FormGroup>
          <Label for="password">{resources.signUpForm.repeatPassword}</Label>
          <Input type="password" name="repeat-password" id="repeat-password" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              checked={this.props.subscribeToNews}
              onChange={this.props.clickSubscribeToNews} />
            {resources.signUpForm.subscribeToNews}
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  const subscribeToNews = state.authReducer.get('subscribeToNews');
  return { subscribeToNews };
}

export default connect(mapStateToProps, actionCreators)(SignUpForm);