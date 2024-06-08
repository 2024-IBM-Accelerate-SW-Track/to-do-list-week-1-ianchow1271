import React, { Component } from "react";
import "./About.css";
import pfp from "../assets/pfp.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src = {pfp}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Ian Chow</div>
              <div className="brief_description">
                Hi, My name is Ian Chow and I am a rising junior at Cal Poly Pomona studying computer science. I love to go to the gym and play basketball
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
