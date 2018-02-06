import React from 'react';
import { Jumbotron } from 'reactstrap';

import resources from 'resources';

export default class HowItWorks extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="display-3 text-center">{resources.howItWorks.title}</h1>
        <Jumbotron>
          <p className="lead">{resources.howItWorks.description}</p>
        </Jumbotron>
      </div>
    );
  }
}