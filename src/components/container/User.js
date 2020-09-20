import React, { Component } from "react";

export class User extends Component {
  render() {
    return (
      <div className="user">
        <div className="profile"></div>
        <div className="info">
          <div className="name"></div>
          <div className="about"></div>
        </div>
      </div>
    );
  }
}

export default User;
