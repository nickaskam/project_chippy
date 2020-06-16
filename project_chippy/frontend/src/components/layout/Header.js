import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <li>
          {/* Home Page */}
          <Link to="/">
            <img
              src={"static/images/logo.png"}
              alt="Project Chippy"
              height="80"
              width="80"
            />
          </Link>
        </li>
        <li>
          {/* Link to Register for the app */}
          <Link to="/register">
            <span className="liHeaderLink">Register</span>
          </Link>
        </li>
        <li>
          {/* Link to Login into the app */}
          <Link to="/login">
            <span className="liHeaderLink">Login</span>
          </Link>
        </li>
      </Fragment>
    );

    const userLinks = (
      <Fragment>
        <li>
          {/* Logged in Home page */}
          <Link to="/home">
            <img
              src={"static/images/logo.png"}
              alt="Project Chippy"
              height="80"
              width="80"
              href="/home"
            />
          </Link>
        </li>
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
        <li>
          <span>
            <strong>{user ? `Welcome ${user.username} ` : ""}</strong>
          </span>
          <button onClick={this.props.logout}>Logout</button>
        </li>
      </Fragment>
    );

    return (
      <div>
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

export default connect(mapStateToProps, { logout })(Header);
