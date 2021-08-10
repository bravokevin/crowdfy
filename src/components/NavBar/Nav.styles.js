import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';


export const Nav = styled.nav`
background:transparent;
height: 80px;
margin-top: -80px;
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
max-width: 1500px;
align-items: center;

`

export const NavLogo = styled.img`
    width: 150px;
    height: 60px;
    transform: scale(0.98);
  transition: transform 0.25s ease;
    &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1);
}
`
export const NavLogoWrapper = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    width: 150px;
    height: 60px;
    margin-right: 500px;

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
 list-style-type: none;
margin-right: -60%;

@media screen and (max-width: 1211px){
    margin-right: -50%;
}

@media screen and (max-width: 1000px){
    margin-right: -35%;
}
@media screen and (max-width: 768px){
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;

`

export const NavLinks = styled(LinkR)`
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

@media screen and (max-width: 768px){
    display: none;

}`

export const NavBtnLink = styled(LinkR)`
  transform: scale(0.98);
  transition: transform 0.25s ease;
border-radius: 11px;
white-space: nowrap;
padding: 8px 25px;
background: linear-gradient(#dd0df0, #ff12b0);
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
color: #000;

&:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1);
    color: #fff;
    
}
`
/** **************  ADDRESS BOX ***************** */


export const AddrWrapper = styled.div`
display: flex;
height: 20px;
border-radius: 11px;
padding: 8px 15px;
background: #001111;
    align-items: center;
/* flex-direction: row; */
justify-content: flex-start;

`

export const AddrText = styled.span`
font-size: 16px;
color: #ffffff;
`
export const ColorBall = styled.div`
border-radius: 800px;
padding: 3px;
background: red;
margin-right: 10px;
margin-top: 4px;
`