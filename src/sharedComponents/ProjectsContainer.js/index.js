import React from 'react'
import { Col } from 'react-bootstrap'
import { MainFmcSection } from '..'
import { CustomHeaderCenter } from '../../Global-styles'


const index = ({children, columns, imageBgProjects, header, title, headerText, ...restProps }) => {
   
    return (
        <MainFmcSection className="py-5" img={imageBgProjects}
            header={
                <>
                    { title ? <CustomHeaderCenter>
                        <h3>
                            {title}
                        </h3>
                    </CustomHeaderCenter> : null }
                    <p className="text-center">{headerText}</p>
                </>
            }
            columns={columns}
        >
          {children}
        </MainFmcSection>
    )
}

export default index
