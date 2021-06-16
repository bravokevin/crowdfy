import React, { Component } from 'react';
import {Button} from './Buttons';
import styled, { css } from "styled-components";


const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	font-family: "Lobster";
	
`
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content :center;
    margin-top: 50vh;
`

class HomePage extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Button>Create campaign</Button>
                    <Button>See campaigns</Button>
                </Wrapper>
            </Container>
        )
    }
}

export default HomePage;