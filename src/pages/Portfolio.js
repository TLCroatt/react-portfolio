import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "../components/Nav/index";
import Projects from "../components/Projects";
import CCYA from "../components/assets/CCYA.png";
import WeatherDash from "../components/assets/WeatherDash.png";
import NearBeer from "../components/assets/NearBeer.png";
import EatDaBurger from "../components/assets/EatDaBurger.png";
import WatchThis from "../components/assets/WatchThis.png";
import BudgetTracker from "../components/assets/BudgetTracker.png";
import Footer from "../components/Footer/index";


function Portfolio() {

    return (
        <div>
        <Navigation />
            <Container>
                <h1>Portfolio</h1>
                <hr />
                <Row>
                    <Col md="4">
                        <Projects
                            name="Commerce City Youth Athletics"
                            content="React site with MongoDB for non-profit youth sports club."
                            img={CCYA}
                            gitHub="https://github.com/TLCroatt/ccya"
                        />
                    </Col>
                    <Col md="4">
                        <Projects
                            name="Watch This!"
                            content="Make a meta-watchlist for all the shows and movies on any streaming service."
                            img={WatchThis}
                            gitHub="https://github.com/gpardington/WatchThis"
                        />
                    </Col>
                    <Col md="4">
                        <Projects
                            name="Near Beer"
                            content="Search for up to ten breweries by city, zip code, or brewery name."
                            img={NearBeer}
                            gitHub="https://github.com/mrmathews08/Near-Beer"
                        />
                    </Col>
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col md="4">
                        <Projects
                            name="Eat-Da-Burger"
                            content="An app using a made-from-scratch ORM to link with a MYSQL database using the MVC model."
                            img={EatDaBurger}
                            gitHub="https://github.com/TLCroatt/Eat-Da-Burger"
                        />
                    </Col>
                    <Col md="4">
                        <Projects
                            name="Weather Dashboard"
                            content="Get up to date weather conditions by city search, including five day forecast."
                            img={WeatherDash}
                            gitHub="https://github.com/TLCroatt/WeatherDashboard"
                        />
                    </Col>
                    <Col md="4">
                        <Projects
                            name="Budget Tracker"
                            content="Keep track of transactions while offline by storing in IndexDB, then added to MongoDB when reconnected."
                            img={BudgetTracker}
                            gitHub="https://github.com/TLCroatt/Budget-Tracker"
                        />
                    </Col>
                </Row>
            </Container>
            <hr />
            <Footer />
            </div>
    
    )
}

export default Portfolio;