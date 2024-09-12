import React, { useState, useEffect } from 'react';
import bgImg from '../Assets/displayBg.png'
const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'AI-Powered Cloud Excellence',
    'Intelligent Deployment with AI Precision',
    'Innovative SAAS Solutions Driven by AI',
    'Effortless Migration with AI Intelligence',
    'Next-Level DevOps Automation with AI',
    'Cutting-Edge AI Security Solutions',
    'AI-Enhanced Network Security',
    'Smart Networking Solutions, AI-Optimized',
    'AI-Driven Live Streaming Excellence',
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
        {/* <video
          src={Tvideo}
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        ></video> */}
        <img src={bgImg}/>
      </div>
      <div className="relative z-10 flex items-center justify-center md:justify-start h-full w-full px-2 md:px-16">
      <div className="   py-30  md:py-30 mb-56 pb-5  rounded-lg md:rounded-r-lg w-full md:w-1/2 lg:w-1/3 h-auto">
          <h1 className="text-3xl md:text-3xl font-bold mb-6 whitespace-nowrap justify-center items-center mr-12">
          Experience AI-Synergised Cloud Products.          </h1>

          <div className="absolute p-4 border-2 border-greenCustomColor rounded-full flex flex-col items-center mr-28">
            <p className="text-xl md:text-2xl font-bold  ">{displayedText}</p>
          </div>

          
        </div>
      </div>

      {/* Contact Us Icon */}
      {/* <div className="absolute right-0 bottom-10 md:bottom-16 transform -translate-y-1/2 mr-4 md:mr-8 py-2 bg-greenCustomColor2 rounded-full">
        <button className="px-4 md:px-5 rounded-full">
          <a href="mailto:contact@example.com" className="text-white text-lg md:text-xl">
            Contact Us
          </a>
        </button>
      </div> */}
    </div>
  );
};

export default HeroSection;