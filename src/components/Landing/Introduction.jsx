import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import resources from '../../resources';

export default class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron>
                <h1 className="display-3">{resources.intro.title}</h1>
                <p className="lead">{resources.intro.largeDescription}</p>
                <p>{resources.intro.smallDescription}</p>
                <p className="lead">
                    <Button color="primary btn-lg">{resources.signUp}</Button>
                </p>
            </Jumbotron>
        );
    }
}