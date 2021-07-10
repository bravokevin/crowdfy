import styled from 'styled-components'


export const Container = styled.div`
/* background: #0c0c0c; */
display: flex;
justify-content: center;
align-items: center;
padding: 0 15px;
height: 1400px;
position: relative;
z-index: 1;
`
export const Wrapper = styled.div`
display: flex;
height: 1200px;
width: 100%;
max-width: 1100px;
z-index: 1;
justify-content: center;
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