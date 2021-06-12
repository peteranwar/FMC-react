import React from 'react'
import { HomeAbout, ProjectCard, ProjectsContainer } from '../../sharedComponents'


import projectsBg from "../../images/projects-bg.png"
import { Col } from 'react-bootstrap'
import { ProjectsFMC } from "../../Project-data"


const index = () => {
    return (
        <>
        <HomeAbout header="Projects" />
        <ProjectsContainer imageBgProjects={projectsBg} 
                headerText="Participating To The Sustainable Development Of Territories Discover our major projects in various sectors, 
            industries, and Client Types. The projects are diversified to cover all developmental and major economic areas with significant investments and commitments"
                columns={
                    <>
                        {ProjectsFMC.map(({ id, projectImage, projectName, projectText,  linkTo }) => {
                            return (
                                <Col key={id} lg={4} md={6} >
                                    <ProjectCard projectImage={projectImage} projectName={projectName} linkTo={`projects/${id}`} projectText={projectText}  />
                                </Col>
                            )
                        })}
                    </>
                }
            >
               
            </ProjectsContainer>
        </>
    )
}

export default index
