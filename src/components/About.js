import React, { Component } from "react";
import "./styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="mission" id="about">
        <h2 className="title">
          <strong>Our Mission</strong>
        </h2>
        <p className="quote">
          Our mission is to provide a space and community where fellow CSI
          students can be inspired to explore{" "}
          <strong>different projects</strong> in the Computer Science field as
          well as external events, and competitions to provide meaningful{" "}
          <strong>professional experience</strong> and encourage members to
          explore a diversity of tech-fields and increase your professional
          network.{" "}
        </p>
      </div>
    );
  }
}
