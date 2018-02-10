import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardDeck,
  Button
} from 'reactstrap';

import * as actionCreators from 'action-creators/auth';
import resources from 'resources';

export class Advantages extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="display-3 text-center">{resources.advantages.title}</h1>
        <CardDeck>
          <Card>
            <CardBody>
              <CardTitle>{resources.advantages.ratingCard.title}</CardTitle>
              <CardSubtitle>{resources.advantages.ratingCard.subtitle}</CardSubtitle>
              <CardText>{resources.advantages.ratingCard.description}</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top src="/img/card-image.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>{resources.advantages.tournamentsCard.title}</CardTitle>
              <CardText>{resources.advantages.tournamentsCard.description}</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>{resources.advantages.accessToTournamentCard.title}</CardTitle>
              <CardText>{resources.advantages.accessToTournamentCard.description}</CardText>
              <Button onClick={this.props.toggleSignUpForm}>{resources.signUp}</Button>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default connect(null, actionCreators)(Advantages);