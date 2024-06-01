import './OpeningText.css'
import { useEffect, useState } from 'react';
import DynamicText from '../../DynamicText';

function OpeningText(props) {

    //const dynamicElementText = ("Welcome to my portfolio!\n My name is, Parker Throneberry. \n\nI like to make things using JavaScript :) \n\nI am a full stack web dev who specializes in engineering web platforms. \n\nI graduate from UNTD in Spring of 2024 with a bachelor's in Information Technology!");
    const dynamicElementText = ("Welcome to my portfolio! \n\nMy name is Parker Throneberry. \n\nCurrently, I am in college, majoring in Information Technology. During my studies, I am putting my focus in web development.\n\nI will be graduating from UNT at Dallas in the Spring of 2024 with my bachelors degree!\n\nThis website showcases projects I have worked on during my studies.");

    const dynamicElement = <p className='OpeningText'>{dynamicElementText}</p>


    return (
        <div className="OpeningTextDiv">
            <DynamicText customElement={dynamicElement} speed={40}/>
        </div>
    );
    }
    
    export default OpeningText;