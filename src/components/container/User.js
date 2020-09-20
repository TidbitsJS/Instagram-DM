import React, { Component } from "react";
import "./user.css";
import data from "../../Data/Data";

export class User extends Component {
  render() {
    return data.map((user, index) => (
      <div className="user" key={index}>
        <div className="profile">
          <img src={user.profile_pic} alt={user.name} />
        </div>
        <div className="info">
          <div className="name">
            <p>{user.name}</p>
          </div>
          <div className="about">
            <p>
              Sent a message{" "}
              <span style={{ color: "grey" }}>
                .{Math.floor(Math.random() * 24 + 1)}h
              </span>
            </p>
          </div>
        </div>
      </div>
    ));
  }
}

export default User;
