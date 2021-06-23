import styled from 'styled-components'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow:hidden;
`


export const VideoBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #0000;
opacity: 0.4;
`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 9px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HeroH1 = styled.h1`
color: #FFF;
font-size: 4rem;
text-align: center;
@media screen and (max-width: 768px){
font-size: 2.5rem;
}
`
export const HeroP = styled.p`
margin-top: 15px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 800px;
@media screen and (max-width: 768px){
font-size: 19px;
}
`

export const HeroBtnWrapper = styled.div`
/* margin-top:32px; */
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

@media screen and (max-width:768px){
flex-direction: column;

}
`
