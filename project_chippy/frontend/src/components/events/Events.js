import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getEvents,
  deleteEvent,
  sortEventsStartTime,
} from "../../actions/events";

export class Events extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
  }

  dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  dateFormatterDateOnly = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  dateFormatterTimeOnly = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  render() {
    return (
      <Fragment>
        <div>
          <h2>Events List</h2>
          <button
            onClick={this.props.sortEventsStartTime}
            id="sortStartTimeButton"
          >
            Sort by start time
          </button>
        </div>
        <div className="grid">
          {this.props.events.map((event, index) => (
            <div key={`event-list-key ${index}`}>
              <h4>
                {event.name} - {event.category} -{" "}
                {this.dateFormatterDateOnly.format(
                  Date.parse(event.start_time)
                )}
              </h4>
              <p>
                {this.dateFormatterTimeOnly.format(
                  Date.parse(event.start_time)
                )}{" "}
                -{" "}
                {this.dateFormatterTimeOnly.format(Date.parse(event.end_time))}
              </p>
              <p>{event.description}</p>
              <p>
                Complete? {event.complete.toString()}. Created at:{" "}
                {this.dateFormatter.format(Date.parse(event.created_at))}
              </p>
              <div id="eventsDeleteButtonDiv">
                <button
                  onClick={this.props.deleteEvent.bind(this, event.id)}
                  id="deleteButton"
                >
                  Delete
                </button>
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

export default connect(mapStateToProps, {
  getEvents,
  deleteEvent,
  sortEventsStartTime,
})(Events);
