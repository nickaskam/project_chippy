import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">Project Chippy</a>
            </li>
            <li>
              <a href="#">Add New Event</a>
            </li>
            <li>
              <a href="#">Events List</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
