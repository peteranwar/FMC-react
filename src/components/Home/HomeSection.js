import React from 'react'
import { Col, Container } from 'react-bootstrap'
import {   HeaderHome, HomeImage, HomeContent, HomeParagragh, BtnScroll } from './styles/home'
import {CustomRow, AppBtnLink } from '../../Global-styles/index'
import homeImg from '../../images/home.png'

import * as ROUTES from '../../constants/routes'


const HomeSection = ({aboutTo}) => {
   
    return (
        <Container>
        <CustomRow>
            <Col lg={5}>
                <HomeContent>
                    <HeaderHome>Welcome To FMC</HeaderHome>
                    <HomeParagragh>To deliver the best possible customer service, excellent
                    quality and the most advanced products. BFMC policy is simply to be ‘’ Brilliant by design” we want to be the automatic supplier of first choice to our
                    key customers by providing them with best products and personal service.
                   </HomeParagragh>
                   <BtnScroll className="mr-2"  smooth={true} spy={true} duration={600} exact="true" offset={-100} to={aboutTo}>Read more</BtnScroll>
                   <AppBtnLink dark to={ROUTES.CONTACT_US}>Contact Us</AppBtnLink>
                </HomeContent>
            </Col>
            <Col lg={7}>
                <HomeImage src={homeImg} alt="home photo" />
            </Col>
        </CustomRow>
    </Container>
    )
}

export default HomeSection
