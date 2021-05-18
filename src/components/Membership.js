import React, { Component } from "react";
import "./styles/Membership.css";
import network from "./assets/network.svg";
import events from "./assets/calender.svg";
import resources from "./assets/resources.svg";

export default class Membership extends Component {
  render() {
    return (
      <div className="membership">
        <h2>
          <strong>Membership Benefits</strong>
        </h2>
        <div className="row">
          <div className="box">
            <img className="icons" src={network} alt="network" />
            <h2 className="header">Professional Network</h2>
            <p className="description">
              Increase your professional network on linkedin by connecting with
              members in our club!
            </p>
          </div>
          <div className="box">
            <img className="icons" src={events} alt="events" />
            <h2 className="header">Events & Activities</h2>
            <p className="description">
              We will be planning many events such as hackathons, and workshops,
              and other mini events as well!
            </p>
          </div>
          <div className="box">
            <img className="icons" src={resources} alt="resources" />
            <h2 className="header">Resources</h2>
            <p className="description">
              Our club will be providing a lot of resources and guidance to help
              you on your journey of developing!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
