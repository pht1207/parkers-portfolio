import './OpeningText.css'
import { useEffect, useState } from 'react';
import DynamicText from '../../DynamicText';

function OpeningText(props) {

    //const dynamicElementText = ("Welcome to my portfolio!\n My name is, Parker Throneberry. \n\nI like to make things using JavaScript :) \n\nI am a full stack web dev who specializes in engineering web platforms. \n\nI graduate from UNTD in Spring of 2024 with a bachelor's in Information Technology!");
    const dynamicElementText = ("Welcome to my portfolio! \n\nMy name is Parker Throneberry. \n\nCurrently, I am in college, training to be a full stack web developer.\n\nI will be graduating from UNT at Dallas in Spring of 2024 with a bacehlor's in Infromation Technology!\n\nThis website showcases projects I have worked on during my studies.");

    const dynamicElement = <p className='OpeningText'>{dynamicElementText}</p>


    return (
        <div className="OpeningTextDiv">
            <DynamicText customElement={dynamicElement} speed={50}/>
        </div>
    );
    }
    
    export default OpeningText;