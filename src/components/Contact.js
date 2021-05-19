import React, { Component } from "react";
import Form from "./Form";
import Info from "./Info";
import "./styles/Contact.css";
import flame from "./assets/flame-success.png";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact">
        <h1 className="header">
          <strong>Contact Us</strong>
        </h1>
        <div className="row">
          <div className="box">
            <Form />
          </div>
          <div className="box">
            <Info />
          </div>
        </div>
        <img className="flame" src={flame} alt="flame" />
        <h1 className="join-now">
          What are you waiting for? <br></br>
          <a
            className="ref"
            href="https://forms.gle/P9j5z97R1hqAHyPo9"
            target="_blank"
            rel="noreferrer"
          >
            Join us Now!
          </a>
        </h1>
      </div>
    );
  }
}
