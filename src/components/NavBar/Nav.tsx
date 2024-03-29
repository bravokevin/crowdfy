import { useEffect, useState } from 'react';
import Logo from "../../Crowdfy.png"
import { BurgerS } from './sideBar/SideBar.styles';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem, NavLinks,
    NavBtn, NavBtnLink,
    NavLogoWrapper,
    AddrWrapper,
    AddrText,
    ColorBall
} from './sideBar/Nav.styles'

interface Props {
    toggle: any,
    items: string[],
    isWallet: boolean,
    setAddress: any,
    address: any
}

const Navbar: React.FC <Props> = ({ toggle, items, isWallet, setAddress, address }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 100) {
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
                        <NavLogo src={Logo}></NavLogo>
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
                            <NavItem key={index}>
                                <NavLinks to={`/${item}`}>
                                    {item}
                                </NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/newCampaign">Create campaign</NavBtnLink>
                    </NavBtn>
                    <AddrWrapper>
                        <ColorBall active={isWallet} />
                        <AddrText onClick={setAddress}>
                            {address > 10 ? address.slice(0, 10) : "0x000000000"}
                        </AddrText>
                    </AddrWrapper>
                </NavbarContainer>
            </Nav>


        </>
    )
}

export default Navbar