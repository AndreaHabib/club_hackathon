import React, { Component } from "react";
import "./styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="mission">
        <h2 className="title">Our Mission</h2>
        <p className="quote">
          Our mission is to provide a space and community where fellow CSI
          students can be inspired to explore different projects in the Computer
          Science field as well as external events, and competitions to provide
          meaningful professional experience and encourage members to explore a
          diversity of tech-fields and increase your professional network.{" "}
        </p>
      </div>
    );
  }
}
