import React, { Component } from "react";
import "./header.css";
import data from "../../Data/Data";

export class Header extends Component {
  render() {
    const creator = data[14];
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
          <div className="avatar">
            <img
              src={creator.profile_pic}
              alt={creator.name}
              style={{ width: "100%", height: "100%", borderRadius: "100%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
