import ProjectComponent from './ProjectComponent';
import './ProjectsPage.css'
import { useEffect, useState } from 'react';
import '../../images/ProjectsImages/PrintAppScreenshot1.png'

function Projects() {

    return (
        <div className='ProjectsDiv'>
            <h1>These are my projects</h1>
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
            <p>asdasfs</p>
        </div>
    );
    }
    
    export default Projects;