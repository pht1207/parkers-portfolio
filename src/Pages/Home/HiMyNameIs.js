import './HiMyNameIs.css'
import { useEffect, useState } from 'react';

function HiMyNameIs(props) {
    const [inputtedText, setInputtedText] = useState(props.html)
    const [displayedText, setDisplayedText] = useState([])



    return (
        <div className="OpeningTextDiv">
            <p>Hi, my name is</p>
            <h1>Parker Throneberry</h1>
            <h2>I like to make things using JavaScript :)</h2>
            <p>I am a full stack web dev who specializes in engineering web platforms</p>
            <p>I graduate from UNTD in Spring of 2024 with a bachelors in Information Technology!</p>
        </div>
    );
    }
    
    export default HiMyNameIs;