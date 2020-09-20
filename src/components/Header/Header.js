import React, { Component } from "react";

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
        <div className="icons"></div>
      </div>
    );
  }
}

export default Header;
