import React, { Component } from "react";
import auth from "../services/auth";

class LoginComponent extends Component {
  state = {
    login: {
      email: "",
      password: ""
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const login = { ...this.state.login };
    login[input.name] = input.value;

    this.setState({ login });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state.login;
    await auth.login(email, password);
    window.location = "/";
  };

  render() {
    const { email, password } = this.state.login;

    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
        <input
          className="form-control mr-sm-1"
          type="email"
          placeholder="username"
          aria-label="username"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          className="form-control mr-sm-1"
          type="password"
          placeholder="password"
          aria-label="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Login
        </button>
      </form>
    );
  }
}
export default LoginComponent;
