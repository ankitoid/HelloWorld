import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Img1 from "../Assets/solution-explorer-customers.sm.webp";
import Img2 from "../Assets/solution-explorer-customers.sm.webp";
import Img3 from "../Assets/solution-explorer-technology-operations.sm.webp";

const Slider3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      percentage: "200%",
      description:
        "Maximize Network Performance using AI-powered, scalable, and secure infrastructure solutions.",
      img: Img1,
    },
    {
      id: 2,
      percentage: "900%",
      description:
        "Leverage AI-driven Cloud Solutions for unparalleled agility, efficiency, and multi-cloud security.",
      img: Img2,
    },
    {
      id: 3,
      percentage: "200K+",
      description:
        "Revolutionize IT Operations with AI-enhanced 24/7 support and intelligent cost optimization strategies.",
      img: Img3,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Slide changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto mt-16">
      <h1 className="text-3xl md:text-5xl  font-bold text-center mb-8">
        Explore how <span className="italic">transformation</span> comes to{" "}
        <span className="italic">life</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start">
        {/* Left Side Slider */}
        <div className="w-full md:w-2/3 p-4">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="relative bg-black rounded-lg overflow-hidden text-white">
                    <img
                      src={slide.img}
                      alt={`Slide ${slide.id}`}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                    <div className="absolute top-0 left-0 p-8">
                      <h2 className="text-2xl text-greenCustomColor2 md:text-4xl font-bold">
                        {slide.percentage}
                      </h2>
                      <p className="text-lg md:text-xl">{slide.description}</p>
                      <a
                        href="#"
                        className="text-white mt-4 block hover:underline"
                      >
                        Learn more →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Arrows */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              <button
                className="bg-white rounded-full p-2 shadow-md"
                onClick={handlePrev}
              >
                <FaArrowLeft className="text-black" />
              </button>
              <button
                className="bg-white rounded-full p-2 shadow-md"
                onClick={handleNext}
              >
                <FaArrowRight className="text-black" />
              </button>
            </div>
          </div>
          {/* Pagination */}
          <div className="text-center mt-4">
            <span>
              {currentSlide + 1}/{slides.length}
            </span>
          </div>
        </div>

        {/* Right Side Boxes */}
        <div className="w-full md:w-1/3 p-4">
          <div className="mb-4">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Generative AI</h3>
              <p>
                A Catalyst for Transformation. Harness its power to drive
                innovation, unlock new opportunities, and accelerate growth.
              </p>
              <a
                href="/solutions/AI&MlSolutions"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Get ahead →
              </a>
            </div>
          </div>
          <div className="mt-14">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Multi-Cloud Solutions</h3>
              <p>
                Harness the power of AWS, Azure, and Google Cloud with our
                multi-cloud solutions. Achieve unmatched flexibility,
                scalability, and performance while seamlessly managing and
                integrating diverse cloud environments.
              </p>
              <a href="/solutions/cloud/multi-cloud" className="text-blue-500 hover:underline mt-2 block">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider3;
