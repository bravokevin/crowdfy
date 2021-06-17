import React, { Component } from "react";
import HomePage from "./components/HomePage";
// import Items from "./components/items";
import Menu from './components/Nav/Nav';
import { Footer } from "./components/Footer.jsx"
import styled from "styled-components";



const Container = styled.div`
	display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100%;
	
`

class App extends Component {

  render() {
    return (
      <Container>
        <Menu />
        <HomePage />
        <Footer />
      </Container >
        );
  }
}

        export default App;