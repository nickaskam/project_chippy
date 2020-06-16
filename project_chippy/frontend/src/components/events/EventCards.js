import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteEvent, editEvent } from "../../actions/events";

export class EventCards extends Component {
  state = {
    name: "",
    description: "",
    start_time: "",
    end_time: "",
    category: "WORK",
    complete: "No",
    isInEditMode: false,
  };

  completeEvent = (e) => {
    e.preventDefault();
    const event = {
      id: this.props.event.id,
      name: this.props.event.name,
      description: this.props.event.description,
      start_time: this.props.event.start_time,
      end_time: this.props.event.end_time,
      category: this.props.event.category,
      complete: "Yes",
      created_at: this.props.event.created_at,
    };
    this.props.editEvent(event);
  };

  uncompleteEvent = (e) => {
    e.preventDefault();
    const event = {
      id: this.props.event.id,
      name: this.props.event.name,
      description: this.props.event.description,
      start_time: this.props.event.start_time,
      end_time: this.props.event.end_time,
      category: this.props.event.category,
      complete: "No",
      created_at: this.props.event.created_at,
    };
    this.props.editEvent(event);
  };

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  updateValues = (e) => {
    this.setState({
      isInEditMode: false,
    });
    e.preventDefault();
    const event = {
      id: this.props.event.id,
      name: this.refs.eventName.value,
      description: this.refs.eventDescription.value,
      start_time: this.refs.eventStartTime.value,
      end_time: this.refs.eventEndTime.value,
      category: this.refs.eventCategory.value,
      complete: this.refs.eventComplete.value,
      created_at: this.props.event.created_at,
    };
    this.props.editEvent(event);
  };

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
    if (this.state.isInEditMode) {
      return (
        <div className="gridListDiv">
          <form onSubmit={this.updateValues}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                defaultValue={this.props.event.name}
                onChange={this.onChange}
                ref="eventName"
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                defaultValue={this.props.event.description}
                onChange={this.onChange}
                ref="eventDescription"
              />
            </div>
            <div>
              <label>Start Time</label>
              <input
                type="datetime-local"
                name="start_time"
                defaultValue={this.props.event.start_time}
                onChange={this.onChange}
                ref="eventStartTime"
              />
            </div>
            <div>
              <label>End Time</label>
              <input
                type="datetime-local"
                name="end_time"
                defaultValue={this.props.event.end_time}
                onChange={this.onChange}
                ref="eventEndTime"
              />
            </div>
            <div>
              <label>Category</label>
              <select
                name="category"
                onChange={this.onChange}
                defaultValue={this.props.event.category}
                ref="eventCategory"
              >
                <option value="WORK">Work</option>
                <option value="SCHOOL">School</option>
                <option value="FUN">Fun</option>
              </select>
            </div>
            <div>
              <label>Complete?</label>
              <select
                name="complete"
                onChange={this.onChange}
                defaultValue={this.props.event.complete}
                ref="eventComplete"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div>
              <button onClick={this.changeEditMode}>X</button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div className="gridListDiv">
        {/* Overview of event */}
        <h4
          className={this.props.event.complete === "Yes" ? "text-strike" : null}
        >
          <button onClick={this.changeEditMode}>Edit</button>
          <span
            className={
              this.props.event.category === "WORK"
                ? "categoryOne"
                : this.props.event.category === "FUN"
                ? "categoryTwo"
                : this.props.event.category === "SCHOOL"
                ? "categoryThree"
                : ""
            }
          >
            &nbsp;&nbsp;{this.props.event.name}
          </span>{" "}
          -{" "}
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
        {/* Complete and Delete Button */}
        <div>
          <button
            onClick={this.completeEvent}
            className={
              this.props.event.complete === "Yes" ? "hide" : "completeButton"
            }
          >
            Mark Complete
          </button>
          <button
            onClick={this.uncompleteEvent}
            className={
              this.props.event.complete === "No" ? "hide" : "completeButton"
            }
          >
            Mark Incomplete
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
