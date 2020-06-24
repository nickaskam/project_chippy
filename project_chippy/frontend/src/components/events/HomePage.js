import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class HomePage extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="container">
        <h1>Project Chippy</h1>
        <p>
          Welcome to the Home Page of the app. Please use the links to click to
          the assigned pages. Use this app as your way to track events and as a
          to do list.
        </p>
        <p>If you have an account, please log in!</p>
        <p>
          If you don't have an account, please create a free account in the
          Registration link above
        </p>
        <p>
          I am currently working on the site architecture, so please do not put
          in any events that might you need 100%. As a new update could
          potentially erase the current work that you have put in. I am open to
          any constructive feedback you have for the site. Please email me at:{" "}
          <a href="mailto:nickaskam@gmail.com">nickaskam@gmail.com</a>.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(HomePage);
