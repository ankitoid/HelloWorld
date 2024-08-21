import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Img1 from '../Assets/solution-explorer-customers.sm.webp';
import Img2 from '../Assets/solution-explorer-customers.sm.webp';
import Img3 from '../Assets/solution-explorer-technology-operations.sm.webp';

const Slider3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      percentage: "200%",
      description: "increase in user-saved properties with AI search",
      img: Img1,
    },
    {
      id: 2,
      percentage: "900%",
      description: "increase in test drives, through the power of AI",
      img: Img2,
    },
    {
      id: 3,
      percentage: "200K+",
      description: "lives impacted by reducing LA County incarceration",
      img: Img3,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Explore how <span className="italic">transformation</span> comes to <span className="italic">life</span>
      </h1>
      <div className="flex justify-center items-start">
        {/* Left Side Slider */}
        <div className="w-full sm:w-2/3 p-4">
          <div className="relative w-full">
            <div className="flex overflow-hidden justify-center items-center">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`flex-none w-full transition-transform duration-500 ease-in-out ${
                    index === currentSlide ? 'block' : 'hidden'
                  }`}
                >
                  <div className="relative bg-black rounded-lg overflow-hidden text-white">
                    <img src={slide.img} alt={`Slide ${slide.id}`} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute top-0 left-0 p-8">
                      <h2 className="text-4xl font-bold">{slide.percentage}</h2>
                      <p className="text-xl">{slide.description}</p>
                      <a href="#" className="text-white mt-4 block hover:underline">Learn more →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Arrows */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              <button className="bg-white rounded-full p-2 shadow-md" onClick={handlePrev}>
                <FaArrowLeft className="text-black" />
              </button>
              <button className="bg-white rounded-full p-2 shadow-md" onClick={handleNext}>
                <FaArrowRight className="text-black" />
              </button>
            </div>
          </div>
          {/* Pagination */}
          <div className="text-center mt-4">
            <span>{currentSlide + 1}/{slides.length}</span>
          </div>
        </div>

        {/* Right Side Boxes */}
        <div className="w-full sm:w-1/3 p-4">
          <div className="mb-4">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Generative AI</h3>
              <p>Gen AI is a Catalyst for Transformation and Change.</p>
              <a href="#" className="text-blue-500 hover:underline mt-2 block">Get ahead of the game →</a>
            </div>
          </div>
          <div>
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">2024 Industry Insights</h3>
              <p>2024 Industry Insights, Trends, and Guidance.</p>
              <a href="#" className="text-blue-500 hover:underline mt-2 block">Download report →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider3;
