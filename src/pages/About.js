import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProfilePic from "../components/assets/profilePic.JPG";

const About = (props) => {
    return (
        <Container>
            <h1>About</h1>
            <hr />
           <Row>
               <Col md="6">
                   <img
                        className="img-fluid profile-pic"
                        src={ProfilePic}
                        alt="Trisha Croatt"
                    />
                </Col>
                <Col md="6">
                    <div className="bio">
                        <h5>Hi! I'm Trisha, a web developer based in Colorado.</h5>
                        <p>I received a full-stack developer certificate from the University of Denver. I have a knack for the back-end, and I am eager to continue building my skills. I'm a lifelong learner and am quick to absorb new material. In my free time, I write speculative fiction under the name Trisha Lea. When not wrangling code, I wrangle two kids, two cats, and house dingo (aka Australian cattle dog mix).
                        </p>
                        <hr />
                        <h5>Skills</h5>
                        <Col md="2">
                        <ul>
                            <li>JavaScript(ES6)</li>
                            <li>HTML</li>
                            <li>CSS/Flexbox/Foundation</li>
                            <li>Bootstrap</li>
                            <li>AJAX</li>
                            <li>JQuery</li>
                            <li>NodeJS</li>
                            <li>MySQL</li>
                            <li>Sequelize</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>Git</li>
                        </ul>
                        </Col>
                    </div>    
               </Col>
           </Row> 
        </Container>
    )
}

export default About;