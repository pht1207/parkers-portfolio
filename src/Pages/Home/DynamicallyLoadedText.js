import {React, useEffect, useState} from "react";


function DynamicallyLoadedText(props) {
    const propText = props.inputText;
    const [dynamicText, setDynamicText] = useState("");

    //Runs when the component is first loaded
    let i = 0;
    useEffect(() =>{
      if(i <= propText.length){
        const timer = setTimeout(() => {
            setDynamicText(dynamicText+(propText.charAt(i)));
            i++;
        }, 1000)
      }
    },[])

  return (
    <div className="Test">
        <p>{dynamicText}</p>
    </div>
  );
}

export default DynamicallyLoadedText;
