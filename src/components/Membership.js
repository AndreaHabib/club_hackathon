import React, { Component } from "react";
import "./styles/Membership.css";
import network from "./assets/network.svg";
import events from "./assets/calender.svg";
import member from "./assets/member.svg";
import resources from "./assets/resources.svg";

export default class Membership extends Component {
  render() {
    return (
      <div>
        <div className="membership">
          <h2>
            <strong>Membership Benefits</strong>
          </h2>
          <div className="row">
            <div className="box">
              <img className="icons" src={network} alt="network" />
              <h2 className="header">Professional Network</h2>
              <p className="description">
                Increase your professional network on linkedin by connecting
                with members in our club!
              </p>
            </div>
            <div className="box">
              <img className="icons" src={events} alt="events" />
              <h2 className="header">Events & Activities</h2>
              <p className="description">
                We will be planning many events such as hackathons, and
                workshops, and other mini events as well!
              </p>
            </div>
            <div className="box">
              <img className="icons" src={resources} alt="resources" />
              <h2 className="header">Resources</h2>
              <p className="description">
                Our club will be providing a lot of resources and guidance to
                help you on your journey of developing!
              </p>
            </div>
          </div>
          <div className="team">
            <h1 className="header">Officers</h1>
            <div className="row">
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/andrea-habib-730941198/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="member_image" src={member} alt="member" />
                  <p className="name">Andrea Habib</p>
                  <small>President</small>
                </a>
              </div>
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/chengwang5336/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="member_image" src={member} alt="member" />
                  <p className="name">Cheng Wei Wang</p>
                  <small>Vice President</small>
                </a>
              </div>
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/derrick-chow-0a32/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="member_image" src={member} alt="member" />
                  <p className="name">Derrick Chow</p>
                  <small>Secretary</small>
                </a>
              </div>
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/jonathan-leibovici-25a76992/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="member_image" src={member} alt="member" />
                  <p className="name">Jonathan Leibovici</p>
                  <small>Treasurer</small>
                </a>
              </div>
            </div>
            <h1 className="header">Committees</h1>
            <div className="row">
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/abdel-elsayed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="member_image" src={member} alt="member" />
                  <p className="name">Abdelrahman Elsayed</p>
                  <small>Workshop Committee</small>
                </a>
              </div>
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/gabriel-khalfin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="member_image" src={member} alt="member" />
                  <p className="name">Gabriel Khalfin</p>
                  <small>Hackathon Committee</small>
                </a>
              </div>
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/melchizedek-tetteh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="member_image" src={member} alt="member" />
                  <p className="name">Melchizedek Tetteh</p>
                  <small>Project Committee</small>
                </a>
              </div>
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/nicholas-palermo-cs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="member_image" src={member} alt="member" />
                  <p className="name">Nicholas Palermo</p>
                  <small>Social Media Committee</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
