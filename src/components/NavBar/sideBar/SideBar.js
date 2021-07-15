import React from 'react'


import {
    SidebarContainer,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    BurgerS
} from './SideBar.styles.js'

import Logo from "../../../Crowdfy.png"
import { NavLogo } from '../Nav.styles.js'


const SideBar = ({ isOpen, toggle, items, open }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <BurgerS open={open} onClick={toggle}>
                    <div />
                    <div />
                    <div />
                </BurgerS>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {items.map((item, index) => (
                        <SidebarLink to={item} onClick={toggle} key={index}>
                            {item}
                        </SidebarLink>
                    ))}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/newCampaign">Create campaign</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
