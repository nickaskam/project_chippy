import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getEvents, deleteEvent } from "../../actions/events";
import Buttons from "./Buttons";

export class Events extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    showSortStartTimeAscending: true,
  };

  static propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
  }

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
        <Buttons />
        {/* <ShorthandList events={this.props.events} /> */}
        {/* bring in events and grid */}
        <div className="grid">
          {this.props.events.map((event) => (
            <div key={event.id}>
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
                Complete? {event.complete}. Created at:{" "}
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

const EventList = connect(mapStateToProps, {
  getEvents,
  deleteEvent,
})(Events);

export default EventList;
