import React from 'react';
import {
  Button,
  FormGroup,
  Label,
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Switch from 'react-switch'
import PropTypes from 'prop-types';

import * as actionCreators from 'action-creators';
import resources from 'resources';
import SignInForm from './SignInForm';

export class SignInAs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  render() {
    return (
      <FormGroup row>
        <Label sm={2} for="password">Войти как</Label>
        <Switch
          checkedIcon={<div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            position: 'absolute',
            right: 0,
            fontSize: 16,
            color: "white"
          }}>Игрок</div>}
          uncheckedIcon={<div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            position: 'absolute',
            right: '5px',
            fontSize: 16,
            color: "white"
          }}>Админ</div>}
          activeBoxShadow="0px 0px 2px 3px #18BC9C"
          onColor="#2C3E50"
          offColor="#95a5a6"
          width={90}
          height={35}
          onChange={()=>{ this.setState( { checked: !this.state.checked })}}
          checked={this.state.checked}
          className="col"/>
      </FormGroup>
    );
  }
}

export default SignInAs;