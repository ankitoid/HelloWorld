import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// import newBg from '../Assets/Home/newBg.png'
const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    "SaaS Applications",
    "Smart Deployment",
    "Cloud Migration",
    "Network Infrastructure",
    "Cyber Security",
    "DevOps Automation",
    "Media Live Streaming",
    "Artificial Intelligence",
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
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000); // Wait 2 seconds before starting the next text
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, currentTextIndex]);

  return (
    <>
      <Helmet>
        <title>GlobalXperts Inc.</title>
      </Helmet>
      <div className="relative h-screen bg-fixed">
        <div className="absolute inset-0 mt-16 overflow-hidden">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/displayBg.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center md:justify-start h-full w-full px-2 md:px-16 bottom-36 lg:bottom-5  2xl:bottom-36">
          <div className=" py-20 mb-20 md:py-30  md:py-30  lg:mb-80 pb-5  rounded-lg md:rounded-r-lg w-full md:w-1/2 lg:w-1/3 h-auto sm:mt-2 lg:mt-14 ">
            <h1 className="text-base font-figtree sm:text-3xl md:text-5xl lg:text-5xl font-bold mb-36 whitespace-nowrap justify-center items-center mr-12 ">
            Discover Services and Solutions for
            </h1>
            <div className="absolute p-3 border-2 bottom-80 mb-8 border-greenCustomColor rounded-full flex flex-col items-center mr-28 lg:mb-7 2xl:bottom-96 2xl:mb-32">
              <p className=" md:text-4xl lg:text-5xl  font-bold sm:text-2xl text-center  font-figtree ">
                {displayedText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
