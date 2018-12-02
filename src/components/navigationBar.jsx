import React from "react";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Media Shop
      </a>
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
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/movies">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/books">
              Books
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/songs">
              Songs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
