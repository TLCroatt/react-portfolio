import React from 'react';
import { Link } from "react-router-dom"
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./style.css"

const Hero = () => {
    return(
    
        <div className="hero-image">
            <Nav className="justify-content-center" activeKey="/home">
                <NavItem className="nav-item">
                    <NavLink className="nav-link" tag={Link} to="/about">About Me</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className="nav-link" tag={Link} to="/portfolio">My Work</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className="nav-link" tag={Link} to="/contact">Contact Me</NavLink>
                </NavItem>
            </Nav>
            <div className="hero-text">
                <h1 className="hero-title">I am Trisha Croatt</h1>
                <p>I'm a full stack web developer based in Colorado.</p>
            </div>
        </div>
    )
}

export default Hero;