import './HiMyNameIs.css'
import { useEffect, useState } from 'react';

function HiMyNameIs(props) {
    const [inputtedText, setInputtedText] = useState(props.html)
    const [displayedText, setDisplayedText] = useState([])



    return (
        <div className="HeaderDiv">
            <p>Hi, my name is</p>
            <h1>Parker Throneberry</h1>
            <h2>I like making things using javascript</h2>
            <p>I am a full stack web dev who specializes in engineering web platforms</p>
        </div>
    );
    }
    
    export default HiMyNameIs;