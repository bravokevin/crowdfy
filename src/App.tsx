import React, { Component } from "react";
import HomePage from "./components/HomePage";
// import Items from "./components/items";
import Menu from './components/Nav/Nav';
import {Footer} from "./components/Footer.jsx"

class App extends Component {
  render() {
    return (
      <>
        <Menu/>
        <HomePage/>
        <Footer/>
        </>
    );
  }
}

export default App;