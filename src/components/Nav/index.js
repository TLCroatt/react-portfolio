import React, { useState } from "react";
import { Link } from "react-router-dom"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import "./style.css";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" light expand="md">
        <NavbarBrand className="navbar-brand" href="/">Trisha Croatt</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;