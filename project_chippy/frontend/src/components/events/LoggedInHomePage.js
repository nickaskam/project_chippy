import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getEvents } from "../../actions/events";
import { getTodos } from "../../actions/todos";

class LoggedInHomePage extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
    this.props.getTodos();
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
        <p>
          View your todos: <Link to="/todos">Your Todos</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps, { getEvents, getTodos })(
  LoggedInHomePage
);
