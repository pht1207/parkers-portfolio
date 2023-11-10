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
                websiteName="print.parkert.dev"
                description1="This is a 3D Printing service app" 
                description2="Users input their stl files to the website" 
                description3="The website parses their stl to gcode and presents it to them"
                description4="The user can then add the gcode order to their cart and purchase it using Stripe.js"
                imgSrc="../../images/ProjectsImages/PrintAppScreenshot1.png"/>

                <ProjectComponent 
                title="Transcoding Application"
                websiteName="print.parkert.dev"
                description1="1" 
                description2="2" 
                description3="3"
                description4="4"
                imgSrc="../../images/ProjectsImages/PrintAppScreenshot1.png"/>

        </div>
    );
    }
    
    export default Projects;