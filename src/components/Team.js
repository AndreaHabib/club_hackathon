import React, { Component } from "react";
import "./styles/Team.css";

export default class Team extends Component {
  render() {
    return (
      <div className="team">
        <h1 className="header">Officers</h1>
        <div className="row">
          <span>
            <p className="name">Andrea Habib</p>
          </span>
          <span>
            <p className="name">Cheng Wei Wang</p>
          </span>
          <span>
            <p className="name">Derrick Chow</p>
          </span>
          <span>
            <p className="name">Jonathan Leibovici</p>
          </span>
        </div>
        <h1 className="header">Committees</h1>
        <div className="row">
          <span>
            <p className="name">Abdelrahman Elsayed</p>
          </span>
          <span>
            <p className="name">Gabriel Khalfin</p>
          </span>
          <span>
            <p className="name">Melchizedek Tetteh</p>
          </span>
          <span>
            <p className="name">Nicholas Palermo</p>
          </span>
        </div>
      </div>
    );
  }
}
