import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import HomePage from "./events/HomePage";
import Dashboard from "./events/Dashboard";
import Form from "./events/Form";
import Header from "./layout/Header";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/events" component={Dashboard} />
                <Route exact path="/form" component={Form} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
