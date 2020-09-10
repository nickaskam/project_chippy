import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import EventCards from "../events/EventCards";
import EventFooter from "../layout/EventFooter";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export class Today extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todayDashboardContainer">
        <div className="todayEventsTitleContainer">
          <h2>Today's Dashboard</h2>
        </div>
        <div className="todayEventsContainer">
          <h3>Events</h3>
          <hr />
          {/* <h4>Quick Add</h4> */}
          <h4>Today's Events</h4>
          <div>
            {this.props.events
              .slice()
              .filter((event) => {
                if (
                  new Date(event.start_time) >
                    new Date().setHours(0, 0, 0, 0) &&
                  new Date(event.start_time) < new Date().setHours(24, 0, 0, 0)
                ) {
                  return true;
                }
                return false;
              })
              .sort((a, b) => {
                if (a.start_time > b.start_time) {
                  return 1;
                } else if (a.start_time < b.start_time) {
                  return -1;
                }
                return 0;
              })
              .map((event) => (
                <EventCards key={event.id} event={event} />
              ))}
          </div>
        </div>
        <div className="todayTodosContainer">
          <h3>Todos</h3>
          <hr />
          {/* <h4>Quick Add</h4> */}
          <h4>Today's Todos</h4>
          <div>
            {this.props.events
              .slice()
              .filter((event) => {
                if (
                  new Date(event.start_time) >
                    new Date().setHours(0, 0, 0, 0) &&
                  new Date(event.start_time) < new Date().setHours(24, 0, 0, 0)
                ) {
                  return true;
                }
                return false;
              })
              .sort((a, b) => {
                if (a.start_time > b.start_time) {
                  return 1;
                } else if (a.start_time < b.start_time) {
                  return -1;
                }
                return 0;
              })
              .map((event) => (
                <EventCards key={event.id} event={event} />
              ))}
          </div>
        </div>
        <div className="todaysEventsFooterContainer">
          <EventFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events.events,
  todos: state.todos.todos,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Today);
