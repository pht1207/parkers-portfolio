import './ContactInfo.css'
import { useEffect, useState } from 'react';
import ProfilePic from '../../images/Me.jpg'
import GitHubIcon from '../../images/github-mark-white.png'
import LinkedInIcon from '../../images/LinkedIn.png'
import ResumeIcon from '../../images/ResumeIcon.png'


function HiMyNameIs(props) {

    function GitHubIconClicked(){
        window.open("https://github.com/pht1207/")
    }
    function LinkedInIconClicked(){
        window.open("https://www.linkedin.com/in/parker-throneberry-91123b144/")
    }
    function ResumeIconClicked(){
        console.log("test")
    }

    return (
        <div className="ContactDiv">
            <img src={ProfilePic} className='ProfilePic'/>
            <div className='IconFlexbox'>
                <img className="GitHubIcon"src={GitHubIcon} onClick={GitHubIconClicked}></img>
                <img className="LinkedInIcon"src={LinkedInIcon} onClick={LinkedInIconClicked}></img>
                <img className="ResumeIcon"src={ResumeIcon} onClick={ResumeIconClicked}></img>
            </div>
        </div>
    );
    }
    
    export default HiMyNameIs;