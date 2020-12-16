import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ProfilePic from "../components/assets/ProfilePic.jpg"
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/index";
import "../App.css";

const About = () => {
    return (
        <div>
        <Hero />
        <Container className="container">
            <h1>About Me</h1>
            <hr />
           <Row>
               <Col md="6">
                   <Image className="profile-pic" src={ProfilePic} alt="Trisha Croatt" style={{
                       height: 300,
                       width: 250
                   }} thumbnail />
                </Col>
                <Col md="6">
                    <div className="bio">
                        <h5>Hi! I'm Trisha, a web developer based in Colorado Springs.</h5>
                        <p>I received a full-stack developer certificate from the University of Denver. I have an eye for design and love building in React. I also enjoy backend database work, and I am eager to continue building my skills. I'm a lifelong learner and am quick to absorb new material. In my free time, I write speculative fiction under the name Trisha Lea. When not wrangling code, I wrangle two kids, two cats, and house dingo (aka Australian cattle dog mix).
                        </p>
                    </div>  
                </Col>
            </Row>
            <Row>
                <Col md="4"></Col>
                <Col md="4">
                <h2>Skills</h2>
                </Col>
                <Col md="4"></Col>
            </Row>
            <hr />
            <Row>
                <Col md="3"></Col>
                <Col md="3">
                    <ul>
                        <li>JavaScript(ES6)</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS/Flexbox/Foundation</li>
                        <li>Bootstrap</li>
                        <li>AJAX</li>
                        <li>JQuery</li>
                    </ul>
                </Col>
                <Col md="1"></Col>
                <Col md="3">   
                    <ul>   
                        <li>NodeJS</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Git</li>
                    </ul>
                </Col>  
            </Row>
            <hr />
           </Container>
           <Footer />
        </div>   
    )
}

export default About;