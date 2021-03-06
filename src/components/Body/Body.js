import React, { Component } from "react";
import "./body.css";
import Message from "../container/Message.js";
import User from "../container/User";

export class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="messages">
          <div className="top-head">
            <div className="direct">
              <h3>Direct</h3>
            </div>
            <div className="edit">
              <i className="fas fa-edit"></i>
            </div>
          </div>
          <div className="inbox-head">
            <div className="primary">
              <p>Primary</p>
            </div>
            <div className="requests">
              <p>Requests (30)</p>
            </div>
          </div>

          <div className="user-box">
            <User />
          </div>
        </div>
        <div className="void">
          <Message />
        </div>
      </div>
    );
  }
}

export default Body;
