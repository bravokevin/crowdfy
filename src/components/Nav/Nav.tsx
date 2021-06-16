import React from 'react';
import * as S from './styles';
import Logo from "../../Crowdfy.png"

import Burger from './Burger';

type Props = {
    children?: any;
}

export default function Navbar(props: Props) {
    return (
        <>
            <S.Nav>
                <S.Logo src={Logo} alt="Logo" />
                <Burger />
            </S.Nav>
            {props.children}
        </>
    )
}