import React from 'react';
import * as S from './styles';
import Logo from "../../Crowdfy.png"

import Burger from './Burger';
import { Button2 } from '../Buttons'


import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";


type Props = {
    children?: any;
}

export default function Navbar(props: Props) {
    return (
            <Router>
                <S.Nav>
                    <S.Logo src={Logo} alt="Logo" />

                    <NavLink to="/menu1"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#b709da"
                        }}
                    >
                        <li>Campaigns</li>
                    </NavLink>
                    <NavLink to="/menu2"
                        activeStyle={{
                            color: "#b709da"
                        }}
                    >
                        <li><Button2>Create campaign</Button2></li>
                    </NavLink>

                    <Burger />
                    {props.children}
                </S.Nav>
            </Router>
         
    )
}