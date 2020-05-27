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
        <RenderEvents events={this.props.events} />
      </Fragment>
    );
  }
}

function RenderEvents({ events }) {
  return (
    <div>
      {events && (
        <div className="grid">
          {events.map((event) => {
            return (
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
                    <button onClick={deleteEvent(event.id)} id="deleteButton">
                      Delete
                    </button>
                  }
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  events: state.events.events,
});

const EventList = connect(mapStateToProps, {
  deleteEvent,
})(Events);

export default EventList;
