import React, { useEffect, useState } from 'react';
import './TypingEffect.css';

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  const [pLoaded, setPLoaded] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);



  return (
    <span className="typing-effect">{displayedText}</span>
  );
};

export default TypingEffect;
