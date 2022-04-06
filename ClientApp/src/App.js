import React, { Component } from "react";

import HomePage from "./components/Home";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    );
  }
}
