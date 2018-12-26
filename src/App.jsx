import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavigationBar from "./components/navigationBar";
import BooksPage from "./components/booksPage";
import SongsPage from "./components/songsPage";
import HomePage from "./components/homePage";
import MoviesPage from "./components/moviesPage";
import RegistrationPage from "./components/registrationPage";
import Logout from "./components/logout";
import auth from "./services/auth";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const user = auth.getLoggedInUser();
    this.setState({ user });
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
            <Route path="/logout" component={Logout} />
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
