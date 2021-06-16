import React from 'react'
import * as S from './styles';
import { Button2 } from '../Buttons'
import Logo from "../../Crowdfy.png"
import Nav from "./Nav"



import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

type Props = {
    open: boolean;
}

function RightNav(props: Props) {

    return (
        <Router>

            <S.Ul open={props.open}>
                <S.LogoUl src={Logo} alt={'Logo'} />

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
                        fontWeight: "bold",
                        color: "#b709da"
                    }}
                >
                    <li><Button2>Create campaign</Button2></li>
                </NavLink>
            </S.Ul>


            {/* <Switch>
        <Route exact path="/menu1">
          <S.Icon>
            <img alt="React" />
          </S.Icon>
        </Route>
        <Route exact path="/menu2" >
          <S.Icon>
            <img alt="Megamen" />
          </S.Icon>
        </Route>
        <Redirect to='/menu1' />
      </Switch> */}
        </Router >
    )
}

export default RightNav