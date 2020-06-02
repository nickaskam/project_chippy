import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteEvent, editEvent } from "../../actions/events";

export class EventCards extends Component {
  static propTypes = {
    deleteEvent: PropTypes.func.isRequired,
    editEvent: PropTypes.func.isRequired,
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
      <div>
        {/* Overview of event */}
        <h4
          className={this.props.event.complete === "Yes" ? "text-strike" : null}
        >
          {this.props.event.name} - {this.props.event.category} -{" "}
          {this.dateFormatterDateOnly.format(
            Date.parse(this.props.event.start_time)
          )}
        </h4>
        {/* Start to end times only */}
        <p>
          {this.dateFormatterTimeOnly.format(
            Date.parse(this.props.event.start_time)
          )}{" "}
          -{" "}
          {this.dateFormatterTimeOnly.format(
            Date.parse(this.props.event.end_time)
          )}
        </p>
        {/* Shows event description */}
        <p>{this.props.event.description}</p>
        {/* Shows if event is complete */}
        <p>Complete? {this.props.event.complete}.</p>
        {/* Shows when event was created */}
        <p>
          Created at:{" "}
          {this.dateFormatter.format(Date.parse(this.props.event.created_at))}
        </p>
        {/* Complete and Delete Button */}
        <div>
          <button
            onClick={() => this.props.editEvent(this.props.event.id)}
            className={
              this.props.event.complete === "Yes" ? "hide" : "completeButton"
            }
          >
            Mark Complete
          </button>
          <button
            onClick={() => this.props.deleteEvent(this.props.event.id)}
            className="deleteButton"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events.events,
});

export default connect(mapStateToProps, { deleteEvent, editEvent })(EventCards);
