import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              {/* Home Page */}
              <a href="#">Project Chippy</a>
            </li>
            <li>
              {/* Add a new event */}
              <Link to="/form">Add New Event</Link>
            </li>
            <li>
              {/* All of the events in detail */}
              <Link to="/events">Events List</Link>
            </li>
            <li>
              {/* A list of the events only showing the name */}
              <Link to="/shortlist">Short List</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
