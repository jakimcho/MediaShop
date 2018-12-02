import React, { Component } from "react";
import NavigationBar from "./components/navigationBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div role="main" className="container" />
      </div>
    );
  }
}

export default App;
