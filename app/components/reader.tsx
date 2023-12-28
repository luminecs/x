import React, { useEffect } from 'react';

const Reader = ({ text }: { text: string }) => {
  useEffect(() => {
    const speak = () => {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    };
    const button = document.getElementById('speakButton');
    if (button) {
      button.addEventListener('click', speak);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', speak);
      }
    };
  }, []);

  return <button id="speakButton">Listen to this article</button>;
};

export default Reader;
