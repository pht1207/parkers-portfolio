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
                description3="The backend parses their stl file to gcode, sends it back to the frontend application."

                title4="3D Preview: "
                description4="The user can then view or reparse the gcode file."

                title5="Order and Payment: "
                description5="The user can then add the gcode order to their cart and purchase it via Stripe.js."
                />

                <ProjectComponent 
                title="Transcoding Application"
                URL="transcoder.parkert.dev"
                imgSrc="TranscodeAppScreenshot1.png"

                description1="This application transcodes media to the H.265/HEVC codec, offering lossless compression on videos encoded in formats such as H.264"

                title2="File Input: "
                description2="Users input and upload their video files. The user may check if the uploaded video is correct, then may click the convert file button to send it to the backend. During the upload, users are given a progress indicator for real time feedback."
                
                title3="Backend Processing: "
                description3="Utilizing handbrake, a video transcoding program, the backend transcodes the original file to H.265 codec. Once complete the backend will send the transcoded video back to the frontend"
                
                title4="Frontend Reception: "
                description4="The user is presented with the transcoded video alongside data showing the file size differences between the pre and post-transcoded file."
                
                title5="Download or Convert More: "
                description5="The user may download the video, or click the 'Convert More' button to complete more conversions."
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