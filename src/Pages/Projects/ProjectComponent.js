import './ProjectComponent.css'
import { useEffect, useState } from 'react';
import PrintAppImage from '../../images/ProjectsImages/PrintAppScreenshot1.png'
import TranscodeAppImage from '../../images/ProjectsImages/TranscodeAppScreenshot1.png'


function ProjectComponent(props) {
    const imageSource = "/images/ProjectsImages/"+props.imgSrc;

    const title = props.title;
    const description1 = props.description1;
    
    const title2 = props.title2;
    const description2 = props.description2;
    const title3 = props.title3;
    const description3 = props.description3;
    const title4 = props.title4;
    const description4 = props.description4;
    const title5 = props.title5;
    const description5 = props.description5;

    const URL = props.URL;

    function imagePicker(){
        if(props.imgSrc === 2){
            
        }
    }


    function imageClick(){
        window.open("https://"+URL)
    }

    return (
        <div className='ProjectComponent'>

            <div className='ProjectDescription'>
                <h1>{title}</h1>
                <br/>
                <ul className='DescriptionList'>
                    <li><strong>{description1}</strong></li>
                    <li><strong>{title2}</strong>{description2}</li>
                    <li><strong>{title3}</strong>{description3}</li>
                    <li><strong>{title4}</strong>{description4}</li>
                    <li><strong>{title5}</strong>{description5}</li>
                </ul>
            </div>

            <figure className='ProjectFigure'>
                <img src={imageSource} className='ProjectImage' onClick={imageClick}></img>
            </figure>

        </div>
    );
    }
    
    export default ProjectComponent;