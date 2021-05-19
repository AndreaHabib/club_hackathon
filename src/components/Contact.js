import React, { Component } from "react";
import Form from "./Form";
import Info from "./Info";
import "./styles/Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 className="header">Contact Us</h1>
        <div className="row">
          <div className="box">
            <Form />
          </div>
          <div className="box">
            <Info />
          </div>
        </div>
      </div>
    );
  }
}
