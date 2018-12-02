import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./components/navigationBar";
import BooksPage from "./components/booksPage";
import SongsPage from "./components/songsPage";
import HomePage from "./components/homePage";
import MoviesPage from "./components/moviesPage";
import RegistrationPage from "./components/registrationPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div role="main" className="container">
          <Switch>
            <Route
              path="/movies"
              render={props => <MoviesPage someProp="prop" {...props} />}
            />
            <Route path="/books" component={BooksPage} />
            <Route path="/songs" component={SongsPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
