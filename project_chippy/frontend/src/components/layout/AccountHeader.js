import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class AccountHeader extends Component {
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
          <span>
            <strong>{user ? `Welcome ${user.username} ` : ""}</strong>
          </span>
        </li>
        <li>
          <button onClick={this.props.logout}>Logout</button>
        </li>
      </Fragment>
    );

    return (
      <div className="accountHeaderComponent">
        <ul className="topNav">{isAuthenticated ? userLinks : authLinks}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(AccountHeader);
