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

  render() {
    return (
      <Fragment>
        <h2>Events List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Event</th>
              <th>Description</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Category</th>
              <th>Complete?</th>
              <th>Created At:</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>
                  {this.dateFormatter.format(Date.parse(event.start_time))}
                </td>
                <td>{this.dateFormatter.format(Date.parse(event.end_time))}</td>
                <td>{event.category}</td>
                <td>{event.complete.toString()}</td>
                <td>
                  {this.dateFormatter.format(Date.parse(event.created_at))}
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events.events,
});

export default connect(mapStateToProps, { getEvents })(Events);
