import React, { Component } from "react";
import "../styles/NavBar.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  render() {
    return (
      <Nav className="justify-content-center nav">
        <Nav.Item>
          <Link to="about" spy={true} delay={false}>
            <Nav.Link
              className="option"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="team" spy={true} delay={false}>
            <Nav.Link
              className="option"
              style={{ color: "white", textDecoration: "none" }}
            >
              Team
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="contact" spy={true} delay={false}>
            <Nav.Link
              className="option"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
    );
  }
}
