import React from 'react'
import { Col } from 'react-bootstrap'

import { Formik } from 'formik';
// import { useFormik } from 'formik';

import { CustomHeaderCenter } from '../../Global-styles'
import MainFmcSection from '../MainFmcSection/MainFmcSection'
import {
    ContactUsLink, ContactUsLinksContainer, IconLink, EmailIcon, HeaderLink, HeaderLinkText, IconsSec,
    LocationIcon, PhoneIcon, SocialIcons, FormContactUsFormik, InputContactUs, TextareaContactUs, ButtonSubmit, ErrorMessageFormik, DoctorImage, ImageBox, OverlayImage, ImageBg,
} from './styles/contactUs'

import { RiFacebookFill } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa"
import { GrTwitter } from "react-icons/gr"
import { GrSnapchat } from "react-icons/gr"

import LogoLight from '../../images/logo-light.svg'
import DoctorImg from '../../images/doctor-1.jpg'

import * as Yup from 'yup'

const initialValues = {
    name: "",
    email: "",
    title: "",
    message: ""
}

const onSubmit = values => {
    console.log((JSON.stringify(values, null, 5)));
}

// validation schema yup
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Your name should not be empty'),
    email: Yup.string().email('Invalid email address').required('Your email should not be empty'),
    title: Yup.string().required('This field should not be empty'),
    message: Yup.string().required('This field should not be empty'),

});

const ContactUs = ({ imageBgContactUs, colorContent, darkIcons,  ...restProps }) => {

    // console.log("form values", formik.touched);
    return (
        <>
        <MainFmcSection className="py-5" img={imageBgContactUs}
            header={
                <>
                    <CustomHeaderCenter>
                        <h3>
                            contact us
                        </h3>
                    </CustomHeaderCenter>
                    <ContactUsLinksContainer>
                        <ContactUsLink>
                            <PhoneIcon></PhoneIcon>
                            <HeaderLink href="tel:0567669919">0567669919</HeaderLink>
                        </ContactUsLink>

                        <ContactUsLink>
                            <EmailIcon></EmailIcon>
                            <HeaderLink href="mailto:faysal@brillantfahad.sa"> faysal@brillantfahad.sa</HeaderLink>
                        </ContactUsLink>
                        <ContactUsLink>
                            <LocationIcon></LocationIcon>
                            <HeaderLinkText>Al Muftaha, Abha 62521, Saudi Arabia</HeaderLinkText>
                        </ContactUsLink>
                    </ContactUsLinksContainer>
                </>
            }
            columns={
                <>
                    <Col lg={6} className="my-4">
                        <SocialIcons colorContent={colorContent}>
                            <IconsSec>
                                Follow Us
                                <IconLink darkIcons={darkIcons} href=""><RiFacebookFill /></IconLink>
                                <IconLink darkIcons={darkIcons} href=""><FaInstagram /></IconLink>
                                <IconLink darkIcons={darkIcons} href=""><GrTwitter /></IconLink>
                                <IconLink darkIcons={darkIcons} href=""><GrSnapchat /></IconLink>
                            </IconsSec>
                        Enter your information to contact us

                    </SocialIcons>

                        <Formik initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}>

                            <FormContactUsFormik>

                                <InputContactUs  colorContent={colorContent} autoComplete="off" name="name" placeholder="Name *" />
                                <ErrorMessageFormik component="div" name="name" />

                                <InputContactUs colorContent={colorContent} autoComplete="off" name="email" placeholder="E-mail *" />
                                <ErrorMessageFormik component="div" name="email" />

                                <InputContactUs colorContent={colorContent} name="title" placeholder="Title *" />
                                <ErrorMessageFormik component="div" name="title" />

                                <TextareaContactUs colorContent={colorContent} component="textarea" name="message" rows="5" placeholder="Message *">

                                </TextareaContactUs>
                                <ErrorMessageFormik component="div" name="message" />

                                <ButtonSubmit type="submit" dark>Send</ButtonSubmit>

                            </FormContactUsFormik>

                        </Formik>

                    </Col>
                    <Col lg={6} className="my-4">

                        <DoctorImage>
                            <ImageBox>
                                <OverlayImage>
                                    <img src={LogoLight} alt="LogoLight" />
                                </OverlayImage>
                                <ImageBg  src={DoctorImg} alt="Doctor Image"/>
                            </ImageBox>
                        </DoctorImage>
                    </Col>
              
              
                    {/* <!-- google map --> */}
              
                </>
            }
            >

        </MainFmcSection>
            <iframe className="w-100"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.9658205268793!2d42.49156281488804!3d18.21149438758972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDEyJzQxLjQiTiA0MsKwMjknMzcuNSJF!5e0!3m2!1sen!2seg!4v1622362386666!5m2!1sen!2seg" width="600" height="450" style={{border: 0}}  
             allowfullscreen="" loading="lazy"></iframe>
             </>
    )
}

export default ContactUs
