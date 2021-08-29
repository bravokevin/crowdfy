import { Link } from "react-router-dom"
import styled from "styled-components"

export const CardContainer = styled.div`
`
export const CardArea = styled.div`
display: flex;
flex-direction: row;
height: 860px;
width: 100%;
flex-wrap: wrap;
justify-content: center;
align-items: center;
top: 0;
right: 0;
margin-top: 180px;
@media screen and (max-width: 1100px){
    margin-top: 120px;
}
`
export const CardWrapper = styled(Link)`
z-index: 999;
display: grid;
grid-auto-rows: minmax(180px, 1fr);
width: 250px;
height: 400px;
text-decoration: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-align: center;
padding: 10px 15px 0px 15px;
font-size: 2rem;
border-radius: 9px;
background: #000;
border: none;
outline: none;
margin: 20px;
&:hover{
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
    }

@media screen and (max-width: 768px){
    width: 200px;
    height: 350px;
}

@media screen and (max-width: 560px){
    width: 300px;
    height: 450px;
}
`

export const ImgContainer= styled.div`
margin-top: -10px;
margin-left: -15px;
margin-right: -15px;
border-radius: 9px 9px 0 0;
max-height: 100%;
background: #d808d1;
`

export const CardImg = styled.img`
width: 100%;
border-radius: 9px 9px 0 0;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
border-color: none;
`

export const CardTextContainer = styled.div`
padding-top: 0;
max-width: 95%;
color: #fff;
`

export const CardTopline = styled.p`
color: #dd0df0;
font-size: 12px;
text-align: left;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const CardTittle = styled.h1`
    margin-bottom: 24px;
    font-size: 18px;
    text-align: left;
    line-height: 1.1;
    font-weight: 600;
    /* color: #000; */


`

export const CardDescription = styled.p`
margin-bottom: 5px;
font-size: 13px;
text-align: left;

`
export const CardFounds = styled.p`
color: #dd0df0;
text-align: left;
font-size: 15px;
margin-top: 10px;
font-weight: 700;
letter-spacing: 1.4px;
/* margin-bottom: -20px; */
`