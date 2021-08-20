import React,{useEffect, useState} from 'react';
import Logo from "../../Crowdfy.png"

import { Link } from 'react-router-dom';

import { BurgerS } from './sideBar/SideBar.styles';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLogoWrapper, AddrWrapper, AddrText, ColorBall  } from './Nav.styles'



const Navbar = ({ toggle, items, isWallet, setAddress, address }) => {
    const [scrollNav, setScrollNav] = useState(false)


    const changeNav = () => {
        if (window.scrollY >= 200) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
        <>
            <Nav scrollNav={scrollNav}>
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
                    <ColorBall active={isWallet}/>
                        <AddrText onClick={setAddress}>
                            {isWallet ? address : "0x000000000"}
                        </AddrText>
                    </AddrWrapper>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar