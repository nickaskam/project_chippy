import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <li>
        {/* Home Page */}
        <Link to="/">
          <img
            src={"static/images/logo.png"}
            alt="Project Chippy"
            height="150"
            width="150"
          />
        </Link>
      </li>
    );

    const userLinks = (
      <Fragment>
        <li>
          {/* Logged in Home page */}
          <Link to="/home">
            <img
              src={"static/images/logo.png"}
              alt="Project Chippy"
              height="150"
              width="150"
              href="/home"
            />
          </Link>
        </li>
        <li className="headerName">
          <strong>Dashboards</strong>
        </li>
        <ul>
          <li>
            {/* Add a new event */}
            <Link to="/today">
              <span className="liHeaderLink">Today's Activities</span>
            </Link>
          </li>
        </ul>
        <li className="headerName">
          <strong>Events</strong>
        </li>
        <ul>
          <li>
            {/* Add a new event */}
            <Link to="/form">
              <span className="liHeaderLink">Add New Event</span>
            </Link>
          </li>
          <li>
            {/* All of the events in detail */}
            <Link to="/events">
              <span className="liHeaderLink">Events List</span>
            </Link>
          </li>
          <li>
            {/* A list of the events only showing the name */}
            <Link to="/shortlist">
              <span className="liHeaderLink">Day by Day</span>
            </Link>
          </li>
        </ul>
        <li className="headerName">
          <strong>Todos</strong>
        </li>
        <ul>
          <li>
            {/* A list of todos */}
            <Link to="/todos">
              <span className="liHeaderLink">Todos</span>
            </Link>
          </li>
        </ul>
      </Fragment>
    );

    return (
      <div className="headerComponent">
        <nav>
          <ul className="grid-header">
            {isAuthenticated ? userLinks : authLinks}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
