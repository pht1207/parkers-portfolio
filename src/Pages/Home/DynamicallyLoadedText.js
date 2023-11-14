import {React, useEffect, useState} from "react";


function DynamicallyLoadedText(props) {
    const propText = props.inputText;
    const [dynamicText, setDynamicText] = useState("");

    //Runs when the component is first loadedd
    useEffect(() =>{
        for(let i = 0; i <= propText.length; i++){

        const timer = setTimeout(() => {
            setDynamicText(dynamicText+(propText.charAt(i)));
        }, 1000)
    }
    },[dynamicText])

  return (
    <div className="Test">
        <p>{dynamicText}</p>
    </div>
  );
}

export default DynamicallyLoadedText;
