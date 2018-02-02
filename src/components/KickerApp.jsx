import React from 'react';
import { connect } from 'react-redux';
import { Button, Jumbotron } from 'reactstrap';

class KickerApp extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello Kicker Club!</h1>
        <Jumbotron>
          <h1 className="display-3">Reactstrap Jumbotron!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Do nothing!</Button>{' '}
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default KickerApp;