import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getEvents } from "../../actions/events";

class LoggedInHomePage extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <div>
        <h1>Project Chippy</h1>
        <p>Welcome!</p>
        <p>
          Click to add an event: <Link to="/form">Add Event</Link>
        </p>
        <p>
          View your events: <Link to="/events">Your Events</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};

export default connect(mapStateToProps, { getEvents })(LoggedInHomePage);
