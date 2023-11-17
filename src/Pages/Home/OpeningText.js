import './OpeningText.css'
import { useEffect, useState } from 'react';
import DynamicText from '../../DynamicText';

function OpeningText(props) {

    const dynamicElementText = ("Hi, my name is, \nParker Throneberry. \n\nI like to make things using JavaScript :) \n\nI am a full stack web dev who specializes in engineering web platforms. \n\nI graduate from UNTD in Spring of 2024 with a bachelors in Information Technology!");

    const dynamicElement = <p className='OpeningText'>{dynamicElementText}</p>


    return (
        <div className="OpeningTextDiv">
            <DynamicText customElement={dynamicElement} speed={50}/>
        </div>
    );
    }
    
    export default OpeningText;