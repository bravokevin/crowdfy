import React, { Component } from 'react';
import {Button} from './Buttons';
import styled, { css } from "styled-components";


const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	
`
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content :center;
    /* margin-top: 50vh; */
`
const Title = styled.h1`
color: #ffff;
font-size: 3.5em;
text-align: center;
`
const Subtitle = styled.h2`
color: #f2ebe9;
`
class HomePage extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Title>Fundraise the people and causes that matter to you</Title>
                    {/* <Subtitle>Start helping now</Subtitle> */}
                    <Button>Create campaign</Button>
                    <Button>See campaigns</Button>
                </Wrapper>
            </Container>
        )
    }
}

export default HomePage;