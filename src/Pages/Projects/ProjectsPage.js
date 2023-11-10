import ProjectComponent from './ProjectComponent';
import './ProjectsPage.css'
import { useEffect, useState } from 'react';
import '../../images/ProjectsImages/PrintAppScreenshot1.png'

function Projects() {

    return (
        <div className='ProjectsDiv'>
            <h1 className='ProjectHeader'>This is the page that showcases my projects!</h1>
                <ProjectComponent 
                title="3D Printing Application"
                URL="print.parkert.dev"
                description1="This is a 3D Printing application developed using React for the front end and Node.js for the backend. This is how it works:" 
                description2="File Input: Users input their stl files, select a print quality for them, then the files are sent to the backend to be parsed." 
                description3="The backend parses their stl file to gcode and presents the 3D gcode object to them to be viewed."
                description4="The user can then add the gcode order to their cart and purchase it via Stripe.js."
                imgSrc="../../images/ProjectsImages/PrintAppScreenshot1.png"
                />

                <ProjectComponent 
                title="Transcoding Application"
                URL="trasncoder.parkert.dev"
                description1="1" 
                description2="2" 
                description3="3"
                description4="4"
                imgSrc="../../images/ProjectsImages/PrintAppScreenshot1.png"
                />
                <ProjectComponent 
                title="Home Page Application"
                URL="home.parkert.dev"
                description1="1" 
                description2="2" 
                description3="3"
                description4="4"
                imgSrc="../../images/ProjectsImages/PrintAppScreenshot1.png"
                />
                <ProjectComponent 
                title="Transcoding Application"
                URL="print.parkert.dev"
                description1="1" 
                description2="2" 
                description3="3"
                description4="4"
                imgSrc="../../images/ProjectsImages/PrintAppScreenshot1.png"
                />

        </div>
    );
    }
    
    export default Projects;