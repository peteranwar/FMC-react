import styled from 'styled-components/macro';
import * as styles from '../../../Global-styles/variables'
import { appBtn} from '../../../Global-styles'
import { css } from 'styled-components';

export const AboutUsCardsContainer = styled.div`
   padding: 4rem 0;
   background-color: #F5F5F5;
`

const CardAbout = css`
   padding: 3rem 0;
   text-align: center;
   background-color: white;
   max-height: 500px;
   overflow: hidden;
   border-radius: 20px;
   @media screen and (max-width: 992px) {
                max-height: max-content;
        }

        @media screen and (max-width: 768px) {
          max-height: max-content;
          p{
            max-height: max-content;
           }
        }
         p{
            max-height: 130px;
            overflow-y: auto;
            text-align: center;
            padding: 0rem 1.5rem ;
         }

       img{
            min-height: 180px;
            max-height: 180px;
        }
        h3{
            color: ${styles.primaryColor};
            text-transform: uppercase;
            font-size: 26px;
            margin: 1.5rem 0;
        }
`

export const FmcBorder = styled.div`
   margin: 0 auto 2rem ;
   background-image: linear-gradient(to right, #D0AB47 , #F7CC2A);
   height: 12px;
   width: 120px;
   border-radius: 25px;
`

export const FirstCardAbout = styled.div`
   ${CardAbout}
            transform: translateX(40px);
            z-index: 1;
            @media screen and (max-width: 992px) {
                transform: translateX(0);
                box-shadow: -1px -1px 100px 5px #d3d3d38f;
        }
`
export const LastCardAbout = styled.div`
   ${CardAbout}
   transform: translateX(-40px);
   z-index: 2;
   
   @media screen and (max-width: 992px) {
                transform: translateX(0);
                box-shadow: -1px -1px 100px 5px #d3d3d38f;
        }
`

export const CenterCardAbout = styled.div`
   ${CardAbout}
   max-height: 540px;
   box-shadow: -1px -1px 100px 5px #d3d3d38f;
   transform: translateY(-20px);
   z-index: 5;
   position: relative;
   @media screen and (max-width: 992px) {
                transform: translateY(0);
                max-height: 480px;
               }
               
               @media screen and (max-width: 768px) {
                max-height: max-content;
        }
`
