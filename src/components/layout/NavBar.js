import React, { Component } from "react";
import "../styles/NavBar.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  render() {
    return (
      <Nav className="nav">
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
          <Link to="contact" spy={true} delay={false}>
            <Nav.Link
              className="option"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://forms.gle/P9j5z97R1hqAHyPo9"
            target="_blank"
            rel="noreferrer"
            className="option"
            style={{ color: "white", textDecoration: "none" }}
          >
            Join Now!
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
