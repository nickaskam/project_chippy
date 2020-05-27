import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  sortEventsStartTimeAscending,
  sortEventsStartTimeDescending,
  showWorkEvents,
  showTodaysEvents,
  getEvents,
} from "../../actions/events";

export class Buttons extends React.Component {
  static propTypes = {
    sortEventsStartTimeAscending: PropTypes.func.isRequired,
    sortEventsStartTimeDescending: PropTypes.func.isRequired,
    showTodaysEvents: PropTypes.func.isRequired,
    showWorkEvents: PropTypes.func.isRequired,
    getEvents: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div>
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
          onClick={this.props.showTodaysEvents}
          className="sortStartTimeButton"
        >
          Show Today's Events
        </button>
        <button
          onClick={this.props.showWorkEvents}
          className="sortStartTimeButton"
        >
          Show Work Events
        </button>
        <button onClick={this.props.getEvents} className="sortStartTimeButton">
          Show All Events
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const ButtonList = connect(mapStateToProps, {
  sortEventsStartTimeAscending,
  sortEventsStartTimeDescending,
  showTodaysEvents,
  showWorkEvents,
  getEvents,
})(Buttons);

export default ButtonList;
