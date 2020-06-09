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
          {/* Link to Register for the app */}
          <Link to="/register">Register</Link>
        </li>
        <li>
          {/* Link to Login into the app */}
          <Link to="/login">Login</Link>
        </li>
      </Fragment>
    );

    const userLinks = (
      <Fragment>
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
          <Link to="/shortlist">Day by Day</Link>
        </li>

        <li>
          <button onClick={this.props.logout}>Logout</button>
        </li>
      </Fragment>
    );

    return (
      <div>
        <nav>
          <ul className="grid-header">
            <li>
              {/* Home Page */}
              <a href="#">Project Chippy</a>
            </li>
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
