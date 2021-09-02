import React, { Component } from "react";
import "./styles/Membership.css";
import network from "./assets/network.svg";
import events from "./assets/calender.svg";
import member from "./assets/member.svg";
import resources from "./assets/resources.svg";

export default class Membership extends Component {
  render() {
    return (
      <div
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="400"
        data-aos-easing="ease-out"
      >
        <div className="membership">
          <h1 className="header">
            <strong>Membership Benefits</strong>
          </h1>
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
          <div>
            <h1 className="info">
              For more information about the club: <br></br>
              <a
                className="ref"
                href="https://csi.campuslabs.com/engage/organization/hack_a_project"
                target="_blank"
                rel="noreferrer"
              >
                CSI Connect
              </a>
            </h1>
          </div>
          <hr
            align="center"
            style={{ color: "#7289da", width: "80%", margin: "auto" }}
          ></hr>
          <div className="team">
            <h1 className="header">
              <strong>Officers</strong>
            </h1>
            <div className="row">
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/andrea-habib-730941198/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="member_image"
                    src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/backup_aurk3d.jpg"
                    alt="member"
                  />
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
                  <img
                    className="member_image"
                    src="https://res.cloudinary.com/andreahabib/image/upload/v1623167463/club_website/image0_q5dydw.jpg"
                    alt="member"
                  />
                  <p className="name">Jonathan Leibovici</p>
                  <small>Treasurer</small>
                </a>
              </div>
            </div>
            <h1 className="header">
              <strong>Committees</strong>
            </h1>
            <div className="row">
              <div className="box">
                <a
                  href="https://www.linkedin.com/in/abdel-elsayed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="member_image"
                    src="https://res.cloudinary.com/andreahabib/image/upload/v1623167487/club_website/IMG_1072_arvptj.jpg"
                    alt="member"
                  />
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
                  <img
                    className="member_image"
                    src="https://res.cloudinary.com/andreahabib/image/upload/v1623167457/club_website/image0_1_oi78oa.jpg"
                    alt="member"
                  />
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
            <div>
              <i class="fas fa-user fa-3x"></i>
              <h1 className="members-amount">And 50+ amazing members!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
