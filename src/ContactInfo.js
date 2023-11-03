import './ContactInfo.css'
import { useEffect, useState } from 'react';
import ProfilePic from './images/Me.jpg'
import GitHubIcon from './images/github-mark-white.png'
import LinkedInIcon from './images/LinkedIn.png'


function HiMyNameIs(props) {

    function GitHubClicked(){
        console.log("test")
    }
    function LinkedInClicked(){
        console.log("test")
    }

    return (
        <div className="ContactDiv">
            <img src={ProfilePic} className='ProfilePic'/>
            <div className='IconFlexbox'>
                <img className="GitHubIcon"src={GitHubIcon} onClick={GitHubClicked}></img>
                <img className="LinkedInIcon"src={LinkedInIcon} onClick={LinkedInClicked}></img>
            </div>
        </div>
    );
    }
    
    export default HiMyNameIs;