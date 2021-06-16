import styled from 'styled-components';

interface INav {
    open: boolean;
    href?: string;
}

export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  /* position: */
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#000' : '#000'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Nav = styled.nav`
  height: 5em;
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8f8;
  align-items: center;
  /* position: relative; */
  @media (max-width: 678px) {
    width: 100%;
    justify-content: center;
  align-items: center;

    
  }
  span {
    font-size: 10px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;

      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }
`

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  /* position: absolute; */
  width: 100%;
  top: 0;
  justify-content: flex-end;
  align-items: center;
  font-size: 17px;
  height: 5em;
  margin-left: 10px;
  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;
    &:hover {
      color: #0c54da;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fdfdfdfa;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;
    li {
      color: #000;
      margin-right: 34px;
    padding: 18px 10px;
  
      &:hover {
        color: #0DADEA;
      }
    }
  }
`

export const Logo = styled.img`
  margin: 20px 50px 20px 7%;
  width: 100px;
  height: 70px;
  object-fit: contain;
  @media (max-width: 768px) {
    margin: 20px 35% ;
    width: 160px;

  }
`

export const LogoUl = styled.img`
  margin: 10px 50px 20px 5%;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 230px;
    object-fit: contain;
  }
`
// export const Icon = styled.div`
//   width: 100vw;
//   height: calc(100vh - 112px);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   img {
//     width: 150px;
//     height: 150px;
//     pointer-events: none;
//     object-fit: contain;
//     @media (prefers-reduced-motion: no-preference) {
//       animation: App-logo-spin infinite 20s linear;
//     }
//   }
//     @keyframes App-logo-spin {
//       from {
//         transform: rotate(0deg);
//       }
//       to {
//         transform: rotate(360deg);
//       }
//   }
// `

