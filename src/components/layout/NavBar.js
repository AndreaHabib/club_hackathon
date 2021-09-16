import React, { Component } from "react";
import "../styles/NavBar.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

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
        <Nav.Item>
          <div
            className="option"
            style={{ width: "70px", height: "35px", marginTop: "10px" }}
          >
            <RouterLink
              to="/hacks"
              style={{ color: "white", textDecoration: "none", marginTop: 90 }}
            >
              Hacks
            </RouterLink>
          </div>
        </Nav.Item>
      </Nav>
    );
  }
}
