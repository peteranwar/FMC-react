import React from 'react'
import { CustomArrow, ImageContainer, ProjectCardContainer, TextCard } from './styles/projectCard'

const index = ({projectImage, projectName, projectText,  linkTo}) => {
    return (
        <ProjectCardContainer>
            <ImageContainer>
                <img src={projectImage} alt={projectName} />
            </ImageContainer>
            <TextCard>{projectText}</TextCard>

            <CustomArrow to={linkTo}>Read</CustomArrow>
        </ProjectCardContainer>
    )
}

export default index
