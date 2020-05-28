import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteEvent } from "../../actions/events";
import Buttons from "./Buttons";
import EventCards from "./EventCards";

export class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
    this.sortByDateAsc = this.sortByDateAsc.bind(this);
    this.sortByDateDesc = this.sortByDateDesc.bind(this);
  }

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

  static propTypes = {
    deleteEvent: PropTypes.func.isRequired,
  };

  sortByDateAsc = () => {
    var sortedEvents = this.state.events.sort((a, b) => {
      if (a.start_time > b.start_time) {
        return 1;
      } else if (a.start_time < b.start_time) {
        return -1;
      }
      return 0;
    });

    this.setState({ events: sortedEvents });
  };

  sortByDateDesc() {
    var sortedEvents = this.state.events.sort((a, b) => {
      if (b.start_time > a.start_time) {
        return 1;
      } else if (b.start_time < a.start_time) {
        return -1;
      }
      return 0;
    });

    this.setState({ events: sortedEvents });
  }

  render() {
    return (
      <Fragment>
        <Buttons />
        <SortButtons />
        <button onClick={this.sortByDateAsc}>Asc Date</button>
        <button onClick={this.sortByDateDesc}>Desc Date</button>
        <h2>Events</h2>
        <div className="grid">
          {this.state.events.map((event) => (
            <EventCards key={event.id} event={event} />
          ))}
        </div>
      </Fragment>
    );
  }
}

class SortButtons extends Component {
  state = {
    sortAscStartTime: false,
    sortAscEventName: false,
    fieldSort: "",
  };

  toggleAscendingStartTime() {
    this.setState({
      sortAscStartTime: !this.state.sortAscStartTime,
    });
  }

  toggleAscendingEvent() {
    this.setState({
      sortAscEventName: !this.state.sortAscEventName,
    });
  }

  toggleFieldSort = (field) => {
    this.setState({
      fieldSort: field,
    });
    if (field == "start_time") {
      this.toggleAscendingStartTime();
    } else if (field == "name") {
      this.toggleAscendingEvent();
    } else {
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleFieldSort.bind(this, "start_time")}>
          Change sort by start time
        </button>
        <button onClick={this.toggleFieldSort.bind(this, "name")}>
          Change sort by event name
        </button>
        <p>
          Sort Ascending Start Time: {this.state.sortAscStartTime.toString()}
        </p>
        <p>
          Sort Ascending Event Name: {this.state.sortAscEventName.toString()}
        </p>
        <p>Field Sort: {this.state.fieldSort}</p>
      </div>
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
