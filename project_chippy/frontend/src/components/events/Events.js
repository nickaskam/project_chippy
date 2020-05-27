import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteEvent } from "../../actions/events";
import Buttons from "./Buttons";

export class Events extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    deleteEvent: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        {<Buttons />}
        <h2>Events</h2>
        <div className="grid">
          {this.props.events.map((event) => (
            <div key={event.id}>
              {/* Overview of event */}
              <h4>
                {event.name} - {event.category} -{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(event.start_time)))}
              </h4>
              {/* Start to end times only */}
              <p>
                {new Intl.DateTimeFormat("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(new Date(Date.parse(event.start_time)))}{" "}
                -{" "}
                {new Intl.DateTimeFormat("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(new Date(Date.parse(event.end_time)))}
              </p>
              <p>{event.description}</p>
              <p>Complete? {event.complete}.</p>
              <p>
                Created at:{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(new Date(Date.parse(event.created_at)))}
              </p>
              <div id="eventsDeleteButtonDiv">
                {
                  <button
                    onClick={() => this.props.deleteEvent(event.id)}
                    className="deleteButton"
                  >
                    Delete
                  </button>
                }
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events.events,
});

const EventList = connect(mapStateToProps, {
  deleteEvent,
})(Events);

export default EventList;
