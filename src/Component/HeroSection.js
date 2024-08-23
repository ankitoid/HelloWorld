import React, { useState, useEffect } from 'react';
import Tvideo from '../Assets/Tvideo.mp4';
import { FaPhone } from 'react-icons/fa';
const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Streaming Data',
    'Analyzing Patterns',
    'Real-Time Updates',
    'Secure and Fast',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayedText((prevText) => prevText + texts[currentTextIndex][charIndex]);
      setCharIndex((prevIndex) => prevIndex + 1);
    }, 100);

    if (charIndex === texts[currentTextIndex].length) {
      clearTimeout(timeoutId);
      setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000); // Wait 2 seconds before starting the next text
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, currentTextIndex]);

  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 mt-8 overflow-hidden">
        <video
          src={Tvideo}
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        ></video>
      </div>
      <div className="relative z-10 flex items-center justify-center md:justify-start h-full w-full px-4 md:px-16">
      <div className="bg-gradient-to-br from-pink-200 via-pink-100 bg-opacity-70 p-8 py-30  md:py-30 mt-16 pb-5 rounded-lg md:rounded-r-lg w-full md:w-1/2 lg:w-1/3 h-auto">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 whitespace-nowrap justify-center">
            Network Uncluttered
          </h1>

          <div className="p-2 border-2 border-greenCustomColor justify-center flex flex-col items-center rounded-full">
            <p className="text-xl md:text-2xl font-bold">{displayedText}</p>
          </div>

          <p className="text-base md:text-lg mb-6 mt-5 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          </p>
        </div>
      </div>

      {/* Contact Us Icon */}
      <div className="absolute right-0 bottom-10 md:bottom-16 transform -translate-y-1/2 mr-4 md:mr-8 py-2 bg-red-600 rounded-full">
        <button className="px-4 md:px-5 rounded-full">
          <a href="mailto:contact@example.com" className="text-white text-lg md:text-xl">
            Contact Us
          </a>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
