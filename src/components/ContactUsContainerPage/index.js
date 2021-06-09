import React from 'react'
import { ContactUs, HomeAbout } from '../../sharedComponents'

import contactUsImage from "../../images/contact-us-page.png"


const index = () => {
    return (
        <>
            <HomeAbout header="Contact Us" />
            {/* CONTACT US SECTION */}
            <ContactUs colorContent="#3B3B3B"
                imageBgContactUs={contactUsImage}
            >
            </ContactUs>

        </>
    )
}

export default index
