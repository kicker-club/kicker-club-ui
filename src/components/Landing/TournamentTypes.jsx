import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Row,
    Col } from 'reactstrap';
import resources from '../../resources';

export default class TournamentTypes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const textStub = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;

        return (
            <div className="tournament-types">
                <h1 className="text-center">{resources.tournamentTypes}</h1>
                <Row>
                    <Col md="4" xs="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">Tournament type 1</CardTitle>
                                <CardText>{textStub}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" xs="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">Tournament type 2</CardTitle>
                                <CardText>{textStub}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" xs="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">Tournament type 3</CardTitle>
                                <CardText>{textStub}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="4" xs="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">Tournament type 4</CardTitle>
                                <CardText>{textStub}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" xs="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">Tournament type 5</CardTitle>
                                <CardText>{textStub}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" xs="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">Tournament type 6</CardTitle>
                                <CardText>{textStub}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 4, offset: 2}} xs="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">Tournament type 7</CardTitle>
                                <CardText>{textStub}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={{ size: 4 }} xs="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">Tournament type 8</CardTitle>
                                <CardText>{textStub}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}