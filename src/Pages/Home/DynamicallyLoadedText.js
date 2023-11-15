import {React, useEffect, useState} from "react";


function DynamicallyLoadedText(props) {
    //const propText = props.inputText;
    const [displayedText, setDisplayedText] = useState("a");
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
        <p>{displayedText}</p>
    </div>
  );
}

export default DynamicallyLoadedText;
