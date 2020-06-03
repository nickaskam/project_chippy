import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import EventCards from "./EventCards";

export class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
    this.sortByDateAsc = this.sortByDateAsc.bind(this);
    this.sortByDateDesc = this.sortByDateDesc.bind(this);
    this.showWorkEvents = this.showWorkEvents.bind(this);
    this.showTodaysEvents = this.showTodaysEvents.bind(this);
    this.showAllEvents = this.showAllEvents.bind(this);
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

  sortByDateDesc = () => {
    var sortedEvents = this.state.events.sort((a, b) => {
      if (b.start_time > a.start_time) {
        return 1;
      } else if (b.start_time < a.start_time) {
        return -1;
      }
      return 0;
    });

    this.setState({ events: sortedEvents });
  };

  showWorkEvents = () => {
    var filteredEvents = this.state.events.slice().filter((event) => {
      if (event.category === "WORK") {
        return true;
      }
      return false;
    });

    this.setState({ events: filteredEvents });
  };

  showUncompleteEvents = () => {
    var filteredEvents = this.state.events.slice().filter((event) => {
      if (event.complete === "No") {
        return true;
      }
      return false;
    });

    this.setState({ events: filteredEvents });
  };

  showTodaysEvents = () => {
    //setting date to midnight (morning)
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    //setting date to midnight (evening)
    const end = new Date();
    end.setHours(24, 0, 0, 0);

    var filteredEvents = this.state.events.slice().filter((event) => {
      if (
        new Date(event.start_time) > start &&
        new Date(event.start_time) < end
      ) {
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
    return (
      <Fragment>
        <button onClick={this.sortByDateAsc}>Asc Date</button>
        <button onClick={this.sortByDateDesc}>Desc Date</button>
        <button onClick={this.showWorkEvents}>Show Work Events</button>
        <button onClick={this.showTodaysEvents}>Show Today's Events</button>
        <button onClick={this.showUncompleteEvents}>
          Show Uncomplete Events
        </button>
        <button onClick={this.showAllEvents}>Show All Events</button>
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

const mapStateToProps = (state) => ({
  events: state.events.events,
});

export default connect(mapStateToProps)(Events);
