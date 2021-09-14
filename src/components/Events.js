import React from "react";
import "./styles/Events.css";

export default function Events() {
  return (
    <div id="events">
      <h1 className="header">
        <strong>Events</strong>
      </h1>
      <div className="events">
        <div className="event">
          <img
            className="event_img"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1627328388/Untitled_design_psaoo7.png"
            alt="hackcsi"
          />
          <div className="info">
            <p className="title">HackCSI</p>
            <p className="description">
              A chill hackathon where CSI students can work togther on a
              project!
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <i class="far fa-calendar-alt fa-1x"></i>
              <p>Sept 3, 2021</p>
            </div>
            <div>
              <span className="chip">Online</span>
              <span className="chip">Hackathon</span>
            </div>
            <a
              className="moreinfo"
              rel="noreferrer noopener"
              target="_blank"
              href="https://hackcsi.devpost.com/project-gallery"
              disabled
            >
              View The Winners
            </a>
          </div>
        </div>
        <div className="event">
          <img
            className="event_img"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1631628427/Introduction_to_unpho6.gif"
            alt="hackcsi"
          />
          <div className="info">
            <p className="title">React Workshop</p>
            <p className="description">A workshop on React.js</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <i class="far fa-calendar-alt fa-1x"></i>
              <p>Sept 17, 2021</p>
            </div>
            <div>
              <span className="chip">Online</span>
              <span className="chip">Workshop</span>
            </div>
            <a
              className="disabled"
              rel="noreferrer"
              target="_blank"
              href="https://hackcsi.netlify.app/"
              disabled
            >
              Zoom Link will be provided
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
