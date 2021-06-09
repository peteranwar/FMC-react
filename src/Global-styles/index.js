import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';
import * as styles from './variables'
import { Row } from 'react-bootstrap';

import arrowLeft from "../images/arrow-left.svg";
import arrowRight from "../images/arrow-right.svg";
import { css } from 'styled-components'


export const appBtn = css`
border-radius: 25px;
  border: 2px solid ${styles.primaryColor};
  padding: 5px 20px;
  background-color: ${props => props.dark ? `${styles.primaryColor}` : "white"};
  color: ${props => props.dark ? "white" : `${styles.textColor}`};
  ${styles.easeInOut}
  &:hover{
   text-decoration: none;
   border: 2px solid ${styles.primaryColor};
   box-shadow: 0 0 8px ${props => props.dark ? `${styles.primaryColor}` : `${styles.textColor}`} ;
   background: ${props => props.dark ? "white" : `${styles.primaryColor}`};
  color: ${props => props.dark ? `${styles.textColor}` : "white"};
}
&:focus{
  outline: none;
 }
`

export const AppBtnLink = styled(ReachRouterLink)`
 ${appBtn}
`

export const CustomRow = styled(Row)`
           align-items: center;
`


export const CustomHeaderCenter = styled.div`
   margin: .5rem auto;
   width: max-content;
   h3{
    color: ${styles.primaryColor};
    text-transform: uppercase;
    position: relative;
    text-align: center;
    width: 100%;
    display: inline-block;

      &:after,
      &:before{
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        top: 13%;
        width: 50px;
        height: 40px;
      }
      &:after{
        background-image: url(${arrowRight});
        right: -55px;
      }
      &:before{
        background-image: url(${arrowLeft});
        left: -25px;
      }
   }
`

