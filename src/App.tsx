import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from "./components/HomePage";

import CreateCampaign from "./CreateCampaignPage"

import styled from "styled-components";


class App extends Component {

  render() {
    return (
      <Router>
        <Route path= "/" exact component={HomePage} />
        <Route path="/newCampaign" component={CreateCampaign} />
      </Router>
    );
  }
}

export default App;