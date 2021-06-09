import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BtnLine, Header, HeaderWrapper, HeaderContent, LogoLink, MenuBtn, NavLink, NavLinks, NavLinkItem } from './styles/header'
import logo from '../../images/logo.svg'
import { animateScroll as scroll } from 'react-scroll';

import * as ROUTES from '../../constants/routes'
import { useEffect } from 'react'

const HeaderContainer = () => {
    const [colorChange, setColorchange] = useState(false);
    const [openNav, setOpenNav] = useState(false);


    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);

    }, [])

    const headerClasses = () => {
        return (
            colorChange ? "nav__scroll" : null
        )
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <Header className={headerClasses()}>
            <MenuBtn onClick={() => setOpenNav(!openNav)} className={openNav ? "close" : null}>
                <BtnLine></BtnLine>
                <BtnLine></BtnLine>
                <BtnLine></BtnLine>
            </MenuBtn>
            <Container >
                <HeaderWrapper>
                    <LogoLink to={ROUTES.HOME} onClick={toggleHome}>
                        <img src={logo} alt="" />
                    </LogoLink>
                    <HeaderContent className={openNav ? "open-nav" : null}>
                        <NavLinks >
                            <NavLinkItem>
                                <NavLink activeClassName="isActive" onClick={() => setOpenNav(false)} exact to={ROUTES.HOME}>Home</NavLink>

                            </NavLinkItem>
                            <NavLinkItem>
                                <NavLink activeClassName="isActive" onClick={() => setOpenNav(false)} to={ROUTES.ABOUT}>About us</NavLink>

                            </NavLinkItem>
                            <NavLinkItem>
                            <NavLink activeClassName="isActive" onClick={() => setOpenNav(false)} to={ROUTES.SERVICES}>services</NavLink>

                            </NavLinkItem>
                            <NavLinkItem>
                            <NavLink activeClassName="isActive" onClick={() => setOpenNav(false)} to={ROUTES.PROJECTS}>projects</NavLink>

                            </NavLinkItem>
                            <NavLinkItem>
                            <NavLink activeClassName="isActive" onClick={() => setOpenNav(false)} to={ROUTES.CONTACT_US}>Contact Us</NavLink>

                            </NavLinkItem>
                        </NavLinks>

                    </HeaderContent>
                </HeaderWrapper>

            </Container>
        </Header>
    )
}

export default HeaderContainer
