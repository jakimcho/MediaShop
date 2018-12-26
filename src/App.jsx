import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavigationBar from "./components/navigationBar";
import BooksPage from "./components/booksPage";
import SongsPage from "./components/songsPage";
import HomePage from "./components/homePage";
import MoviesPage from "./components/moviesPage";
import RegistrationPage from "./components/registrationPage";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    let user = null;
    try {
      const jwt = localStorage.getItem("token");
      console.log("Token from local storage: ", jwt);
      user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {
      console.log("Problem while decoding: ", ex);
      // will do nothing here, It is as annonymouse user is logged in
    }

    console.log("after decoding token: ", user);
  }

  render() {
    return (
      <div className="App">
        <NavigationBar user={this.state.user} />
        <div role="main" className="container">
          <Switch>
            <Route
              path="/movies"
              render={props => <MoviesPage someProp="prop" {...props} />}
            />
            <Route path="/books" component={BooksPage} />
            <Route path="/songs" component={SongsPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/home" component={HomePage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
