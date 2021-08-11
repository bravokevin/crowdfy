import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';


export const SidebarContainer = styled.aside`
position: fixed;
z-index: 899;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
right: 0;
overflow: hidden;
transition: 0.3s ease-in-out;

//sets the sidebar opacity for only be avalible when {isOpen} is true
opacity: ${({ isOpen }) => (isOpen ? '100' : '0')};
right: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 

@media screen and (min-width: 768px){
  right: -100%;
}
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: 'transparent';
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
text-align: center;

`

export const SidebarLink = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
text-transform: capitalize;
cursor: pointer;

&:hover{
    color:#ff12b0;
    transition: all 0.2s ease-in-out;
}
&:active {
    color:#ff12b0;
        
    }
`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 14px;
background: linear-gradient(#dd0df0, #ff12b0);
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    }

`

export const SidebarMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 60px);
text-align: center;
align-items:center;

@media screen and (max-width: 488px){
    grid-template-rows: repeat(6, 60px)
}
`

export const BurgerS = styled.div`
    width: 2rem;
    height: 2rem;
    top: 15px;
    right: 20px;
    display: none; 
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;

    }
    div {
      width: 2rem;
      height: 0.25rem;
      background-color: #fff;
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;
      cursor: pointer;  
      &:nth-child(1) {
        transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
      }
      &:nth-child(2) {
        transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${(props) => props.open ? 0 : 1};
      }
      &:nth-child(3) {
        transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  `

  
/** **************  ADDRESS BOX ***************** */


export const AddrWrapper = styled.div`
display: flex;
height: 20px;
width: 100px;
border-radius: 11px;
padding: 8px 15px;
background: #001111;
    align-items: center;
justify-content: flex-start;
position: absolute;
margin-top: -150px;
margin-left: 30px;

`

export const AddrText = styled.span`
font-size: 16px;
color: #ffffff;
`
export const ColorBall = styled.button`
border-radius: 800px;
padding: 3.5px;
background:  ${({ active }) => (active ? "green" : "red")};
margin-right: 10px;
margin-top: 4px;
cursor: ${({ active }) => (active ? "default" : "pointer")};
outline: none;
border: none;
`