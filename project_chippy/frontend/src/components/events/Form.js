import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEvent } from "../../actions/events";

export class Form extends Component {
  state = {
    name: "",
    description: "",
    start_time: "",
    end_time: "",
    category: "WORK",
    complete: "No",
  };

  static propTypes = {
    addEvent: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      start_time,
      end_time,
      category,
      complete,
    } = this.state;
    const event = {
      name,
      description,
      start_time,
      end_time,
      category,
      complete,
    };
    this.props.addEvent(event);
    alert(`${event.name} has been successfully created`);
    this.setState({
      name: "",
      description: "",
      start_time: "",
      end_time: "",
      category: "WORK",
      complete: "No",
    });
  };

  render() {
    const {
      name,
      description,
      start_time,
      end_time,
      category,
      complete,
    } = this.state;
    return (
      <div className="container">
        <div>
          <h2>Add Event Form</h2>
        </div>
        <div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                onChange={this.onChange}
                value={description}
              />
            </div>
            <div>
              <label>Start Time</label>
              <input
                type="datetime-local"
                name="start_time"
                onChange={this.onChange}
                value={start_time}
              />
            </div>
            <div>
              <label>End Time</label>
              <input
                type="datetime-local"
                name="end_time"
                onChange={this.onChange}
                value={end_time}
              />
            </div>
            <div>
              <label>Category</label>
              <select name="category" onChange={this.onChange} value={category}>
                <option value="WORK">Work</option>
                <option value="SCHOOL">School</option>
                <option value="FUN">Fun</option>
              </select>
            </div>
            <div>
              <label>Complete?</label>
              <select name="complete" onChange={this.onChange} value={complete}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div>
              <button type="submit">Submit Event</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addEvent })(Form);
