import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEvents } from "../../actions/events";

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
        <div className="container">
          <h2>Events List</h2>
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
                  {this.dateFormatterTimeOnly.format(
                    Date.parse(event.end_time)
                  )}
                </p>
                <p>{event.description}</p>
                <p>
                  Complete? {event.complete.toString()}. Created at:{" "}
                  {this.dateFormatter.format(Date.parse(event.created_at))}
                </p>
                <div id="eventsDeleteButtonDiv">
                  <button id="deleteButton">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events.events,
});

export default connect(mapStateToProps, { getEvents })(Events);
