import React, { Component } from "react";
import "../styles/Footer.css";

export default class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <div>
        <footer id="footer">
          <p>&copy; Copyright {year} HACK-A-PROJECT</p>
        </footer>
      </div>
    );
  }
}
