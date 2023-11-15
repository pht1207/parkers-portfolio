import React, { useEffect, useState } from 'react';

function DynamicTextArray(props) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const propArray = props.elementArray;
  console.log(propArray)

  const propText = props.elementArray[0].props.children;
  const type = props.elementArray[0].type;
  const className = props.elementArray[0].props.className;





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
