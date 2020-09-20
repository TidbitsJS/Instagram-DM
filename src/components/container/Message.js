import React, { Component } from "react";
import "./message.css";

export class Message extends Component {
  render() {
    return (
      <div className="content">
        <div className="big-icon">
          <i className="fas fa-cloud"></i>
        </div>
        <div className="text">
          <h2>Your Message</h2>
          <p>Send private photos and messages to a friend or group.</p>
        </div>
        <div className="btn">
          <button> Send Message</button>
        </div>
      </div>
    );
  }
}

export default Message;
