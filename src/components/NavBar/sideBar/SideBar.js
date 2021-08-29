import {
    SidebarContainer,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    BurgerS, AddrWrapper, AddrText, ColorBall 
} from './SideBar.styles.js'


const SideBar = ({ isOpen, toggle, items, open, isWallet, setAddress, address}) => {
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
            <AddrWrapper>
                    <ColorBall active={isWallet}/>
                        <AddrText onClick={setAddress}>
                            {isWallet ? address : "0x000000000"}
                        </AddrText>
                    </AddrWrapper>
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
