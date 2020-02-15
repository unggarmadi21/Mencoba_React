import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import "./Jumb.css";

function Jumb() {
  return (
    <Jumbotron className="container mt-5 bg-primary">
      <h1 className="">Getting Started</h1>
      <p>
        This guide will help you get up and running with the kit. Once you have
        it working, take a look at the examples page to see what you can make.
      </p>
      <p>
        <Button variant="light" className="text">
          Sign Up >
        </Button>
      </p>
      <p>
        <a className="mt-5">Use it as a library ></a>
      </p>
      <p>
        <a className="mt-3">Use it as a file ></a>
      </p>
    </Jumbotron>
  );
}
export default Jumb;
