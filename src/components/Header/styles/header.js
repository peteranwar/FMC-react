import styled from 'styled-components/macro';
import { NavLink as ReachRouterLink } from 'react-router-dom';

import * as styles from '../../../Global-styles/variables'

export const Header = styled.header`
  position: fixed;
  padding: 1rem 0;
  background: transparent;
  z-index: 222;
  width: 100%;
  height: 10vh;
  top: 0;
  &.nav__scroll {
  background-color: rgba(255, 255, 255, 0.719);
  height: 90px;
  width: 100%;
  box-shadow: 0 0 8px #695506;
}
@media (max-width: 1100px) {
     flex-direction: column;
     align-items: center;
  }
`;

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const HeaderContent = styled.div`
     justify-content: center;
     display: flex;
     align-items: center;
     width: 50%;

  @media screen and (max-width: 1100px) {
    background-color: #ffffffc4;
     height: 100vh;
     position: fixed;
     z-index: 3;
     width: 100vw;
     top: 0;
     right: 0;
     ${styles.easeInOut}
     transform-origin: top right;
     transform: translateX(100%);
     transition-delay:.4s;

     &.open-nav{
       transform: translateX(0);
     }
  }
`;

export const LogoLink = styled(ReachRouterLink)` /// //// /////
    width: 30%;
    img{
      width: 150px;
      ${styles.easeInOut}
      &:hover {
        transform: scale(1.1);
      }
    }
    @media (max-width: 1100px) {
      position: fixed;
      right: 2.1rem;
      top: 1.5rem;
      width: auto;
     img{
       width: 100px;
     }
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  align-items: center;
  width: 100%;
  padding: 0;

  @media (max-width: 1100px) {
     flex-direction: column;
     opacity: 0;
     transform-origin: right;
     ${styles.easeInOut}
     transition-delay: 1s;
     transition-delay:.2s;


     .open-nav & {
      opacity: 1;
      transform-origin: right;
     }
  }
`
export const NavLinkItem = styled.li`
@media (max-width: 1100px) {
      margin-bottom: 1rem;
  }
`
export const NavLink = styled(ReachRouterLink)` /// //// /////
          color: ${styles.textColor};
          text-transform: capitalize;
          font-size: 18px;
          ${styles.easeInOut}
          &:hover{
            color: ${styles.primaryColor};
            text-decoration: none;
          }
          &.isActive{
            pointer-events: none;
            border-radius: 25px;
            border: 2px solid ${styles.primaryColor};
            background-color: ${styles.primaryColor};
            color: white ;
            padding: 0 1rem;
  }
  
  
`;

//////
export const MenuBtn = styled.div`
    display: none; ////////////////////////////////////
    position: absolute;
    position: fixed;
    left: 2.1rem;
    top: 2.1rem;
    cursor: pointer;
    z-index: 9;
    ${styles.easeInOut}
    @media (max-width: 1100px) {
      display: block;
       // rotate into x with menu line
    &.close {
      transform: rotate(180deg);
  
      div {
        // rotate LINE 1
        &:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        // hide LINE 2
        &:nth-child(2) {
          opacity: 0;
        }
        // rotate LINE 3
        &:nth-child(3) {
          transform: rotate(-45deg) translate(11px, -9px);
        }
      }
    }
  }
`
export const BtnLine = styled.div`
      width: 1.9rem;
      height: 0.3rem;
      margin: 0 0 0.4rem 0;
      background: ${styles.primaryColor};
      ${styles.easeInOut}
`