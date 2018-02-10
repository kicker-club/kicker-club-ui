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

import * as actionCreators from 'action-creators/auth';
import resources from 'resources';

const propTypes = {
  clubName: PropTypes.string.isRequired,
  clubPassword: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  changeClubName: PropTypes.func.isRequired,
  changeClubPassword: PropTypes.func.isRequired,
  changeRememberMe: PropTypes.func.isRequired
};

export class SignInAsPlayerForm extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label sm={2} for="club-name">Имя клуба</Label>
          <Col sm={10} className="align-self-center">
            <Input
              type="text"
              name="club-name"
              id="club-name"
              value={this.props.clubName}
              onChange={(event) => this.props.changeClubName(event.target.value)} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="club-password">Пароль клуба</Label>
          <Col sm={10} className="align-self-center">
            <Input
              type="password"
              name="club-password"
              id="club-password"
              value={this.props.clubPassword}
              onChange={(event) => this.props.changeClubPassword(event.target.value)} />
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

SignInAsPlayerForm.propTypes = propTypes;

function mapStateToProps(state) {
  const rememberMe = state.authReducer.get('rememberMe');
  const clubName = state.authReducer.get('clubName');
  const clubPassword = state.authReducer.get('clubPassword');
  return { rememberMe, clubName, clubPassword };
}

export default connect(mapStateToProps, actionCreators)(SignInAsPlayerForm);