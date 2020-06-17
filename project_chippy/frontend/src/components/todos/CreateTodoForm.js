import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTodo } from "../../actions/todos";

export class CreateTodoForm extends Component {
  state = {
    name: "",
    todoDueDate: new Date().toISOString().split("T")[0],
    todotype: "SHORTTERM",
    complete: false,
  };

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, todoDueDate, todotype, complete } = this.state;
    const todo = { name, todoDueDate, todotype, complete };
    this.props.addTodo(todo);
    this.setState({
      name: "",
      todoDueDate: new Date().toISOString().split("T")[0],
      todotype: "SHORTTERM",
      complete: false,
    });
  };

  toggleChange = () => {
    this.setState({
      complete: !this.state.complete,
    });
  };

  render() {
    const { name, todoDueDate, todotype, complete } = this.state;
    return (
      <div>
        <h2>Add Todo</h2>
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
            <label>Todo Due Date</label>
            <input
              type="date"
              name="todoDueDate"
              onChange={this.onChange}
              value={todoDueDate}
            />
          </div>
          <div>
            <label>Complete?</label>
            <input
              type="checkbox"
              name="complete"
              checked={this.state.complete}
              onChange={this.toggleChange}
            />
          </div>
          <div>
            <label>Todo Type</label>
            <select name="todotype" onChange={this.onChange} value={todotype}>
              <option value="SHORTTERM">Short Term</option>
              <option value="LONGTERM">Long Term</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTodo })(CreateTodoForm);
