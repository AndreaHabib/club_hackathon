import React, { Component } from "react";
import hap from "./assets/HACK_CSI.svg";
import arrow from "./assets/down_arrow.svg";
import "./styles/LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${hap})` }} className="landing_page">
        <img className="down_arrow bounce" src={arrow} alt="down arrow" />
      </div>
    );
  }
}
