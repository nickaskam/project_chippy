import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import HomePage from "../events/HomePage";
import Dashboard from "../events/Dashboard";
import Form from "../events/Form";
import Header from "./Header";
import { getEvents } from "../../actions/events";
import EventList from "../events/ShorthandList";
import Login from "../accounts/Login";
import Register from "../accounts/Register";

class Main extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/events"
              render={(props) => <Dashboard {...props} />}
            />
            } />
            <Route
              exact
              path="/shortlist"
              render={() => <EventList events={this.props.events} />}
            />
            <Route exact path="/form" component={Form} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};

export default connect(mapStateToProps, { getEvents })(Main);
