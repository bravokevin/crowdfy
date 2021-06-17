import styled from "styled-components";
import React from 'react'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-content: space-between;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  clear: both;
  margin-top: -200px;
  padding: 0 3rem 2rem 3rem;
  min-height:50px; 
  background-color: #12072eaa;

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