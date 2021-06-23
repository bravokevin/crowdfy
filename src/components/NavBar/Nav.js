import React from 'react';
import Logo from "../../Crowdfy.png"

import { BurgerS } from './sideBar/SideBar.styles';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './Nav.styles'



const Navbar = ({ toggle, items }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo src={Logo} to="/"></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BurgerS>
                            <div />
                            <div />
                            <div />
                        </BurgerS>
                    </MobileIcon>
                    <NavMenu>
                        {items.map((item, index) => (
                            <NavItem>
                                <NavLinks to={item}>
                                    {item}
                                </NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/newCampaign">Create campaign</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar