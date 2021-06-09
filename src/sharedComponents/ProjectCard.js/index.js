import React from 'react'
import { CustomArrow, ImageContainer, ProjectCardContainer, TextCard } from './styles/projectCard'

const index = ({projectImage, projectName, projectText, linkText, linkTo}) => {
    return (
        <ProjectCardContainer>
            <ImageContainer>
                <img src={projectImage} alt={projectName} />
            </ImageContainer>
            <TextCard>{projectText}</TextCard>

            <CustomArrow to={linkTo}>{linkText}</CustomArrow>
        </ProjectCardContainer>
    )
}

export default index
