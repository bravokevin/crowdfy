import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from "./components/HomePage";

import styled from "styled-components";


class App extends Component {

  render() {
    return (
      <Router>
        <HomePage />
      </Router>
    );
  }
}

export default App;