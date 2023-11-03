import './HiMyNameIs.css'
import { useEffect, useState } from 'react';

function HiMyNameIs(props) {
    const [inputtedText, setInputtedText] = useState(props.html)
    const [displayedText, setDisplayedText] = useState([])



    return (
        <div className="HeaderDiv">
            <p>Hi, my name is</p>
            <h1>Parker Throneberry</h1>
        </div>
    );
    }
    
    export default HiMyNameIs;