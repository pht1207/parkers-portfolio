import React, { useEffect, useState } from 'react';

function TypingText({ text, type }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentText => currentText + text.charAt(currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, 300); // Adjust the timing for typing speed

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return React.createElement(type, null, displayedText);
}

function DynamicallyLoadedText({ elements }) {
  return (
    <div>
      {elements.map((element, index) => (
        <TypingText
          key={index}
          text={element.props.children}
          type={element.type}
        />
      ))}
    </div>
  );
}

export default DynamicallyLoadedText;