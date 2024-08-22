import React, { useState, useEffect } from "react";
import { FaHome, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Assets/gxiLogo.svg";
 
const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [inSliderSection, setInSliderSection] = useState(false);
 
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };
 
  const handleMouseLeave = () => {
    setOpenIndex(null);
  };
 
  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 0);
 
    const sliderSection = document.getElementById("slider-section");
    if (sliderSection) {
      const rect = sliderSection.getBoundingClientRect();
      setInSliderSection(rect.top <= 0 && rect.bottom >= 0);
    }
  };
 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <div
      className={`${
        isScrolled
          ? inSliderSection
            ? "rounded-lg bg-white/80 shadow-lg"
            : "bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200"
          : "bg-gradient-to-r from-pink-200 via-pink-50 to-blue-200"
      } transition-all duration-300 w-full h-16 fixed top-0 z-50`}
    >
      <nav className="container mx-auto flex justify-between items-center  h-full">
        {/* Logo */}
        <div className="flex items-center h-full mt-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-60 w-60" />
          </Link>
        </div>
       
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4 items-center ml-8">
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/"
              className="flex items-center px-4 py-1"
              onClick={() => handleToggle(0)}
            >
              <FaHome className="mr-2" />
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/product"
              className="flex items-center px-4 py-1 hover:bg-gray-200"
              onClick={() => handleToggle(1)}
            >
              Product
              {openIndex === 1 ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </Link>
            {openIndex === 1 && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded p-4">
                <p>
                  Discover our range of products designed to meet your needs and
                  exceed expectations.
                </p>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/service"
              className="flex items-center px-4 py-1 hover:bg-gray-200"
              onClick={() => handleToggle(2)}
            >
              Service
              {openIndex === 2 ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </Link>
            {openIndex === 2 && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded p-4">
                <p>
                  Explore the variety of services we offer to help your business
                  grow and succeed.
                </p>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/insights"
              className="flex items-center px-4 py-1 hover:bg-gray-200"
              onClick={() => handleToggle(3)}
            >
              Insights
              {openIndex === 3 ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </Link>
            {openIndex === 3 && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded p-4">
                <p>
                  Get the latest insights, trends, and thought leadership from
                  our experts.
                </p>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/contact"
              className="flex items-center px-4 py-1 hover:bg-gray-200 whitespace-nowrap"
              onClick={() => handleToggle(4)}
            >
              Contact Us
              {openIndex === 4 ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </Link>
            {openIndex === 4 && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded p-4">
                <p>
                  Reach out to us for any inquiries, support, or feedback. We're
                  here to help!
                </p>
              </div>
            )}
          </li>
        </ul>
 
        {/* Get Started Link */}
        <div className="flex items-center ">
          <div className="py-5 px-4 md:px-6 hover:rounded-l-full hover:bg-greenCustomColor bg-greenCustomColor2 transition-all duration-300">
            <Link
              to="/get-started"
              className="text-white font-bold text-sm md:text-base"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
 
export default Navbar;
 
 