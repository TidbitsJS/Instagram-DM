import React, { Component } from "react";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <div className="heading">
        <div className="logo">
          <h2>Instagram</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="icons">
          <i className="fas fa-home"></i>
          <i className="fas fa-paper-plane"></i>
          <i className="fas fa-compass"></i>
          <i className="fas fa-heart"></i>
          <div className="avatar"></div>
        </div>
      </div>
    );
  }
}

export default Header;
