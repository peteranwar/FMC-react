import styled from 'styled-components/macro';
import * as styles from '../../../Global-styles/variables'


export const Content = styled.div`

`

export const CustomHeader = styled.div`
margin-bottom: 1rem ;

h2,h5 {
    color: ${styles.primaryColor};
}
h5{
    text-transform: uppercase;
     margin: 0;
}

h2{
    font-weight: bold;
    font-size: 35px;
  }
`

export const Text = styled.p`
margin-bottom: 1.3rem;

`