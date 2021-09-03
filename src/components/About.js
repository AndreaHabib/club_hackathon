import React, {useState, useEffect} from "react";
import "./styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init();

const About = () => {
  const [offsetY, setOffsetY] = useState(-1000);
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="missionContainer">
      <div
        data-aos="fade-down"
        data-aos-delay="10"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="300"
        data-aos-easing="ease-out"
        className="mission"
        id="about"
        style={{transform: `translateY(${offsetY * 0.1}px)`}}
      >
            <h2 className ="title">
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
    </div>
  );
}

export default About;