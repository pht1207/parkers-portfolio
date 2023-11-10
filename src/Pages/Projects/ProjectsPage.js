import ProjectComponent from './ProjectComponent';
import './ProjectsPage.css'
import { useEffect, useState } from 'react';

import PrintAppImage from '../../images/ProjectsImages/PrintAppScreenshot1.png'
import TranscodeAppImage from '../../images/ProjectsImages/TranscodeAppScreenshot1.png'


function Projects() {

    return (
        <div className='ProjectsDiv'>
            <h1 className='ProjectHeader'>This is the page that showcases my projects!</h1>
                <ProjectComponent 
                title="3D Printing Application"
                URL="print.parkert.dev"
                imgSrc="PrintAppScreenshot1.png"

                description1="This is a 3D Printing application developed using React for the front end and Node.js for the backend. This is how it works:" 
                title2="File Input: "
                description2="Users input their stl files and select a desired print quality. The file is then sent to the backend."
                title3="Backend Processing: "
                description3="The backend parses their stl file to gcode and presents the 3D gcode object to them to be viewed."
                title4="3D Preview: "
                description4="The user can then add the gcode order to their cart and purchase it via Stripe.js."
                title5="Order and Payment: "
                description5="The user can then add the gcode order to their cart and purchase it via Stripe.js."

                />

                <ProjectComponent 
                title="Transcoding Application"
                URL="transcoder.parkert.dev"
                imgSrc="TranscodeAppScreenshot1.png"

                description1="This is a 3D Printing application developed using React for the front end and Node.js for the backend. This is how it works:" 
                title2="File Input: "
                description2="Users input their stl files and select a desired print quality. The file is then sent to the backend."
                title3="Backend Processing: "
                description3="The backend parses their stl file to gcode and presents the 3D gcode object to them to be viewed."
                title4="3D Preview: "
                description4="The user can then add the gcode order to their cart and purchase it via Stripe.js."
                title5="Order and Payment: "
                description5="The user can then add the gcode order to their cart and purchase it via Stripe.js."
                
                />
                <ProjectComponent 
                title="Home Page Application"
                URL="home.parkert.dev"
                imgSrc="HomepageAppScreenshot1.png"

                description1="This is a 3D Printing application developed using React for the front end and Node.js for the backend. This is how it works:" 
                title2="File Input: "
                description2="Users input their stl files and select a desired print quality. The file is then sent to the backend."
                title3="Backend Processing: "
                description3="The backend parses their stl file to gcode and presents the 3D gcode object to them to be viewed."
                title4="3D Preview: "
                description4="The user can then add the gcode order to their cart and purchase it via Stripe.js."
                title5="Order and Payment: "
                description5="The user can then add the gcode order to their cart and purchase it via Stripe.js."
                />
                <ProjectComponent 
                title="Transcoding Application"
                URL="print.parkert.dev"
                imgSrc="../../images/ProjectsImages/PrintAppScreenshot1.png"

                description1="This is a 3D Printing application developed using React for the front end and Node.js for the backend. This is how it works:" 
                title2="File Input: "
                description2="Users input their stl files and select a desired print quality. The file is then sent to the backend."
                title3="Backend Processing: "
                description3="The backend parses their stl file to gcode and presents the 3D gcode object to them to be viewed."
                title4="3D Preview: "
                description4="The user can then add the gcode order to their cart and purchase it via Stripe.js."
                title5="Order and Payment: "
                description5="The user can then add the gcode order to their cart and purchase it via Stripe.js."
                />

        </div>
    );
    }
    
    export default Projects;