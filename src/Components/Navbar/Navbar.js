import React from "react";
import { Navbar,Nav,NavDropdown } from "react-bootstrap";

const navbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Router</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#homr">Home</Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>

  );
};

export default navbar;