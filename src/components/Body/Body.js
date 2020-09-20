import React, { Component } from "react";
import "./body.css";
import Message from "../container/Message.js";

export class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="messages"></div>
        <div className="void">
          <Message />
        </div>
      </div>
    );
  }
}

export default Body;
