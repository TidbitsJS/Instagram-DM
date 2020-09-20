import React, { Component } from "react";
import "./user.css";

export class User extends Component {
  render() {
    return (
      <div className="user">
        <div className="profile"></div>
        <div className="info">
          <div className="name">tidbits.js</div>
          <div className="about">
            Sent a message <span>.3h</span>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
