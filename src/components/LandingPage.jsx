import React from 'react';
import { UncontrolledCarousel, Button } from 'reactstrap';
import Header from './Landing/Header';
import Introduction from './Landing/Introduction';
import HowItWorks from './Landing/HowItWorks';
import Advantages from './Landing/Advantages';
import TournamentTypes from './Landing/TournamentTypes';
import Footer from './Landing/Footer';
import resources from '../resources';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="landing-container mx-auto">
                    <Introduction />
                    <Advantages />
                    <HowItWorks />
                    <UncontrolledCarousel items={resources.carouselImages} />
                    <TournamentTypes />
                    <Button color="primary" className="d-block mx-auto mb-5 btn-lg">
                        {resources.signUp}
                    </Button>
                </div>
                <Footer />
            </div>
        );
    }
}

export default LandingPage;