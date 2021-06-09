import styled from 'styled-components/macro';
import * as styles from '../../../Global-styles/variables'
import { Link as ReachRouterLink } from 'react-router-dom';

import arrowLeft from "../../../images/arrow-left.svg"



export const ProjectCardContainer = styled.div`
   margin: 2rem auto;
   width: 100%;
   max-width: 320px;
  &:hover > div {
        transform: translateY(-15px);
        background-color: ${styles.primaryColor};
        img{
                transform: translateY(15px);
            }
}
`
export const ImageContainer = styled.div`
        background-color: #F9D95B;
        border-radius: 20px;
        height: 150px;
        /* width: 300px; */
        ${styles.easeInOut}

        img{
            border-radius: 20px;
            width: 100%;
            height: 100%;
            transform: translateY(-15px);
           ${styles.easeInOut}
        }
`

export const TextCard = styled.p`
 text-align: center;
 margin: 1rem 0;
 height: 70px;
 -webkit-box-orient: vertical;
 display: -webkit-box;
-webkit-line-clamp: 3;
overflow: hidden;
`


export const CustomArrow = styled(ReachRouterLink)`
  display: inline-block;
  color: ${styles.textColor};
  padding-left: 22px;
  position: relative;
  ${styles.easeInOut}

  &:before{
    filter: grayscale(1);
    background-image: url(${arrowLeft});
    left: -3px;
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    top: 8%;
    width: 50px;
    height: 40px;
    ${styles.easeInOut}
  }

  &:hover{
     color: ${styles.primaryColor};
     text-decoration: none;
  &::before{
      filter: none;
    }
  }
`