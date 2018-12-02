import React, { Component } from "react";

class RegistrationPage extends Component {
  state = {};
  render() {
    return (
      <div class="cotainer">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">Register</div>
              <div class="card-body">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-3">
                      <label for="inputPassword4">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label for="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-3">
                      <label for="userFirstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userFirstName"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label for="userSirName">Sir Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userSirName"
                        placeholder="Sir Name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-2">
                      <label for="inputCity">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    <div className="form-group col-md-2">
                      <label for="inputState">State</label>
                      <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label for="inputZip">Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputAddress">Address</label>
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
