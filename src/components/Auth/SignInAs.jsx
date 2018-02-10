import React from 'react';
import {
  Col,
  Button,
  FormGroup,
  Label,
} from 'reactstrap';
import { connect } from 'react-redux';
import Switch from 'react-switch'
import PropTypes from 'prop-types';

import * as actionCreators from 'action-creators/auth';
import resources from 'resources';

const propTypes = {
  changeRole: PropTypes.func.isRequired,
  isPlayerRole: PropTypes.bool.isRequired
};

export class SignInAs extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const commonIcon = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      position: 'absolute',
      fontSize: 16,
      color: "white"
    };

    const checkedIcon = (
      <div style={Object.assign({}, commonIcon, { right: 0 })}>Игрок</div>
    );

    const uncheckedIcon = (
      <div style={Object.assign({}, commonIcon, { right: '5px' })}>Админ</div>
    );

    return (
      <FormGroup row>
        <Label sm={2} for="switch">Войти как</Label>
        <Col sm={10} className="align-self-center">
          <Switch
            onChange={this.props.changeRole}
            checked={this.props.isPlayerRole}
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            activeBoxShadow="0px 0px 2px 3px #95a5a6"
            onColor="#2C3E50"
            offColor="#18BC9C"
            width={90}
            height={35}
            id="switch"/>
        </Col>
      </FormGroup>
    );
  }
}

SignInAs.propTypes = propTypes;

function mapStateToProps(state) {
  const isPlayerRole = state.authReducer.get('isPlayerRole');
  return { isPlayerRole };
}

export default connect(mapStateToProps, actionCreators)(SignInAs);