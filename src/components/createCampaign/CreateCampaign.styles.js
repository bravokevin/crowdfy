import styled, {css} from "styled-components";

export const Container = styled.div`
/* background: #0c0c0c; */
display: flex;
justify-content: center;
align-items: center;
padding: 0 45px;
height: 1100px;
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

export const FormContent = styled.div`
display: grid;
justify-content: stretch;
justify-items: center;
align-items: center;
width: 100%;
`

export const ImageWrapper = styled.div`
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
export const FormInputImage = styled.input`
display:none;
`
export const FormImageLabel = styled.label`
cursor: pointer;
position:absolute;
margin: 25px 20px 20px 20px;
@media screen and (max-width:600px){
    img{
        width: 40px; 
}
margin: 30px 20px 20px 20px;
}
`


export const Form = styled.form`
background: whitesmoke;
max-width: 1200px;
height: min-content;
width: 100%;
z-index: 1;
display: grid;
padding: 0px 0px 15px 0px;
margin-top: 300px;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`
export const FormShortsFields = styled.div`
width:100%;
max-width:1100px;
background-color: whitesmoke;
border-radius: 15px 15px 0px 0px;
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr;
z-index: 3;
border-bottom: 2px solid rgba(0,0,0,0.3);
@media screen and (max-width: 780px){
    grid-template-columns: 1fr;
}
`
export const FormShortsFieldsPop = styled.div`
width:100%;
max-width:400px;
background-color: whitesmoke;
border-radius: 20px;
display: grid;
justify-content: center;
grid-template-rows: 1fr;
z-index: 3;
padding: 8px 15px;
margin: 0 auto;
border-bottom: 2px solid rgba(0,0,0,0.3);
`
export const ShortFieldWrapper =styled.div`
display: flex;
flex-direction:column;
justify-content: flex-start;
padding: 8px 15px;
text-transform: capitalize;
@media screen and (max-width:780px){
    grid-column-start:1;
}
`
export const FormLabel = styled.label`
margin-left: 3px;
margin-bottom: 5px;
font-size: 14px;
color: blue;
`
export const FormLabelPop = styled.label`
font-size: 16px;
margin-bottom:10px;
color: #000000;
`
export const FormInput = styled.input`
padding: 10px 16px;
margin-bottom: 30px;
border: none;
outline: none;
border-radius: 9px;
`
export const Image = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
position: absolute;
background: black;
border: none;
outline: none;
`


export const FormLargeFields = styled.div`
background-color: whitesmoke;
display: flex;
flex-direction: column;
justify-content: stretch;
`

export const LargerFieldsWrapper= styled.div`
padding: 25px 30px;
display: flex;
font-family: Segoe UI;
flex-direction: column;
justify-content: stretch;
`

export const TextTittle = styled.input`
font-size: 30px;
background: none;
outline: none;
border: none;
font-weight: bold;
align-self: flex-start;
width: 100%;
word-wrap: break-word;
word-break: break-all;
word-break: break-word;
/* padding: 0px 10px; */
margin: 5px 0px 0px;
box-sizing: border-box;
`

export const TextDescription = styled.textarea`
font-size: 18px;
font-family: Segoe UI;
background: none;
outline: none;
word-wrap: break-word;
border: none;
align-self: flex-start;
resize: none;
width: 100%;
height: 95px;
box-sizing: border-box;
`

export const TextArea = styled.textarea`
font-size: 18px;
background: none;
outline: none;
word-wrap: break-word;
border: none;
font-family: Segoe UI;
align-self: flex-start;
resize: none;
margin: 20px 0px 0px;
width: 100%;
height: 800px;
box-sizing: border-box;
`

export const TopLine = styled.h1`
text-align: center;
`

export const ButtonWrapper =styled.div`
width:300px;
display: flex;
justify-content: center;
margin:0 auto;
`

export const Error = styled.p`
 font-size: 0.8rem;
  margin-top: -27px;
  margin-left:5px;
  text-transform: none;
  color: #f00e0e;
`