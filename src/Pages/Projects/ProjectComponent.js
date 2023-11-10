import './ProjectComponent.css'
import { useEffect, useState } from 'react';
import PrintAppImage from '../../images/ProjectsImages/PrintAppScreenshot1.png'


function ProjectComponent(props) {
    const imageSource = props.imgSrc;
    const title = props.title;
    const description1 = props.description1;
    const description2 = props.description2;
    const description3 = props.description3;
    const description4 = props.description4;

    const URL = props.URL;

    function imageClick(){
        window.open("https://"+URL)
    }

    return (
        <div className='ProjectComponent'>

            <div className='ProjectDescription'>
                <h1>{title}</h1>
                <ul className='DescriptionList'>
                    <li>{description1}</li>
                    <br/>
                    <li>{description2}</li>
                    <li>{description3}</li>
                    <li>{description4}</li>
                </ul>
            </div>

            <figure className='ProjectFigure'>
                <img src={PrintAppImage} className='ProjectImage' onClick={imageClick}></img>
            </figure>

        </div>
    );
    }
    
    export default ProjectComponent;