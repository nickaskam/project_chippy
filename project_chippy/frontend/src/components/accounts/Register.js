import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, email, password, password2 } = this.state;

    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              onChange={this.onChange}
              value={password2}
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Register;
