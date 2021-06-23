import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
background:#000;
height: 80px;
/* margin-top: -80px; */
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;

`

export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    width: 150px;
    height: 60px;
    margin: auto 0;

@media screen and (max-width: 768px){
    margin: auto;

}

`

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px){

    display: block;
    position:absolute;
    top: 0;
    right:0;
    transform: translate(-100%, 60%);
    cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -30%;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;

`

export const NavLinks = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
text-transform: capitalize;
    cursor: pointer;
    &:active {
        border-bottom: 3px solid #dd0df0;
    }
    &:hover{
        color: #dd0df0;
    }

`


export const NavBtn = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 760px){
    display: none;

}`

export const NavBtnLink = styled(LinkR)`
  transform: scale(0.98);
  transition: transform 0.25s ease;
border-radius: 13px;
white-space: nowrap;
padding: 8px 25px;
background: linear-gradient(#dd0df0, #ff12b0);
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
color: #fff;

&:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1);
}
`

