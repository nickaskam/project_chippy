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

  //show date and time from datetime field
  dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  //show date only from datetime field
  dateFormatterDateOnly = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  //show time only from datetime field
  dateFormatterTimeOnly = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

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
                {this.dateFormatterDateOnly.format(
                  Date.parse(event.start_time)
                )}
              </h4>
              {/* Start to end times only */}
              <p>
                {this.dateFormatterTimeOnly.format(
                  Date.parse(event.start_time)
                )}{" "}
                -{" "}
                {this.dateFormatterTimeOnly.format(Date.parse(event.end_time))}
              </p>
              {/* Shows event description */}
              <p>{event.description}</p>
              {/* Shows if event is complete */}
              <p>Complete? {event.complete}.</p>
              {/* Shows when event was created */}
              <p>
                Created at:{" "}
                {this.dateFormatter.format(Date.parse(event.created_at))}
              </p>
              {/* Delete Button */}
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
