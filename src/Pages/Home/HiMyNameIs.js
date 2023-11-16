import './HiMyNameIs.css'
import { useEffect, useState } from 'react';
import DynamicText from '../../DynamicText';

function HiMyNameIs(props) {
    const [inputtedText, setInputtedText] = useState(props.html)
    const [displayedText, setDisplayedText] = useState([])

    const dynamicElementText = ("Hi, my name is \nParker Throneberry \nI like to make things using JavaScript :) \nI am a full stack web dev who specializes in engineering web platforms \nI graduate from UNTD in Spring of 2024 with a bachelors in Information Technology!");

    const dynamicElement = <p className='test'>{dynamicElementText}</p>


    return (
        <div className="OpeningTextDiv">
            <DynamicText customElement={dynamicElement}/>
            {/*}
            <p>Hi, my name is</p>
            <h1>Parker Throneberry</h1>
            <h2>I like to make things using JavaScript :)</h2>
            <p>I am a full stack web dev who specializes in engineering web platforms</p>
            <p>I graduate from UNTD in Spring of 2024 with a bachelors in Information Technology!</p>*/}
        </div>
    );
    }
    
    export default HiMyNameIs;