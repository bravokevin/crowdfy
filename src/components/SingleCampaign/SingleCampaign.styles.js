import styled from 'styled-components'


export const Container = styled.div`
/* background: #0c0c0c; */
display: flex;
justify-content: center;
align-items: center;
padding: 20px 15px;
position: relative;
z-index: 1;
height: min-content;
overflow: hidden;
`


export const Wrapper = styled.div`
display: grid;
height: min-content;
overflow: hidden;
width: 100%;
grid-template-columns: 300px 1fr;
max-width: 1100px;
padding: 10px 20px;
justify-content: space-between;
/* justify-content: stretch; */

@media screen and (max-width:768px){
grid-template-columns: 1fr;
justify-content: stretch;


}
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
box-sizing:border-box;
background: whitesmoke;
max-width: 900px;
width: 100%;
height: min-content;
overflow: hidden;
z-index: 1;
display: grid;
justify-content: center;
grid-template-rows: 70px 90px;
grid-auto-rows: min-content;
justify-items: center;
align-items: center;
padding: 20px;
margin-top: 240px;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
@media screen and (max-width:768px){
    max-width: 100%;
    margin-top: 35px;
}
`

export const CampaignTittle = styled.h1`
text-align: center;
`

export const CampaignShortDescription = styled.p`
font-size: 16px;
align-self: flex-start;
color: gray;
white-space: pre-line;
`

export const CampaignLongDescription = styled.p`
font-size: 16px;
align-self: flex-start;
white-space: pre-line;
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
box-sizing:border-box;
background: whitesmoke;
max-width: 280px;
max-height: 320px;
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
@media screen and (max-width:768px){
    max-width: 100%;
    max-height: 300px; 
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
} 

`



export const ValuesWrapper = styled.div`
justify-self: center;
display: flex;
justify-content: flex-start;
align-items: flex-start;
padding:10px 0px;
`
export const Field = styled.p`
display:inline;
margin-right: 10px;
font-weight:620;

`
export const ValueField = styled.p`
display:inline;

`

export const ProgressBar = styled.progress`
/* width: 200px; */

`

