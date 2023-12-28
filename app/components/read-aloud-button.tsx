import React, { useEffect, useRef } from 'react';

const ReadAloudButton = () => {
  const playerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.readaloudwidget.com/embed/js/readaloud.min.js';
    script.onload = () => {
      if (playerRef.current && audioRef.current) {
        window.readAloudInit(audioRef.current, playerRef.current);
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    if (playerRef.current && audioRef.current) {
      window.readAloud(audioRef.current, playerRef.current);
    }
  };

  return (
    <div>
      <div id="ra-player" data-skin="https://assets.readaloudwidget.com/embed/skins/default" ref={playerRef}>
        <div className="ra-button" onClick={handleClick}>
          <svg viewBox="0 0 80 100">
            <polygon points="80,50 0,100 0,0 80,50" fill="#484848" />
          </svg>
          Listen to this article
        </div>
      </div>
      <audio
        id="ra-audio"
        data-lang="en-US"
        data-voice="free"
        data-key="20822cb1c7b2aab0cc2efe0a2a3a2863"
        ref={audioRef}
      />
    </div>
  );
};

export default ReadAloudButton;
