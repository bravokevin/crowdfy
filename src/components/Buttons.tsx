import styled, {css} from "styled-components";





export const Button = styled.button`
    border-radius: 16px;
    background: ${({ primary }) => (primary ? 'linear-gradient(#dd0df0, #ff12b0)' : 'transparent')};
    white-space: nowrap;
    padding: ${({primary}) =>(primary ? '12px  30px' : "9.5px  28px")};
    color: ${({ light }) => (light ? "#ffff" : "#fff")};
    font-size: 21px;
    margin: 20px;
  	border: ${({primary}) =>(primary ? 'none' : "1px solid #fff") };
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
    }
`