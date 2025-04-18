import React, { useEffect, useRef, useState } from 'react';
import './Preloader.css';
import typingSoundFile from './type-sound.mp3';

const Preloader = ({ onFinish }) => {
  const [text, setText] = useState('');
  const soundRef = useRef(null);
  const fullText = 'VIKKYMEDIATECH';

  useEffect(() => {
    let i = 0;

    const typeNext = () => {
      if (i < fullText.length) {
        setText(prev => prev + fullText[i]);

        if (soundRef.current) {
          try {
            soundRef.current.currentTime = 0;
            soundRef.current.play();
          } catch (err) {
            console.warn('Sound blocked by browser:', err.message);
          }
        }

        i++;
        setTimeout(typeNext, 150);
      } else {
        setTimeout(() => onFinish(), 800);
      }
    };

    const startTyping = setTimeout(typeNext, 500);
    return () => clearTimeout(startTyping);
  }, [onFinish]);

  return (
    <div className="preloader-wrapper">
      <h1 className="preloader-text">{text}<span className="preloader-cursor">|</span></h1>
      <audio ref={soundRef} src={typingSoundFile} preload="auto" />
    </div>
  );
};

export default Preloader;
