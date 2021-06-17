import styled from "styled-components";
import React from 'react'

const StyledFooter = styled.footer`
  height: 4.5em;
  background-color: #12072eaa;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0 3rem 2rem 3rem; */
  @media (max-width: 960px) {
    padding: 1rem;
  }
`

const StyledText = styled.p`
  color: #ffff;
`



export const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>© {new Date().getFullYear()} Crowdfy </StyledText>
    </StyledFooter>
  )
}