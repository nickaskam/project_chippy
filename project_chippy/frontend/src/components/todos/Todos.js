import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

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
        <div>
          {this.state.todos.map((todo) => (
            <div key={todo.id}>
              <h4>To Do Name: {todo.name}</h4>
              <ul>
                <li>Due Date: {todo.todoDueDate}</li>
                <li>Type: {todo.todotype}</li>
                <li>Created At: {todo.created_at}</li>
              </ul>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Todos);
