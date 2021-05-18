import React, { Component } from "react";
import hap from "./assets/CSI_CLUB.svg";
import arrow from "./assets/down_arrow.svg";
import "./styles/LandingPage.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default class LandingPage extends Component {
  render() {
    return (
      <div
        data-aos="fade-down"
        data-aos-delay="20"
        data-aos-duration="300"
        data-aos-easing="ease-out"
        style={{ backgroundImage: `url(${hap})` }}
        className="landing_page"
      >
        <img className="down_arrow bounce" src={arrow} alt="down arrow" />
      </div>
    );
  }
}
