import React from "react";
import { Link } from "react-router-dom";
import LoginComponent from "./loginComponent";

const NavigationBar = ({ user }) => {
  console.log("current logged in user: ", user);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Media Shop
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/books">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/songs">
              Songs
            </Link>
          </li>
        </ul>

        {!user && (
          <React.Fragment>
            <LoginComponent />
            <Link
              className="btn btn-outline-success my-2 my-sm-0 m-2"
              to="/registration"
            >
              Register
            </Link>
          </React.Fragment>
        )}

        {user && (
          <React.Fragment>
            <Link
              className="btn btn-outline-success my-2 my-sm-0 m-2"
              to="/profile"
            >
              {user.firstName}
            </Link>
            <Link
              className="btn btn-outline-success my-2 my-sm-0 m-2"
              to="/logout"
            >
              Logout
            </Link>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
