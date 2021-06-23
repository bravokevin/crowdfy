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
                        <SidebarLink to={item} onClick={toggle}>
                            {item}
                        </SidebarLink>
                    ))}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="./signIn">Create campaign</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
