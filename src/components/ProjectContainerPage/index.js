import React, { useEffect, useState } from 'react'
import { HomeAbout, MainFmcSection } from '../../sharedComponents'
import { useParams } from "react-router-dom";
import ModalImage from "react-modal-image";

import projectImageBg from '../../images/project-bg.png'
import CalendarImg from '../../images/calendar.svg'
import LocationImg from '../../images/location(1).svg'
import BedImg from '../../images/bed.svg'
import ImgageGallery from '../../images/image-gallery.svg'


import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { ProjectContent, ProjectHead, ProjectImage, ProjectIcon, CustomSpinner, ProjectText, ProjectDetails, ProjectGallery, ProjectGalleryHeader, ImageContainerGallery } from './styles/projectContainer'

import { ProjectsFMC } from '../../Project-data'


const ProjectContainerPage = () => {
    const [projectFiltred, setProjectFiltred] = useState(null)
    let { id } = useParams();
    console.log(id)

    const projectView = () => {
        ProjectsFMC.filter(project => project.id === +id).map(proFiltred => {
            setProjectFiltred(proFiltred);
            console.log(projectFiltred)

        })
    }
    useEffect(() => {
        projectView()
    }, [projectFiltred])
    return (
        <>
            <HomeAbout header="Projects" />
            { projectFiltred ?
                <>

                    <ProjectContent bgImage={projectImageBg}>
                        <Container>
                            <Row>
                                <Col lg={5} className="my-3 ">
                                    <ProjectImage>
                                        <img src={projectFiltred.projectImage} alt={projectFiltred.projectName} />
                                    </ProjectImage>
                                </Col>
                                <Col lg={7} className="my-3 ">
                                    <ProjectHead>{projectFiltred.projectName}</ProjectHead>
                                    <ProjectDetails>
                                        {projectFiltred.projectDetails}
                                    </ProjectDetails>

                                    <ProjectText>
                                        <ProjectIcon src={CalendarImg} alt="calendar" />
                                        <span>{projectFiltred.date}</span>
                                    </ProjectText>
                                    <ProjectText>
                                        <ProjectIcon src={LocationImg} alt="location" />
                                        <span>{projectFiltred.location}</span>
                                    </ProjectText>
                                    <ProjectText>
                                        <ProjectIcon src={BedImg} alt="BedImg" />
                                        <span>{projectFiltred.numberOfBeds}</span>
                                    </ProjectText>

                                </Col>

                            </Row>
                        </Container>

                    </ProjectContent>

                    <ProjectGallery>
                        <Container>
                            <ProjectGalleryHeader>
                                <img src={ImgageGallery} alt="image-gallery" />
                       Project Gallery
                   </ProjectGalleryHeader>
                            <Row>
                                <Col lg={2} md={4} sm={6}>
                                <ImageContainerGallery>
                                        <ModalImage
                                            small={projectFiltred.projectImage}
                                            large={projectFiltred.projectImage}
                                            alt={projectFiltred.projectName}
                                            className="img-small"
                                            showRotate
                                        />
                                    </ImageContainerGallery>
                                </Col>
                                <Col lg={2} md={4} sm={6}>
                                <ImageContainerGallery>
                                        <ModalImage
                                            small={projectFiltred.projectImage}
                                            large={projectFiltred.projectImage}
                                            alt={projectFiltred.projectName}
                                            className="img-small"
                                            showRotate
                                        />
                                    </ImageContainerGallery>
                                </Col>
                                <Col lg={2} md={4} sm={6}>
                                <ImageContainerGallery>
                                        <ModalImage
                                            small={projectFiltred.projectImage}
                                            large={projectFiltred.projectImage}
                                            alt={projectFiltred.projectName}
                                            className="img-small"
                                            showRotate
                                        />
                                    </ImageContainerGallery>
                                </Col>
                                <Col lg={2} md={4} sm={6}>
                                <ImageContainerGallery>
                                        <ModalImage
                                            small={projectFiltred.projectImage}
                                            large={projectFiltred.projectImage}
                                            alt={projectFiltred.projectName}
                                            className="img-small"
                                            showRotate
                                        />
                                    </ImageContainerGallery>
                                </Col>
                                <Col lg={2} md={4} sm={6}>
                                <ImageContainerGallery>
                                        <ModalImage
                                            small={projectFiltred.projectImage}
                                            large={projectFiltred.projectImage}
                                            alt={projectFiltred.projectName}
                                            className="img-small"
                                            showRotate
                                        />
                                    </ImageContainerGallery>
                                </Col>
                                <Col lg={2} md={4} sm={6}>
                                    <ImageContainerGallery>
                                        <ModalImage
                                            small={projectFiltred.projectImage}
                                            large={projectFiltred.projectImage}
                                            alt={projectFiltred.projectName}
                                            className="img-small"
                                            showRotate
                                        />
                                    </ImageContainerGallery>
                                </Col>

                            </Row>
                        </Container>
                    </ProjectGallery>
                </>
                : <CustomSpinner animation="grow" variant="warning" />}
            {/* {projectFiltred ? 
            
             

             : 

             <div>Loading...</div>
            
            
            } */}


        </>
    )
}

export default ProjectContainerPage
