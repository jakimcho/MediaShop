import React, { Component } from "react";

class RegistrationPage extends Component {
  state = {};

  username = React.createRef;

  handleSubmit = e => {
    e.preventDefault();

    console.log("Sending data with user name: ", this.username.current.value);
  };

  render() {
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
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                        ref={this.username}
                      />
                    </div>
                  </div>

                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputPassword4">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
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
                        className="form-control"
                        id="userFirstName"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="userSirName">Sir Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userSirName"
                        placeholder="Sir Name"
                      />
                    </div>
                  </div>

                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-3">
                      <label htmlFor="inputCity">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="inputState">State</label>
                      <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip</label>
                      <input
                        type="text"
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
                        className="form-control"
                        id="inputAddress"
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
