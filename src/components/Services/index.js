import React from 'react'
import { Col } from 'react-bootstrap'
import { FmcContent, HomeAbout, MainFmcSection } from '../../sharedComponents'
import { DoctorImage, ImageBg, ImageBox, OverlayImage } from '../../sharedComponents/ContactUs/styles/contactUs'

import LogoLight from '../../images/logo-light.svg'
import DoctorImg from '../../images/doctor-1.png'
import DoctorImg2 from '../../images/doctor-1.jpg'


const index = () => {
    return (
        <>
            <HomeAbout header="SERVICES" />

            <MainFmcSection  
                columns={
                    <>
                        <Col xl={4} lg={5}  className="my-2">
                        <DoctorImage>
                            <ImageBox background>
                                <ImageBg  src={DoctorImg} alt="Doctor Image"/>
                            </ImageBox>
                        </DoctorImage>
                        </Col>
                        <Col xl={8} lg={7} className="my-2">
                            <FmcContent mainTitle="Distinguished Medical Services"
                                text="FMC Medical Group, as represented by its higher management, has undertaken on its shoulders the mission of achieving excellent medical services to fulfill the needs of senior customers in a way that accords with their needs and requirements. FMC is also characterized by high flexibility in the provision of services that fits the quantative and qualitative nature of its customers, in search of unique service and diligent perfect work through an integrated system." />
                        </Col>


                        
                      
                        <Col xl={8} lg={7} className="my-2  order-lg-0 order-1">
                            <FmcContent mainTitle="Distinguished Medical Services"
                                text="FMC Medical Group, as represented by its higher management, has undertaken on its shoulders the mission of achieving excellent medical services to fulfill the needs of senior customers in a way that accords with their needs and requirements. FMC is also characterized by high flexibility in the provision of services that fits the quantative and qualitative nature of its customers, in search of unique service and diligent perfect work through an integrated system." />
                        </Col>
                        <Col xl={4} lg={5}  className="my-2 order-lg-1 order-0">
                        <DoctorImage>
                            <ImageBox >
                                <ImageBg  src={DoctorImg2} alt="Doctor Image"/>
                            </ImageBox>
                        </DoctorImage>
                        </Col>
                    </>
                } />

        </>
    )
}

export default index
