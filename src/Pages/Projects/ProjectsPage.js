import ProjectComponent from './ProjectComponent';
import './ProjectsPage.css'
import { useEffect, useState } from 'react';


function Projects() {

    return (
        <div className='ProjectDiv'>
            <h1 className='ProjectHeader'>This is the page that showcases my projects!</h1>
                <ul className='ProjectComponentList'>
                <ProjectComponent
                title="3D Printing Application"
                URL="print.parkert.dev"
                shownURL="print.parkert.dev"
                imgSrc="PrintAppScreenshot.png"

                description1="This is a 3D Printing application developed using React for the front end and Node.js for the backend. This is how it works:"

                title2="File Input: "
                description2="Users input their STL files and select a desired print quality. The file is then sent to the backend."

                title3="Backend Processing: "
                description3="The backend parses the STL file to gcode using prusaslicer, a 3D printing program. Once complete, the backend sends the gcode file to the frontend application."

                title4="3D Preview: "
                description4="Once received, the user can preview their gcode file, see how the file may be printed, how much it will cost them, etc. They may also reparse their file and have it done at a different quality than they originally selected."

                title5="Order and Payment: "
                description5="The user may then add the gcode order to their cart. Once satisfied, the user may checkout and pay for their order via Stripe.js."
                />

                <ProjectComponent 
                title="Transcoding Application"
                URL="transcoder.parkert.dev"
                shownURL="transcoder.parkert.dev"
                imgSrc="TranscoderAppScreenshot.png"

                description1="This application transcodes media to the H.265/HEVC codec, offering more efficient compression on videos encoded in formats such as H.264"

                title2="File Input: "
                description2="Users input and upload their video files. The user may check if the uploaded video is correct, then may click the convert file button to send it to the backend. During the upload, users are given a progress indicator for real time feedback."
                
                title3="Backend Processing: "
                description3="Utilizing HandBrake, a video transcoding program, the backend transcodes the original file to H.265/HEVC codec. Once complete, the backend will send the transcoded video back to the frontend"
                
                title4="Frontend Reception: "
                description4="The user is presented with the transcoded video alongside data showing the file size differences between the original and transcoded file."
                
                title5="Download or Convert More: "
                description5="The user may download the video, or click the 'Convert More' button to complete more conversions."
                />

                <ProjectComponent 
                title="Home Page Application"
                URL="home.parkert.dev"
                shownURL="home.parkert.dev"

                imgSrc="HomepageAppScreenshot.png"

                description1="This is an application that functions as a homepage, shows the weather, and has settings where you can change your name for a customized greeting. This is how it functions:"

                title2="Location/Weather: "
                description2="The default zip code is 75081, the user can enter their own zip code and it will be sent to the backend. The backend fetches geocoordinates of that zipcode using OpenWeather's api, and then fetches the weather data using another api call to OpenWeather."
                title3="Change Background: "
                description3="The background can be changed by clicking the menu icon in the top left and selecting 'Change Background'. An array of backgrounds contained within the server will be rendered and the user may select which one they want. A customized background can also be entered via entering its URL at the top of the window."
                title4="Settings: "
                description4="There is a settings selection the user may use. In it, they may enter their name for a custom greeting, change the temperature view to celsius/fahrenheit, this menu is where their zipcode is changed as well."
                title5="Search bar: "
                description5="There is a search bar the user can use to perform a search using Google."
                />

                <ProjectComponent 
                title="Fitbit Application"
                URL="gallery.fitbit.com/developer/ccfa021f-7862-42a9-bcdf-9756fbba286b"
                shownURL="gallery.fitbit.com"
                imgSrc="FitbitAppScreenshot.png"

                description1="This is an application designed for Fitbit watches that fetches data from an API endpoints and displays it on the screen."

                title2="Application Function: "
                description2="The user inputs their API key into their settings page, and when the app is opened a GET request is made, fetching data from the appropriate API endpoint."
                title3="Application Structure: "
                description3="There are two applications embedded within this project. One runs on the watch, the other runs on the user's smartphone. Both apps communicate with one another."
                title4="Companion App: "
                description4="The companion app is what is included on the smartphone. The API endpoint is generated here, the settings page is rendered and stored here and data is fetched from the API from the companion app. That data is then sent to the smart watch."
                title5="Watch App: "
                description5="Once the smart watch receives the data object from the companion app, it is then processed and presented on the user's smartwatch screen."
                />
            </ul>
        </div>
    );
    }
    
    export default Projects;