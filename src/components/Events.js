import React from "react";
import "./styles/Events.css";

export default function Events() {
  return (
    <div id="events">
      <h1 className="header">
        <strong>Events</strong>
      </h1>
      <div className="events">
        <span className="event">
          <img
            id="hackcsi"
            alt="hackcsi"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1627328388/Untitled_design_psaoo7.png"
          />

          <div className="info">
            <p>HackCSI</p>
            <hr style={{ border: "1px solid #282c34", width: "80%" }}></hr>
            <p style={{ width: "60%" }}>
              A chill hackathon where CSI students can work togther on a
              project!
            </p>
            <a
              className="moreinfo"
              rel="noreferrer"
              target="_blank"
              href="https://hackcsi.netlify.app/"
            >
              More Info
            </a>
          </div>
        </span>
      </div>
    </div>
  );
}
