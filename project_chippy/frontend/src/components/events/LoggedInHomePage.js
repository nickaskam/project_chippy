import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getEvents } from "../../actions/events";

class LoggedInHomePage extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    getEvents: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <div>
        <h1>Project Chippy</h1>
        <p>Welcome!</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};

export default connect(mapStateToProps, { getEvents })(LoggedInHomePage);
