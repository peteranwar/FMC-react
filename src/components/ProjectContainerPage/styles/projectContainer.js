import styled from 'styled-components/macro';
import { css } from 'styled-components';
import * as styles from '../../../Global-styles/variables'
import { appBtn } from '../../../Global-styles'

import { Spinner } from 'react-bootstrap'



export const ProjectContent = styled.div`
background-image: url(${props => props.bgImage});
 background-size: cover;
 padding: 5rem 0;
 @media screen and (max-width: 992px) {
    padding: 2rem 0;
 }
`
export const ProjectImage = styled.div`
    img{
        box-shadow: 6px  6px #F7CC2A;
        border-radius: 15px;
        width: 100%;
        /* height: 400px; */
        object-fit: contain;
    }
`

export const ProjectHead = styled.h1`
        color: ${styles.primaryColor};
        font-weight: bold;
`



export const ProjectText = styled.div`
        margin-bottom: 2.5rem ;
        display: flex;
        align-items: center;
`
export const ProjectDetails = styled.p`
        margin: 2.5rem 0 3rem;
  `


export const CustomSpinner = styled(Spinner)`
   display: flex;
   width: 4rem;
    height: 4rem;
    margin: 15rem auto;
`

export const ProjectIcon = styled.img`
   max-width: 100%;
   margin-right: 1rem;
   
`
/* start project gallery */
export const ProjectGallery = styled.div`
    padding: 3rem 0;
    margin-bottom: 6rem;
`

export const ProjectGalleryHeader = styled.h3`
        color: ${styles.primaryColor};
        font-size: 25px;
        font-weight: bold;
        img{
                max-width: 100%;
                margin-right: 1rem;
        }

`

export const ImageContainerGallery = styled.div`
  margin: 2rem 0;
  text-align: center;
   img.img-small{
          height: 100px;
          ${styles.easeInOut}
          border-radius: 5px;
          &:hover{
                  transform: translateY(-10px) scale(1.1);
                  box-shadow: 0px 15px 20px 0px #cac6bb;
          }
  }
`

