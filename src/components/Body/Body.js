import React, { Component } from "react";
import "./body.css";

export class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="messages"></div>
        <div className="void"></div>
      </div>
    );
  }
}

export default Body;
