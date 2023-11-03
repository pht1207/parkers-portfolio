import './ContactInfo.css'
import { useEffect, useState } from 'react';
import ProfilePic from './images/Me.jpg'

function HiMyNameIs(props) {
    const [inputtedText, setInputtedText] = useState(props.html)



    return (
        <div className="ContactDiv">
          <img src={ProfilePic} className='ProfilePic'/>
        </div>
    );
    }
    
    export default HiMyNameIs;