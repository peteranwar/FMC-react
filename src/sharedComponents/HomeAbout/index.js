import React from 'react'
import { HomeAboutContainer, HomeAboutHeader } from './styles/homeAbout'

const index = ({header}) => {
    return (
        <HomeAboutContainer>
            <HomeAboutHeader>{header}</HomeAboutHeader>
        </HomeAboutContainer>
    )
}

export default index
