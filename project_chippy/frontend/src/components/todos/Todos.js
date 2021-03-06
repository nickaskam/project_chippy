import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { deleteTodo } from "../../actions/todos";

export class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    deleteTodo: PropTypes.func.isRequired,
  };

  dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  componentDidMount() {
    this.setState({
      todos: this.props.todos,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        todos: this.props.todos,
      });
    }
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <h2>Todos</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Due Date</th>
              <th>Complete?</th>
              <th>Type</th>
              <th>Created At</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.todoDueDate}</td>
                <td>{todo.complete.toString()}</td>
                <td>{todo.todotype}</td>
                <td>
                  {this.dateFormatter.format(Date.parse(todo.created_at))}
                </td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={() => this.props.deleteTodo(todo.id)}>
                    Delete
                  </button>
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
  todos: state.todos.todos,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { deleteTodo })(Todos);
