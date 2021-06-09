import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';
import * as styles from '../../../Global-styles/variables'
import { appBtn } from '../../../Global-styles'
import { css } from 'styled-components'

import HomeAboutImg from '../../../images/bghome-pages.png'

export const HomeAboutContainer = styled.div`
    display: flex;
    align-items: center;
    background-image: url(${HomeAboutImg});
    background-size: cover;
    height: 40vh;
    @media screen and (max-width: 500px) {
        height: 25vh;
    }
    @media screen and (max-width: 350px) {
        height: 22vh;
    }

`

export const HomeAboutHeader = styled.h1`
      transform: translate(20vh, 70px);
        color: ${styles.primaryColor};
        font-size: 45px;
        font-weight: bold;
   
        @media screen and (max-width: 500px) {
            font-size: 40px;
            transform: translate(12vh, 50px);
    }

    @media screen and (max-width: 350px) {
            transform: translate(11vh, 40px);
            font-size: 30px;
    }

`

