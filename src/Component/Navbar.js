import React, { useState, useEffect } from "react";
import { FaHome, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import lg from "../Assets/lg1.png";

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [inSliderSection, setInSliderSection] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSubmenu, setShowSubmenu] = useState(false);

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
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 0);

    const sliderSection = document.getElementById("slider-section");
    if (sliderSection) {
      const rect = sliderSection.getBoundingClientRect();
      setInSliderSection(rect.top <= 50 && rect.bottom >= 50);
    }

    // Detect if scrolling up or down
    if (currentScrollY > lastScrollY) {
      setIsScrollingUp(false); // Scrolling down
    } else {
      setIsScrollingUp(true); // Scrolling up
    }

    // Update the last scroll position
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`${
        isScrolled
          ? inSliderSection
            ? "rounded-lg bg-white/80 shadow-lg"
            : "bg-gradient-to-r from-white via-blue-50 to-blue-300"
          : "bg-gradient-to-r from-white via-blue-50 to-blue-300"
      } transition-all duration-300 w-full h-16 fixed top-0 z-50 ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className="container mx-auto flex justify-between items-center h-full"
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={lg} alt="Logo" className="h-20 w-auto" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-4 items-center ml-8">
          {/* Home link */}
          <li className="relative" onMouseEnter={() => handleMouseEnter(0)}>
            <Link
              to="/"
              className="flex items-center px-4 py-1 hover:text-greenCustomColor hover:font-bold"
              onClick={() => handleToggle(0)}
            >
              <FaHome className="mr-2" />
              Home
            </Link>
          </li>

          {/* Solutions dropdown */}
          <li className="relative" onMouseEnter={() => handleMouseEnter(1)}>
            <Link
              to="#"
              className="flex items-center px-4 py-1 hover:text-greenCustomColor hover:font-bold  "
              onClick={() => handleToggle(1)}
            >
              Solutions
              {openIndex === 1 ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </Link>

            {openIndex === 1 && (
              <div
                className="absolute top-full mt-4 left-0 shadow-xl p-2 z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #ffffff, #fdf2f8, #bfdbfe)",
                }}
                onMouseLeave={handleMouseLeave}
              >
                <ul>
                  <li
                    className=" "
                    onMouseEnter={() => setShowSubmenu(true)}
                    onMouseLeave={() => setShowSubmenu(false)}
                  >
                    <Link
                      to="/solutions/cloud"
                      className="block p-2 rounded whitespace-nowrap hover:font-bold hover:text-white hover:bg-greenCustomColor2 hover:px-2"
                    >
                      Cloud & DevOps
                    </Link>

                    {showSubmenu && (
                      <ul
                        className="top-0 left-full ml-2 w-80 rounded shadow-sm "
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #fdf2f8, #fdf2f8, #dbeafe)",
                        }}
                      >
                        <Link
                          to="/solutions/cloud/aws"
                          onClick={() => setShowSubmenu(false)}
                        >
                          <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                            AWS
                          </li>
                        </Link>
                        <Link
                          to="/solutions/cloud/azure"
                          onClick={() => setShowSubmenu(false)}
                        >
                          <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                            Azure
                          </li>
                        </Link>
                        <Link
                          to="/solutions/cloud/gcp"
                          onClick={() => setShowSubmenu(false)}
                        >
                          <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                            GCP
                          </li>
                        </Link>
                        <Link
                          to="/solutions/cloud/devops"
                          onClick={() => setShowSubmenu(false)}
                        >
                          <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                            DevOps
                          </li>
                        </Link>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link
                      to="/solutions/collaboration-technologies"
                      className="block p-2 rounded hover:bg-greenCustomColor2 hover:font-bold hover:text-white whitespace-nowrap hover:px-2"
                    >
                      Collaboration Technologies Design/Build
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/solutions/data-center-design"
                      className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded whitespace-nowrap hover:px-2"
                    >
                      Data Center Design/Build
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/solutions/multi-cloud"
                      className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded whitespace-nowrap hover:px-2"
                    >
                      Multi-Cloud Solutions
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/solutions/cyber-security"
                      className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded whitespace-nowrap hover:px-2"
                    >
                      Cyber Security
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/solutions/small-medium-business"
                      className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded whitespace-nowrap hover:px-2"
                    >
                      Small and Medium Business
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/solutions/GenAI"
                      className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded whitespace-nowrap hover:px-2"
                    >
                      GenAI
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/solutions/Networking"
                      className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded whitespace-nowrap hover:px-2"
                    >
                      Networking
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Service link */}
          <li className="relative" onMouseEnter={() => handleMouseEnter(2)}>
            <Link
              className="flex items-center px-4 py-1 hover:text-greenCustomColor hover:font-bold"
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
              <div
                className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded p-4"
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #fdf2f8, #fdf2f8, #bfdbfe)",
                }}
                onMouseLeave={handleMouseLeave}
              >
                <ul>
                  <li>
                    <Link
                      to="/service/Field-Services"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Field Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/Managed-Services"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Managed Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/Professional-Services"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Professional Services
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Industries link */}
          <li className="relative" onMouseEnter={() => handleMouseEnter(3)}>
            <Link
              className="flex items-center px-4 py-1 hover:text-greenCustomColor hover:font-bold"
              onClick={() => handleToggle(3)}
            >
              Industries
              {openIndex === 3 ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </Link>

            {openIndex === 3 && (
              <div
                className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded p-4"
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #fce7f3, #fdf2f8, #bfdbfe)",
                }}
                onMouseLeave={handleMouseLeave}
              >
                <ul>
                  <li>
                    <Link
                      to="/Industries/Education"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Industries/Energy"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Energy
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Industries/Healthcare"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Industries/Financial" 
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Financial
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Industries/Retail"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Retail
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Industries/MediaEnter"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Media & Entertainment
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Industries/ServiceProvider"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Service Provider
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Industries/Goverment"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Government
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Insights link */}
          <li className="relative" onMouseEnter={() => handleMouseEnter(4)}>
            <Link
              className="flex items-center px-4 py-1 hover:text-greenCustomColor hover:font-bold"
              onClick={() => handleToggle(4)}
            >
              Insights
              {openIndex === 4 ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </Link>
            {openIndex === 4 && (
              <div
                className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded p-4"
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #fbcfe8, #fdf2f8, #bfdbfe)",
                }}
                onMouseLeave={handleMouseLeave}
              >
                <ul>
                  <li>
                    <Link
                      to="/Insights/Blog"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Insights/CaseStudies"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    > 
                      Case Studies
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Insights/Media-Library"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Media Library
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Insights/Partners"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Company Us link */}
          <li className="relative" onMouseEnter={() => handleMouseEnter(6)}>
            <Link
              to="#"
              className="flex items-center px-4 py-1 hover:text-greenCustomColor hover:font-bold whitespace-nowrap"
              onClick={() => handleToggle(6)}
            >
              Company
              {openIndex === 6 ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </Link>
            {openIndex === 6 && (
              <div
                className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded p-4"
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #f9a8d4, #fdf2f8, #bfdbfe)",
                }}
                onMouseLeave={handleMouseLeave}
              >
                <ul>
                  <li>
                    <Link
                      to="/Company/About"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Careers"
                      className="block hover:bg-greenCustomColor2  hover:font-bold hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Careers
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Company/ContactUs"
                      className="block hover:bg-greenCustomColor2  hover:font-bold  hover:text-white p-2 rounded whitespace-nowrap"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
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
