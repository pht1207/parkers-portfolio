import React, { useEffect, useState } from 'react';

function DynamicTextArray(props) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [dynamicElementArray, setDynamicElementArray] = useState([]);


  const propText = props.elementArray[0].props.children;
  const type = props.elementArray[0].type;
  const className = props.elementArray[0].props.className;


//Constructor for creating user objects for the users[] array.
function dynamicElementObject(propText, type, className){
  this.propText = propText;
  this.type = type;
  this.className = className;
}

  //Turns all the props into objects on render so they can be accessed
  let propDataArray = [];
  useEffect(() => {
    for(let i = 0; i < props.elementArray.length; i++){
      propDataArray.push(dynamicElementObject(
        props.elementArray[i].props.children,
        props.elementArray[i].type,
        props.elementArray[i].props.className
        ))
    }
  },[])



  useEffect(() => {
    // Check if we still have characters left to add
    if (currentIndex < propText.length) {
      const timer = setTimeout(() => {
        // Add the next character to the displayed text
        setDisplayedText(displayedText + propText.charAt(currentIndex));
        // Move to the next character
        setCurrentIndex(currentIndex + 1);
      }, 50); // Adjust the timing for typing speed

      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, [currentIndex, propText, displayedText]);

  const dynamicComponent = React.createElement(type, null, displayedText);

  return <div className={className}>{dynamicComponent}</div>;
}

export default DynamicTextArray;
