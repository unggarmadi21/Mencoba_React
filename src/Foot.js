import React from "react";
import "./App.css";
import { Navbar, Container, Row, Col, Card, Button } from "react-bootstrap";

function Head() {
  return (
    <Container className="container-fluid">
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>IT SOLUTION</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Col>
          <p>Bantuan</p>
        </Col>
        <Col>
          <p>{" Service "}</p>
        </Col>
        <Col>
          <p>
            <ul>Contact</ul>
          </p>
        </Col>
      </Row>
      <Navbar expand="sm" variant="light" bg="">
        <p className="align-center">
          © 2019 - 2020 IT SOLUTION • All rights reserved • Love from Jakarta
        </p>
      </Navbar>
    </Container>
  );
}
export default Head;
