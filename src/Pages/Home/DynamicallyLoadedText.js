import { useEffect, useState, createElement} from "react";
import React, { Component } from 'react'


function DynamicallyLoadedText(props) {
    //const propText = props.inputText;
    const [displayedText, setDisplayedText] = useState("");
    const propText = props.customElement.props.children;
    const type = props.customElement.type;
    const testComponent = React.createElement(type, null, displayedText);



    //Runs when the component is first loaded
    useEffect(() => {
      delayedForLoop();
    }, []);



    async function delayedForLoop(){
        for(let i = 0; i < 5; i++){
          await delay(1000);
          await setDisplayedText(displayedText => displayedText + "a")
          console.log("a");
      }
    }

      function delay(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    





  return (
    <div className="Test">
        {testComponent}
    </div>
  );
}

export default DynamicallyLoadedText;
