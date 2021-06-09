import styled from 'styled-components/macro';



export const MainFmcSectionContainer = styled.div`
 background-image: url(${props => props.bgImage});
 background-size: cover;
 padding: 7rem 0;
 @media screen and (max-width: 992px) {
    padding: 3rem 0;
 }
`