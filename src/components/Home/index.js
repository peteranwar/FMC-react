import React, { forwardRef, useRef } from 'react'
import { ContainerHome } from './styles/home'
import HomeSection from "./HomeSection";
import { Col, Container } from 'react-bootstrap'

import * as ROUTES from '../../constants/routes'

import logoAbout from "../../images/logo-about.png";
import aboutImage from "../../images/about-bg.png"
import servicesImage from "../../images/service-bg.png"
import projectsBg from "../../images/projects-bg-main.png"
import contactUsImage from "../../images/contact-us-bg.png"

import { ContactUs, FmcContent, MainFmcSection, ProjectCard, ProjectsContainer } from '../../sharedComponents';
import { AppBtnLink } from '../../Global-styles';

import { ProjectsFMC } from "../../Project-data"




const HomeContainer = () => {

    return (
        <>
            <ContainerHome>
                <HomeSection aboutTo="about" />
            </ContainerHome>
            {/* ABOUT SECTION */}
            <MainFmcSection id="about" img={aboutImage}
                columns={
                    <>
                        <Col lg={7} className="my-3 py-3">
                            <FmcContent subTitle="ABOUT US" btnText="More" navTo={ROUTES.ABOUT} mainTitle="Introduction" text="Since its founding in 2019, Brillant Fahad Medical Company (FMC) Company, Inc. has become the leading supplier of medical equipments, Medical Supplies, pharmaceutical supply, Laboratory, Operation, Radiology, Quality and infection control, Wound Management, IT solution, and Etch. products in KSA and outside of KSA, with offices in 4-5 cities. The company expanded for hospital. one hospital will be open on 01/06/2022 and other 3 hospital for planning to open within 5years." />
                        </Col>
                        <Col lg={5} className="my-3 py-3">
                            <img src={logoAbout} alt="" className="w-100" />
                        </Col>
                    </>
                } />
            {/* SERVICES SECTION */}
            <MainFmcSection img={servicesImage}
                columns={
                    <>
                        <Col lg={5} className="my-3 d-none d-lg-block py-3">
                        </Col>
                        <Col lg={7} className="my-3 py-3">
                            <FmcContent subTitle="SErVICE" btnText="More"
                                navTo={ROUTES.SERVICES} mainTitle="Values & Strengths"
                                text="To Deliver The Best Possible Customer Service, Excellent Quality And The Most Advanced Products. BFMC Policy Is Simply To Be ‘’ Brilliant By Design” We Want To Be The Automatic Supplier Of First Choice To Our Key Customers By Providing Them With Best Products And Personal Service.All Types Of Medical Equipment, Medical Supplies, Lab, Radiology Tell Radiology, Quality And Infection Control, Wound Management, Operation, IT Solutions And Etch. BFMC Has A Dedicated Team Of Staff To Carry Out Installation, Commissioning Hospital, Clinic Including All Types Of Operating Theatre Lamps And Isolated Power Systems."
                            />
                        </Col>
                    </>
                }
            />
            {/* PROJECTS SECTION */}
            <ProjectsContainer imageBgProjects={projectsBg} title="Projects"
                headerText="Participating To The Sustainable Development Of Territories Discover our major projects in various sectors, 
            industries, and Client Types. The projects are diversified to cover all developmental and major economic areas with significant investments and commitments"
                columns={
                    <>
                        {ProjectsFMC.slice(0, 3).map(({ id, projectImage, projectName, projectText, linkText, linkTo }) => {
                            return (
                                <Col key={id} lg={4} md={6} >
                                    <ProjectCard projectImage={projectImage} projectName={projectName} linkTo={`projects/${id}`} projectText={projectText} linkText={linkText} />
                                </Col>
                            )
                        })}
                    </>
                }
            >
                <div className="text-center">
                    <AppBtnLink dark to={ROUTES.PROJECTS}>More Projects</AppBtnLink>
                </div>
            </ProjectsContainer>
            {/* CONTACT US SECTION */}
            <ContactUs
               colorContent="#A5A5A5" darkIcons={false}
                imageBgContactUs={contactUsImage}
            >
            </ContactUs>

        </>
    )
}

export default HomeContainer
