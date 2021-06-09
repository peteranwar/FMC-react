import React from 'react'
import { FmcContent, HomeAbout, MainFmcSection } from '../../sharedComponents'


import aboutImage from "../../images/about-bg.png"
import logoAbout from "../../images/logo-about.png";


import LeederShipBg from "../../images/leadership-bg.png";



import ImageCard1 from "../../images/mission.svg";
import ImageCard2 from "../../images/vision.svg";
import ImageCard3 from "../../images/values.svg";

import { Col, Container, Row } from 'react-bootstrap'
import { AboutUsCardsContainer, CenterCardAbout, FirstCardAbout, FmcBorder, LastCardAbout } from './styles/aboutUs';

const index = () => {
    return (
        <>
            <HomeAbout header="About Us" />
            {/* ABOUT MAIN SECTION */}
            <MainFmcSection img={aboutImage}
                columns={
                    <>
                        <Col lg={7} className="my-3 py-3">
                            <FmcContent mainTitle="Introduction"
                                text="Since its founding in 2019, Brillant Fahad Medical Company (FMC) Company, Inc. has become the leading supplier of medical equipments, Medical Supplies, pharmaceutical supply, Laboratory, Operation, Radiology, Quality and infection control, Wound Management, IT solution, and Etch. products in KSA and outside of KSA, with offices in 4-5 cities. The company expanded for hospital. one hospital will be open on 01/06/2022 and other 3 hospital for planning to open within 5years." />
                        </Col>
                        <Col lg={5} className="my-3 py-3">
                            <img src={logoAbout} alt="" className="w-100" />
                        </Col>
                    </>
                } />

            {/* ABOUT US CARDS */}
            <AboutUsCardsContainer>
                <Container>
                    <Row>
                        <Col lg={4} md={6} className="my-3 ">
                            <FirstCardAbout>
                                <img src={ImageCard1} alt="mission photo" />
                                <h3> Our Mission</h3>
                                <FmcBorder />
                                <p >We seek to fulfill our purpose to have a positive impact on people’s health and
                                to relieve their suffering
                                </p>
                            </FirstCardAbout>
                        </Col>

                        <Col lg={4} md={6} className="my-3 ">
                            <CenterCardAbout>
                                <img src={ImageCard2} alt="vision photo" />
                                <h3> Our Vision</h3>
                                <FmcBorder />
                                <p >To deliver the best possible customer service, excellent quality and the most
                                advanced products. BFMC policy is simply to be ‘’ Brilliant by design” we want to be the automatic
                                supplier of first choice to our key customers by providing them with best products and personal service
                                </p>
                            </CenterCardAbout>
                        </Col>
                        <Col lg={4} md={8} className="my-3 mx-auto">
                            <LastCardAbout>
                                <img src={ImageCard3} alt="values photo" />
                                <h3>  Values & Strengths</h3>
                                <FmcBorder />
                                <p>To Deliver The Best Possible Customer Service, Excellent Quality And The Most
                                Advanced Products. BFMC Policy Is Simply To Be ‘’ Brilliant By Design” We Want To Be The Automatic
                                Supplier Of First Choice To Our Key Customers By Providing Them With Best Products And Personal
                                Service.All Types Of Medical Equipment, Medical Supplies, Lab, Radiology Tell Radiology, Quality And
                                Infection Control, Wound Management, Operation, IT Solutions And Etch. BFMC Has A Dedicated Team Of Staff
                                To Carry Out Installation, Commissioning Hospital, Clinic Including All Types Of Operating Theatre Lamps
                                And Isolated Power Systems.</p>
                            </LastCardAbout>
                        </Col>


                    </Row>
                </Container>
            </AboutUsCardsContainer>

            {/* LEDAERSHIP SECTION */}
            <MainFmcSection img={LeederShipBg}
                columns={
                    <>
                        <Col lg={5} className="my-3 d-none d-lg-block py-3">
                        </Col>
                        <Col lg={7} className="my-3 py-3">
                            <FmcContent subTitle="ADMINISTRATION" mainTitle="Leadership"
                                text="Dr. Fahad Hammad Al-Qahtani Owner of the company and President"
                            />
                            <FmcContent
                                text="Dr. Fahad hammad is a neurosurgery Consultant founder of (FMC) Brillant fahad Medical Company Since its founding in 2019. To deliver the best possible customer service, excellent quality and the most advanced Care to our customers . FMC policy is simply to be ‘’ Brilliant by design” we want to be the first choice to our key customers by providing them good care and facility."
                            />
                            <FmcContent
                                text="“The core value and underlying principle leading the operations of (FMC). is to “Build & Create a Better Future With Peace of Mind”. This consistent trait has enabled FMC to communicate assurance to its clients, partners, and employees."
                            />
                            <FmcContent
                                text="As a privately-owned, diversified service company FMC strength is realized through a wide range of activities conducted through several strategic business divisions, all of which are supported by management and operational expertise."
                            />
                            <FmcContent text="A main objective is to match the needs of FMC clients with the highest prospective satisfaction rate while ensuring competitive working conditions for the professional fulfillment of its employees, and the well-being of the community in which they operate through Corporate Social Responsibility and Saudi Citizenship Programs.”"/>
                        </Col>
                    </>
                }
            />
        </>
    )
}

export default index
