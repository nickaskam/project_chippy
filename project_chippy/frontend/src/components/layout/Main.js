import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import HomePage from "../events/HomePage";
import Dashboard from "../events/Dashboard";
import TodosDashboard from "../todos/TodosDashboard";
import Form from "../events/Form";
import Header from "./Header";
import { getEvents } from "../../actions/events";
import { getTodos } from "../../actions/todos";
import EventList from "../events/ShorthandList";
import Login from "../accounts/Login";
import Register from "../accounts/Register";
import PrivateRoute from "../common/PrivateRoute";
import LoggedInHomePage from "../events/LoggedInHomePage";
import AccountHeader from "./AccountHeader";
import Today from "../dashboards/Today";

class Main extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
    this.props.getTodos();
  }

  render() {
    return (
      <div className="mainPageContainer">
        <Header />
        <div className="mainComponent">
          <AccountHeader />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PrivateRoute exact path="/home" component={LoggedInHomePage} />
            <Route
              exact
              path="/events"
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path="/shortlist"
              render={(props) => <EventList {...props} />}
            />
            <PrivateRoute exact path="/form" component={Form} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/todos"
              render={(props) => <TodosDashboard {...props} />}
            />
            <Route
              exact
              path="/today"
              render={(props) => <Today {...props} />}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps, { getEvents, getTodos })(Main);
