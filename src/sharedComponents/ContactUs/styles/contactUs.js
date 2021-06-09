import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';
import * as styles from '../../../Global-styles/variables'
import { appBtn } from '../../../Global-styles'
import { css } from 'styled-components'


import { Form as FormFormik, Field, ErrorMessage } from 'formik';

import { ImPhone } from "react-icons/im"
import { MdEmail } from "react-icons/md"
import { HiLocationMarker } from "react-icons/hi"


export const ContactUsLinksContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 1.2rem 0;
   @media screen and (max-width: 992px){
      flex-direction: column;
   }
`

export const ContactUsLink = styled.div`
  margin-right: 2rem;
  font-size: 18px;
  display: flex;
  align-items: center;
  &:hover{
                svg{
                    transform: scale(1.3) rotate(360deg);
                    color: ${styles.primaryColor};
                }
                a{
                    color: ${styles.primaryColor};
                }
            }
`
const contactUsLinks = css`
    margin-right: .5rem;
   ${styles.easeInOut}
`
export const PhoneIcon = styled(ImPhone)`
   ${contactUsLinks}
`
export const EmailIcon = styled(MdEmail)`
${contactUsLinks}
`
export const LocationIcon = styled(HiLocationMarker)`
${contactUsLinks}
`

export const HeaderLinkText = styled.span`
    color: ${styles.primaryColor};
`

export const HeaderLink = styled.a`
    color: ${styles.primaryColor};
`


export const SocialIcons = styled.div`
   color: ${props => props.colorContent};
   font-size: 18px;
`


export const IconsSec = styled.div`
   display: flex;
`

export const IconLink = styled.a`
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
    margin: 0 .5rem;
    background-color: ${props => props.darkIcons ? `${styles.textColor}` : `${styles.primaryColor}` };
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid ${props => props.darkIcons ? `${styles.textColor}` : `${styles.primaryColor}` };
    ${styles.easeInOut}
    &:hover{
    transform: scale(1.1) translateY(-10px) ;
    box-shadow: 0 0 8px ${props => props.darkIcons ? `${styles.textColor}` : `${styles.primaryColor}` } ;
    color: ${props => props.darkIcons ? `${styles.textColor}` : `${styles.primaryColor}` };
    background-color: white;
    }
`

export const FormContactUsFormik = styled(FormFormik)`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
`


const InputAndTextarea = css`
        border: none;
        border-bottom: 1px solid  ${props => props.colorContent};
        margin-bottom: .3rem;
        padding-top: 2rem;
        resize: none;
        background-color: transparent;
        &::placeholder{
            color: ${props => props.colorContent};
             ${styles.easeInOut}
        }
        &:focus{
            outline: none;
            border-bottom: 2px solid ${styles.primaryColor};

            &::placeholder{
                transform: translateY(-20px);
                color: ${styles.primaryColor};
            }
        }
`
export const InputContactUs = styled(Field)`
       ${InputAndTextarea}
`
export const TextareaContactUs = styled(Field)`
       ${InputAndTextarea}
`

export const ButtonSubmit = styled.button`
  ${appBtn}
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  width: 25%;
`
export const ErrorMessageFormik = styled(ErrorMessage)`
   font-size: 14px;
   background: #ff000040;
   color: red;
   border-bottom: 1px solid red;
   padding: .3rem;

`
// style DOCTOR IMAGE
export const DoctorImage = styled.div`
 padding: 0.6rem;
    border: 1px dashed rgba(112, 112, 112, 0.6);
    border-radius: 50%;
    width: 350px;
    height: 350px;
    margin: auto;
    @media screen and (max-width: 767px) {
          width: 280px;
          height: 280px;
    }
`

export const ImageBox = styled.div`
            width: 100%;
            height: 100%;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden; 
            background-color: ${props => props.background ? '#e7c054' : null };
`

export const OverlayImage = styled.div`
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(247, 204, 42, 0.6); 
                border-radius: 50%;
                img {
                    transform: scale(0.8); 
                }
`
export const ImageBg = styled.img`
                width: 100%;
                height: 100%;
                object-fit: cover;
`