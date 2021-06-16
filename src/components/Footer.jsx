import styled from "styled-components";
import React from 'react'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.textColor};
  position: relative;
  padding: 0 3rem 2rem 3rem;
  background-color: #12072eaa;
  color: #ffff;
  @media (max-width: 1155px) {
    display: block;
  }
  @media (max-width: 960px) {
    padding: 1rem;
  }
`

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0;
`

const StyledFooterLink = styled.a`
  margin-right: 12px;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <p>© {new Date().getFullYear()} Crowdfy</p>
      <p>Made with love and coffe</p>
    </StyledFooter>
  )
}