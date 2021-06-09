import React from 'react'
import { AppBtnLink } from '../../Global-styles'
import { Content, CustomHeader, Text } from './styles/fmcContent'

const FmcContent = ({ subTitle  , mainTitle, text, btnText , navTo, darkBtn = true }) => {
    return (
        <Content>
           { mainTitle ? <CustomHeader>
                { subTitle ? <h5>{subTitle}</h5> : null}
                {mainTitle ? <h2>{mainTitle}</h2> : null }
            </CustomHeader> : null}
            <Text >
                {text}
            </Text>
            { btnText ? <AppBtnLink dark={darkBtn} to={navTo}>{btnText}</AppBtnLink> : null}
        </Content>
    )
}

export default FmcContent
