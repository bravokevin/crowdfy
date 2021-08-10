import React from 'react';
import Logo from "../../Crowdfy.png"

import { Link } from 'react-router-dom';

import { BurgerS } from './sideBar/SideBar.styles';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLogoWrapper, AddrWrapper, AddrText, ColorBall  } from './Nav.styles'



const Navbar = ({ toggle, items }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogoWrapper to="/">
                    <NavLogo  src={Logo}></NavLogo>
                    </NavLogoWrapper >
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
                    <AddrWrapper>
                    <ColorBall/>
                        <AddrText>
                            0x00000
                        </AddrText>
                    </AddrWrapper>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar