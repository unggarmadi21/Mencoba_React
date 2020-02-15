import React from "react";
import "./Head.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

function Head() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#home" className="head">
        <h1>IT SOLUTION</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features" className="align-self-center ">
            Features
          </Nav.Link>
          <Nav.Link href="#pricing" className="align-self-center ">
            Pricing
          </Nav.Link>
          <Nav.Link href="#produk" className="align-self-center ">
            Produk
          </Nav.Link>
          <Button href="#deets" variant="success" className="ml-2">
            Sign In
          </Button>
          <Button href="#deets" variant="warning" className="ml-2">
            Sign Up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Head;
