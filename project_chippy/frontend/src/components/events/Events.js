import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  getEvents,
  deleteEvent,
  sortEventsStartTimeAscending,
  sortEventsStartTimeDescending,
} from "../../actions/events";

export class Events extends Component {
  state = {
    showSortStartTimeAscending: true,
    sortType: "asc",
    filtered: false,
    daysBetween: 100,
  };

  static propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired,
    sortEventsStartTimeAscending: PropTypes.func.isRequired,
    sortEventsStartTimeDescending: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
  }

  //filter for events that are happening today
  eventToday = (event) => {
    //start date
    let start = new Date();
    //setting date to midnight (morning)
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - 100);
    console.log(start);
    //end date
    let end = new Date();
    //setting date to midnight (evening)
    end.setHours(24, 0, 0, 0);
    end.setDate(end.getDate() + 100);
    console.log(end);
    console.log(new Date(event.start_time));
    //checking to see if the event.start_time is occuring today
    if (
      new Date(event.start_time) > start &&
      new Date(event.start_time) < end
    ) {
      return true;
    } else {
      return false;
    }
  };

  sortEventsByStartTime = () => {
    this.props.events.sort((a, b) => a.start_time - b.start_time);
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
        <div>
          <h2>Events List</h2>
          {/* sort events */}
          <button
            onClick={this.props.sortEventsStartTimeAscending}
            className="sortStartTimeButton"
          >
            Sort by newest start time
          </button>
          <button
            onClick={this.props.sortEventsStartTimeDescending}
            className="sortStartTimeButton"
          >
            Sort by oldest start time
          </button>
          <button
            onClick={this.sortEventsByStartTime.bind(this)}
            className="sortStartTimeButton"
          >
            Sort in browser
          </button>
          <Link to="/form">
            <button className="sortStartTimeButton">Create new Event</button>
          </Link>
        </div>
        {/* bring in events and grid */}
        <div className="grid">
          {this.props.events.filter(this.eventToday).map((event) => (
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
  sortEventsStartTimeAscending,
  sortEventsStartTimeDescending,
})(Events);

export default EventList;
