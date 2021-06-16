import React, { Component } from "react";
  import styled from "styled-components"



interface INav {
  open: boolean;
  href?: string;
}

export const Nav = styled.nav`
  font-family: 'Arial';
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ;
  align-items: center;
  position: relative;
  @media (max-width: 678px) {
    width: 100vw;
  }
  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }
`

export const Ul = styled.ul<INav>`
  font-family: 'Zilla Slab';
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
  font-size: 18px;
  height: 110px;
  margin-left: 20px;
  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;
    &:hover {
      color: #0DADEA;
    }
  }
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fdfdfdfa;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;
    li {
      color: #000;
      margin-right: 34px;
      &:hover {
        color: #0DADEA;
      }
    }
  }
`

class NavBar extends Component {
  render() {
    return (
      <>
      <Nav>
        <p>this is my nav</p>
       </Nav> 
      </>
    )
  }
}

export default NavBar;