import  React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Resume from "../components/assets/Resume.pdf";

function Contact () {
    
    function changeColor(e) {
        e.target.style.color = "blue";
    }

    function revert(e) {
        e.target.style.color = "black";
    }

    return (
        <Container className="contact">
             <h1>Contact</h1>
             <hr />
            <Row>
                <Col md="4"></Col>
                <Col md="4">
                    <h3><a href="mailto:trishacroatt@gmail.com">Email Me!</a></h3>
                </Col>
            </Row>
            <Row>
                <Col md="4"></Col>
                <Col md="4">
                <Button onClick={() => window.open(Resume)}>Resume</Button>
                </Col>
            </Row>
            <Row className="social">
                <Col md="4" />
                <Col md="4" className="social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" onMouseOver={changeColor} onMouseLeave={revert} onClick={() => window.open("https://www.linkedin.com/in/trisha-croatt84/")}/>  
                <FontAwesomeIcon icon={faGithub} size="2x" onMouseOver={changeColor} onMouseLeave={revert} onClick={() => window.open("https://github.com/TLCroatt")}/>
                <FontAwesomeIcon icon={faTwitter} size="2x" onMouseOver={changeColor} onMouseLeave={revert} onClick={() => window.open("https://twitter.com/CroattTrisha")}/>
                </Col>
                <Col md="4" />
            </Row>
        </Container>
    )
}

export default Contact;