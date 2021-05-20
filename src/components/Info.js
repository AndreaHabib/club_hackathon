import React, { Component } from "react";
import "./styles/Info.css";

export default class Info extends Component {
  render() {
    return (
      <div>
        <i className="fas fa-envelope fa-3x">
          {"  "}
          <h2>hackaprojectcsi@gmail.com</h2>
        </i>
        <hr style={{ color: "#7289da" }}></hr>
        <div className="social">
          <span style={{ marginRight: "20px" }}>
            <a
              href="https://github.com/Hack-A-Project"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
          </span>
          <span style={{ marginRight: "20px" }}>
            <a
              href="https://www.linkedin.com/in/hack-a-project/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
          </span>
          <span style={{ marginRight: "20px" }}>
            <a
              href="https://www.instagram.com/hack_a_project/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-3x"></i>
            </a>
          </span>
        </div>
      </div>
    );
  }
}
