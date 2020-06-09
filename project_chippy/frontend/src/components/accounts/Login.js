import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h2>Login</h2>
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
            <button type="submit">Login</button>
          </div>
          <p>
            Don't have an account?
            <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
