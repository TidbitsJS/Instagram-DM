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
              <h3>Primary</h3>
            </div>
            <div className="requests">
              <h3>Requests (30)</h3>
            </div>
          </div>

          <User />
        </div>
        <div className="void">
          <Message />
        </div>
      </div>
    );
  }
}

export default Body;
