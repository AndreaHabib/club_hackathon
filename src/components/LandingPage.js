import React, { Component } from "react";
import hap from "./assets/CSI_CLUB.svg";
import "./styles/LandingPage.css";
import AOS from "aos";
import { Link } from "react-scroll";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Nav } from "react-bootstrap";
// ..
AOS.init();

export default class LandingPage extends Component {
  render() {
    return (
      <div
        // data-aos="fade-down"
        // data-aos-delay="20"
        // data-aos-anchor-placement="top-center"
        // data-aos-duration="200"
        // data-aos-easing="ease-out"
        style={{ backgroundImage: `url(${hap})` }}
        className="landing_page"
      >
        <Link spy={true} delay={false} to="about">
          <Nav.Link>
            <i
              className="far fa-arrow-alt-circle-down fa-3x down_arrow bounce"
              alt="down arrow"
            ></i>
          </Nav.Link>
        </Link>
      </div>
    );
  }
}
