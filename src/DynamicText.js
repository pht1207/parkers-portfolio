import React, { useEffect, useState } from 'react';

function DynamicText(props) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const propText = props.customElement.props.children;
  const type = props.customElement.type;
  const className = props.customElement.props.className;

  useEffect(() => {
    // Check if we still have characters left to add
    if (currentIndex < propText.length) {
      const timer = setTimeout(() => {
        // Add the next character to the displayed text
        setDisplayedText(displayedText + propText.charAt(currentIndex));
        // Move to the next character
        setCurrentIndex(currentIndex + 1);
      }, 10000); // Adjust the timing for typing speed

      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, [currentIndex, propText, displayedText]);

  const dynamicComponent = React.createElement(type, null, displayedText);

  return <div className={className}>{dynamicComponent}</div>;
}

export default DynamicText;
