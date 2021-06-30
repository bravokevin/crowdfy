import styled from "styled-components";

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
width: 100%;
height: 300px;
overflow:hidden;
background: #fff;


`
export const FormInputImage = styled.input`
opacity: 0;
width: 110%;
height: 100%;
overflow: hidden;
z-index: -1;
&:hover{
    cursor:pointer;
}
`



export const Form = styled.form`
background: whitesmoke;
max-width: 1200px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
padding: 0px 0px 15px 0px;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`
export const FormShortsFields = styled.div`
background-color: whitesmoke;
border-radius: 15px 15px 0px 0px;
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr;
z-index: 3;
border-bottom: 2px solid #000;

@media screen and (max-width:500px){
    grid-template-columns: 1fr;

}
`
export const ShortFieldsWrapper = styled.div`
padding: 25px 15px;
display: flex;
flex-direction: column;
justify-content: flex-start;

@media screen and (max-width:500px){
    justify-content: center;

}
`
export const FormLabel = styled.label`
margin-left: 3px;
margin-bottom: 5px;
font-size: 14px;
color: blue;
`

export const FormInput = styled.input`
padding: 10px 16px;
margin-bottom: 30px;
border: none;
outline: none;
border-radius: 9px;
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