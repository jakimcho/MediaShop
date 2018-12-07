import React, { Component } from "react";

class RegistrationPage extends Component {
  state = {
    user: {
      email: "",
      firstName: "",
      sirName: "",
      password: "",
      confirmPassword: "",
      city: "",
      country: "Bulgaria",
      zip: "",
      address: ""
    }
  };

  username = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    console.log(
      "Proba Sending data with user name: ",
      this.username.current.value
    );
  };

  handleEmailChange = e => {
    const user = { ...this.state.user };
    user.email = e.currentTarget.value;
    this.setState({ user });
  };

  // destructuring the e (event object) and get currentTarget as alias input
  handleAllFieldsChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="cotainer mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Register</div>
              <div className="card-body">
                <form
                  className="justify-content-center"
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-8">
                      <label htmlFor="inputEmail4">Email</label>
                      <input
                        value={user.email}
                        onChange={this.handleEmailChange}
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        ref={this.username}
                      />
                    </div>
                  </div>

                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputPassword4">Password</label>
                      <input
                        value={user.password}
                        onChange={this.handleAllFieldsChange}
                        type="password"
                        name="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        value={user.confirmPassword}
                        onChange={this.handleAllFieldsChange}
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>

                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-4">
                      <label htmlFor="userFirstName">First Name</label>
                      <input
                        type="text"
                        value={user.firstName}
                        onChange={this.handleAllFieldsChange}
                        className="form-control"
                        id="userFirstName"
                        name="firstName"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="userSirName">Sir Name</label>
                      <input
                        value={user.sirName}
                        onChange={this.handleAllFieldsChange}
                        type="text"
                        className="form-control"
                        id="userSirName"
                        name="sirName"
                        placeholder="Sir Name"
                      />
                    </div>
                  </div>

                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-3">
                      <label htmlFor="inputCity">City</label>
                      <input
                        value={user.city}
                        onChange={this.handleAllFieldsChange}
                        type="text"
                        name="city"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="inputState">State</label>
                      <select
                        //value={user.country}
                        id="inputState"
                        className="form-control"
                      >
                        <option defaultValue>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip</label>
                      <input
                        value={user.zip}
                        onChange={this.handleAllFieldsChange}
                        type="text"
                        name="zip"
                        className="form-control"
                        id="inputZip"
                      />
                    </div>
                  </div>

                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-8">
                      <label htmlFor="inputAddress">Address</label>
                      <input
                        type="text"
                        value={user.address}
                        onChange={this.handleAllFieldsChange}
                        className="form-control"
                        id="inputAddress"
                        name="address"
                        placeholder="1234 Main St"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
