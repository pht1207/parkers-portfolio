import ProjectComponent from './ProjectComponent';
import './ProjectsPage.css'
import { useEffect, useState } from 'react';
import '../../images/ProjectsImages/PrintAppScreenshot1.png'

function Projects() {

    return (
        <div className='ProjectsDiv'>
            <h1 className='ProjectHeader'>This is the page that showcases my projects!</h1>
            <ul>
                <ProjectComponent 
                title="3D Printing Application"
                websiteName="print.parkert.dev"
                description1="1" 
                description2="2" 
                description3="3"
                description4="4"
                imgSrc="../../images/ProjectsImages/PrintAppScreenshot1.png"/>
            </ul>

            <ul>
                <ProjectComponent 
                title="Transcoding Application"
                websiteName="print.parkert.dev"
                description1="1" 
                description2="2" 
                description3="3"
                description4="4"
                imgSrc="../../images/ProjectsImages/PrintAppScreenshot1.png"/>
            </ul>

        </div>
    );
    }
    
    export default Projects;