import React, { useEffect, useState } from 'react';

function TypingText({ text, type }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullText, setFullText] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentText => currentText + text.charAt(currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, 1000); // Adjust the timing for typing speed

      return () => clearTimeout(timer);
    }
    else{
      setFullText(true);
    }
  }, [currentIndex, text]);

  return React.createElement(type, null, displayedText);
}






function DynamicallyLoadedText({ elements }) {
  console.log(elements)
  const [loadedText, setLoadedText] = useState(elements);

  function createTextArray(){
    
  }

  return (
    <div>
      {elements.map((element, index) => (
        <TypingText
          key={index}
          text={element.props.children}
          type={element.type}
        />
      ))}
      {loadedText}
    </div>
  );
}

export default DynamicallyLoadedText;