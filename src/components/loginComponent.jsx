import React, { Component } from "react";
import axios from "axios";

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
    try {
      const { data: jwt } = await axios.post(
        "http://localhost:3001/api/auth/",
        this.state.login
      );

      console.log("Got result from auth: ", jwt);
      localStorage.setItem("token", jwt);
    } catch (e) {
      console.log("Exception occured: ", e);
    }
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
