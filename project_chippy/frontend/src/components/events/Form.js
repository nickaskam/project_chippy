import React, { Component, Fragment } from "react";

export class Form extends Component {
  state = {
    name: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    const { name } = this.state;
    return (
      <Fragment>
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
              <button type="submit">Submit Event</button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Form;
