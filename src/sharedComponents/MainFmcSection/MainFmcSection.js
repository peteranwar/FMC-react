import React from 'react'
import {  Container } from 'react-bootstrap'
import { CustomRow } from '../../Global-styles'
import { MainFmcSectionContainer } from './styles/mainFmcSection'


const MainFmcSection = ({children, columns, img, header, ...restProps}) => {
    return (
        <MainFmcSectionContainer {...restProps} bgImage={img} >
        <Container>
            <div className="header">{header}</div>
            <CustomRow >
                {columns}
            </CustomRow>
            {children}

        </Container>
        </MainFmcSectionContainer>
    )
}

export default MainFmcSection
