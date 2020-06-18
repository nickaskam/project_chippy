import React, { Component } from "react";
import EventCards from "./EventCards";
import EventFooter from "../layout/EventFooter";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
    this.showUncompletedEvents = this.showUncompletedEvents.bind(this);
    this.showAllEvents = this.showAllEvents.bind(this);
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    this.setState({
      events: this.props.events,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        events: this.props.events,
      });
    }
  }

  showUncompletedEvents = () => {
    var filteredEvents = this.state.events.slice().filter((event) => {
      if (event.complete === "No") {
        return true;
      }
      return false;
    });

    this.setState({ events: filteredEvents });
  };

  showAllEvents = () => {
    this.setState({ events: this.props.events });
  };

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <button onClick={this.showUncompletedEvents}>
          Show Uncomplete Events
        </button>
        <button onClick={this.showAllEvents}>Show All Events</button>
        <div className="gridList">
          <div>
            <h2>Past Events</h2>
            <div>
              {this.state.events
                .slice()
                .filter((event) => {
                  if (
                    new Date(event.start_time) < new Date().setHours(0, 0, 0, 0)
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
          <div>
            <h2>
              Today's Events (
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date())}
              )
            </h2>
            <div>
              {this.state.events
                .slice()
                .filter((event) => {
                  if (
                    new Date(event.start_time) >
                      new Date().setHours(0, 0, 0, 0) &&
                    new Date(event.start_time) <
                      new Date().setHours(24, 0, 0, 0)
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
          <div>
            <h2>Future Events</h2>
            <div>
              {this.state.events
                .slice()
                .filter((event) => {
                  if (
                    new Date(event.start_time) >
                    new Date().setHours(24, 0, 0, 0)
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
        </div>
        <EventFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events.events,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(EventList);
