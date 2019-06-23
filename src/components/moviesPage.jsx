import React, { Component, Fragment } from "react";
import MoviesTable from "./moviesTable";

class MoviesPage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h1>This is where the movies will display</h1>
        <MoviesTable />
      </Fragment>
    );
  }
}

export default MoviesPage;
