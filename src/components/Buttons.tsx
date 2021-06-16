import styled, {css} from "styled-components";


const ButtonStyles = css`
  padding: 0.35rem 0.85rem;
  text-decoration: none;
  border-radius: 12px;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;
  margin-inline: 4em;
  margin-top: 50vh;
  width: fit-content;
	border: solid 1.8px black; /*#ffffff;*/
	border-radius: 1rem;

  
  @media (max-width: 960px) {
    /* margin: 0 0.5rem 0 0.5rem; */
    text-align: center;
    text-decoration: none;
    padding: 0.25rem 1rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 0.85rem 0.85rem;
  }
  :hover {
    transform: scale(1);
  }

`

const Button = styled.a`
${ButtonStyles}
`

export default Button;