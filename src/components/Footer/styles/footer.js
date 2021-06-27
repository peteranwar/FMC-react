import styled from 'styled-components/macro';

import * as styles from '../../../Global-styles/variables'


export const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0;
  background-color: #121217;
`

export const FooterText = styled.span`
  color: #A5A5A5;

`

export const FooterLink = styled.a`
   color: ${styles.primaryColor};
   ${styles.easeInOut}
   &:hover{
     border-bottom: 1px solid ${styles.primaryColor};
     color: ${styles.primaryColor};
     letter-spacing: .1rem;
   }
`