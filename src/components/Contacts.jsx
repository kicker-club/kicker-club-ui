import React from 'react';
import { connect } from 'react-redux';

import resources from 'resources';

export default class Contacts extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mx-auto">Контакты</div>
    );
  }
}