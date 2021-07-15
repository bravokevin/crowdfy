import styled from 'styled-components'


export const Container = styled.div`
/* background: #0c0c0c; */
display: flex;
justify-content: center;
align-items: center;
padding: 20px 15px;
height: 1100px;
position: relative;
z-index: 1;
`


export const Wrapper = styled.div`
display: flex;
height: 1200px;
width: 100%;
max-width: 1200px;
padding: 20px 20px;
z-index: 1;
justify-content: space-between;
`


export const CampaignImageWrapper = styled.div`
width: 100%;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
height: 450px;
overflow:hidden;
background: #f1f1f6;
@media screen and (max-width:768px){
    height: 350px;
}
`

export const CampaignImage =styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
position: absolute;
border: none;
outline: none;
`

export const CampaignWrapper = styled.div`
background: whitesmoke;
max-width: 1100px;
width: 100%;
height: min-content;
overflow: hidden;
z-index: 1;
display: grid;
justify-content: stretch;
grid-template-rows: 70px 90px;
grid-auto-rows: min-content;
justify-items: center;
align-items: center;
padding: 20px;
margin-top: 240px;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`

export const CampaignTittle = styled.h1`
text-align: center;
`

export const CampaignShortDescription = styled.p`
font-size: 16px;
align-self: flex-start;
color: gray;
`

export const CampaignLongDescription = styled.p`
font-size: 16px;
align-self: flex-start;
`


export const ButtonWrapper =styled.div`
width:300px;
display: flex;
justify-content: center;
margin-top:40px;
align-self: end;
`


//********************TABLE ELEMENTS********************** */

export const ShortFieldsWrapepr = styled.div`
background: whitesmoke;
max-width: 250px;
max-height: 400px;
min-height: 100px;
width: 100%;
z-index: 1;
display: grid;
justify-content: center;
justify-items: center;
align-items: center;
/* padding: 20px; */
margin-top: 240px;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
margin-right:40px;
`



export const ValuesWrapper = styled.div`
justify-self: center;
display: flex;
justify-content: flex-start;
align-items: flex-start;
padding:5px 0px;
height:40px;
`
export const Field = styled.p`
display:inline;
margin-right: 10px;
font-weight:620;
`
export const ValueField = styled.p`
display:inline;
`