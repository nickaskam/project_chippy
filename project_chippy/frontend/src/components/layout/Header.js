import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              <Link to="/form">Add New Event</Link>
            </li>
            <li>
              <Link to="/events">Events List</Link>
            </li>
            <li>
              <Link to="/shortlist">Short List</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
