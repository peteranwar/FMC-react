import styled from 'styled-components/macro';
import * as styles from '../../../Global-styles/variables'
import { appBtn} from '../../../Global-styles'
import { Link as LinkScroll } from 'react-scroll';




export const ContainerHome = styled.div`
      height: 100vh;
      background-color: #F5F5F5;
      display: flex;
      align-items: flex-end;
      margin-bottom: 5rem;

      @media screen and (max-width: 992px) {
          margin-bottom: 0rem;
        }

      @media screen and (max-width: 450px) {
            height: auto;
        }
`

export const HomeContent = styled.div`
      @media screen and (max-width: 450px) {
        padding-top: 9rem;
        }
`

export const HeaderHome = styled.h1`
            color: ${styles.primaryColor};
              font-weight: bold;
`



export const HomeParagragh = styled.p`
  margin-bottom: 2rem ;
`


export const HomeImage = styled.img`
    height: 600px;
    width: 100%;
    @media screen and (max-width: 992px) {
                height: auto;
        }
`
export const BtnScroll = styled(LinkScroll)`
  ${appBtn};
  cursor: pointer;
  
`