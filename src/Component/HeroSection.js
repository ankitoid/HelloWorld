import React, { useState, useEffect } from "react";
import bgImg from "../Assets/displayBg.png";

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [fade, setFade] = useState(true); // Fade effect

  const texts = [
    "Smart Deployment",
    "Live Streaming Excellence",
    "Cloud Migration",
    "Networking Solutions",
    "DevOps Automation",
    "Cloud Solutions",
    "SAAS Solutions",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayedText(
        (prevText) => prevText + texts[currentTextIndex][charIndex]
      );
      setCharIndex((prevIndex) => prevIndex + 1);
    }, 100);

    if (charIndex === texts[currentTextIndex].length) {
      clearTimeout(timeoutId);
      setTimeout(() => {
        setFade(false); // Start fading out
        setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setFade(true); // Fade back in with new text
        }, 500); // Fade out duration
      }, 2000); // Wait 2 seconds before starting the next text
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, currentTextIndex]);

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 mt-8 overflow-hidden">
        <img src={bgImg} alt="Background" />
      </div>

      <div className="relative z-10 flex items-center justify-center md:justify-start h-full w-full px-2 md:px-16">
        <div className="py-30 mb-56 pb-5 rounded-lg w-full md:w-1/2 lg:w-1/3 h-auto">
          <h1 className="text-5xl md:text-3xl font-bold mb-6 whitespace-nowrap">
            AI-Synergised Cloud Products <br /> Built for{" "}
            <span
              className={`text-xl md:text-3xl font-bold inline-block border-2 rounded-md px-3 py-1 transition-all duration-500 ease-in-out ${
                fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
              }`}
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f3e5ab, #f4d1ae, #9ec5f1)", // Premium gradient
                borderColor: "#f3e5ab", // Matching gold border for premium look
                transition: "all 0.5s ease-in-out",
          
              }}
            >
              {displayedText}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


