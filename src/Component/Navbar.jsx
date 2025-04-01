import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import gxilogo from "../Assets/gxilogo.png";

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [inSliderSection, setInSliderSection] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSubmenu2, setShowSubmenu2] = useState(false);
  const [showMLSubmenu, setShowMLSubmenu] = useState(false);

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

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

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
      // h-14 and  ${
      //       isScrollingUp ? "translate-y-0" : "-translate-y-full"
      //   } remove to make it cositent
    >
      <nav
        className="container mx-auto flex justify-between items-center h-full"
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo */}
        <div className="flex items-center 2xl:items-start  ">
          <Link to="/" className="flex items-center md:ml-20 2xl:ml-0 ">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/newGxibg.png"
              alt="Logo"
              className="h-14 2xl:h-16  md:h-16 "
            />

            {/* <img src={lg1} alt="Logo" className="md:w-auto md:h-[-28px]]" /> */}
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden  md:hidden lg:flex space-x-4 md:space-x-0 items-center ml-8  ">
          {/* Home link */}
          <li className="relative" onMouseEnter={() => handleMouseEnter(0)}>
            <Link
              to="/" // md:hidden lg:flex add it to md hidden
              className="flex  md:hidden lg:flex items-center px-4 py-1  hover:text-greenCustomColor hover:font-bold  "
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
              className="flex items-center px-5 py-1 hover:text-greenCustomColor hover:font-bold  "
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
                className="absolute top-full mt-4 left-0 shadow-xl p-2 z-10 rounded-sm bg-white "
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #ffffff, #fdf2f8, #bfdbfe)",
                }}
                onMouseLeave={handleMouseLeave}
              >
                <ul>
                  <li
                    className="relative"
                    onMouseEnter={() => setShowSubmenu(true)}
                    onMouseLeave={() => setShowSubmenu(false)}
                  >
                    <Link
                      to="/solutions/cloud"
                      className="p-2 rounded whitespace-nowrap hover:font-bold hover:text-white hover:bg-greenCustomColor2 hover:px-4 flex items-center justify-between"
                    >
                      <span>Cloud & DevOps</span>
                      {showSubmenu ? (
                        <FaChevronUp className="ml-2" />
                      ) : (
                        <FaChevronDown className="ml-2" />
                      )}
                    </Link>

                    <ul
                      className={`absolute top-[-8px] left-full w-80 rounded shadow-xl p-2 transition-all duration-300 ease-in-out transform ${
                        showSubmenu
                          ? "opacity-100 translate-x-0 pointer-events-auto"
                          : "opacity-0 -translate-x-2 pointer-events-none"
                      }`}
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #fdf2f8, #fdf2f8, #dbeafe)",
                      }}
                    >
                      <li>
                        <Link
                          to="/solutions/cloud/aws"
                          onClick={() => setShowSubmenu(false)}
                          className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center"
                        >
                          AWS
                        </Link>
                      </li>

                      {/*
                      <li>
                        <Link
                          to="/solutions/cloud/gcp"
                          onClick={() => setShowSubmenu(false)}
                          className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center"
                        >
                          GCP
                        </Link>
                      </li> */}

                      {/* <li>
                        <Link
                          to="/solutions/cloud"
                          onClick={() => setShowSubmenu(false)}
                          className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center"
                        >
                          Cloud
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          to="/solutions/cloud/devops"
                          onClick={() => setShowSubmenu(false)}
                          className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center"
                        >
                          DevOps
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/solutions/cloud/multi-cloud"
                          onClick={() => setShowSubmenu(false)}
                          className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center"
                        >
                          Multi Cloud
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/solutions/cloud/Hybrid-Cloud"
                          onClick={() => setShowSubmenu(false)}
                          className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center"
                        >
                          Hybrid Cloud
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/solutions/cloud/MOM"
                          onClick={() => setShowSubmenu2(false)}
                        >
                          <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                            Cloud Migration
                          </li>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="relative"
                    onMouseEnter={() => setShowSubmenu2(true)}
                    onMouseLeave={() => setShowSubmenu2(false)}
                  >
                    <Link
                      to="/solution/Cloud-Solutions"
                      className="p-2 rounded whitespace-nowrap hover:font-bold hover:text-white hover:bg-greenCustomColor2 hover:px-4 flex items-center justify-between"
                    >
                      <span>Cloud Solutions</span>
                      {showSubmenu2 ? (
                        <FaChevronUp className="ml-2" />
                      ) : (
                        <FaChevronDown className="ml-2" />
                      )}
                    </Link>

                    <ul
                      className={`absolute top-[-48px] left-full ml-0 w-80 rounded-md shadow-sm p-2 transition-all duration-300 ease-in-out ${
                        showSubmenu2
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-2 pointer-events-none"
                      }`}
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #fdf2f8, #fdf2f8, #dbeafe)",
                      }}
                    >
                    
                      <Link
                        to="/solutions/cloud/TitanX"
                        onClick={() => setShowSubmenu2(false)}
                      >
                        <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                          Titan X
                        </li>
                      </Link>

                      <Link
                        to="/solution/Cloud-Solutions/OmniBot"
                        onClick={() => setShowSubmenu2(false)}
                      >
                        <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                          OmniBot
                        </li>
                      </Link>
                      <Link
                        to="/solutions/cloud/Amazon-EVS"
                        onClick={() => setShowSubmenu2(false)}
                      >
                        <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                          Amazon EVS
                        </li>
                      </Link>
                      <Link
                        to="/service/Managed-Opsis-Streaming"
                        onClick={() => setShowSubmenu2(false)}
                      >
                        <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                          Opsis Streaming
                        </li>
                      </Link>

                      <Link
                        to="/solutions/cloud/Aviation-Cloud"
                        onClick={() => setShowSubmenu2(false)}
                      >
                        <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                          Aviation in the Cloud
                        </li>
                      </Link>

                      <Link
                        to="/solutions/AWSMigrationService"
                        onClick={() => setShowSubmenu2(false)}
                      >
                        <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                          AWS Migration Service
                        </li>
                      </Link>

                      <Link
                        to="/GX-Connect"
                        onClick={() => setShowSubmenu2(false)}
                      >
                        <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                          GX Customer Connect
                        </li>
                      </Link>
                     
                      <Link
                        to="/solutions/cloud/iosa"
                        onClick={() => setShowSubmenu2(false)}
                      >
                        <li className="hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center">
                          Prolific I/O Storage Accelerator
                        </li>
                      </Link>
                    </ul>
                  </li>

                  <li>
                    <Link
                      to="/solutions/collaboration-technologies"
                      className="block p-2 rounded hover:bg-greenCustomColor2 hover:font-bold hover:text-white whitespace-nowrap hover:px-2"
                    >
                      Collaboration Technologies
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

                  {/* <li>
                    <Link
                      to="/solutions/SoftwareDevelopment"
                      className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded whitespace-nowrap hover:px-2"
                    >
                      Software Development
                    </Link>
                  </li> */}

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

                  <li
                    className="relative"
                    onMouseEnter={() => setShowMLSubmenu(true)}
                    onMouseLeave={() => setShowMLSubmenu(false)}
                  >
                    <Link
                      to="/solutions/AI&MlSolutions"
                      className="p-2 rounded whitespace-nowrap  hover:text-white hover:bg-greenCustomColor2 hover:px-2 flex items-center justify-between"
                    >
                      <span>AI & Machine Learning Solutions</span>
                      {showMLSubmenu ? (
                        <FaChevronUp className="ml-2" />
                      ) : (
                        <FaChevronDown className="ml-2" />
                      )}
                    </Link>

                    <ul
                      className={`absolute top-[-8px] left-full w-80 rounded shadow-xl p-2 transition-all duration-300 ease-in-out transform ${
                        showMLSubmenu
                          ? "opacity-100 translate-x-0 pointer-events-auto"
                          : "opacity-0 -translate-x-2 pointer-events-none"
                      }`}
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #fdf2f8, #fdf2f8, #dbeafe)",
                      }}
                    >
                      <li>
                        <Link
                          to="/solutions/smart-transit"
                          onClick={() => setShowMLSubmenu(false)}
                          className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center"
                        >
                          Smart Transit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/AI-Machine-Learning-on-AWS"
                          onClick={() => setShowMLSubmenu(false)}
                          className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center"
                        >
                          AI & Machine Learning on AWS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/solutions/AI&MlSolutions"
                          onClick={() => setShowMLSubmenu(false)}
                          className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded text-center"
                        >
                          AI & Machine Learning Solutions
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li>
                    <Link
                      to="/solutions/Networking"
                      className="block hover:bg-greenCustomColor2 hover:font-bold hover:text-white p-2 rounded whitespace-nowrap hover:px-2"
                    >
                      Networking
                    </Link>
                  </li> */}
                </ul>
              </div>
            )}
          </li>

          {/* Services link */}
          <li className="relative" onMouseEnter={() => handleMouseEnter(2)}>
            <Link
              className="flex items-center px-4 py-1 hover:text-greenCustomColor hover:font-bold"
              onClick={() => handleToggle(2)}
            >
              Services
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
                      to="/contact-us"
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

        {/* Get Started Link  lg: py-4*/}
        <div className="flex items-center md:hidden lg:flex">
          <div className="2xl:ml-0 scroll-px-3 lg:py-5 lg:px-4 md:px-6 md:py-2 rounded-r-none lg:hover:rounded-l-full 2xl:rounded-none hover:bg-blue-700 bg-greenCustomColor2 transition-all duration-300 sm:rounded-md">
            {/* hidden for mobile, visible on sm and larger */}
            <Link
              to="/LoginSignup"
              className="text-white font-bold text-sm md:text-base md:block hidden   "
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <button
          className="lg:hidden p-4 transform transition-transform z-50 duration-300 ease-in-out"
          onClick={toggleMobileMenu}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div
            className={`lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out ${
              showMobileMenu
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col space-y-4 transition-all duration-300 ease-in-out   ">
              <li>
                <Link to="/" className="w-full text-left font-semibold">
                  Home
                </Link>
              </li>

              {/* Industries Mobile Dropdown */}
              <li>
                <button
                  className="w-full text-left font-semibold"
                  onClick={() => handleToggle(1)}
                >
                  Solutions
                </button>
                {openIndex === 1 && (
                  <ul className="pl-4 space-y-2 transition-all duration-300 ease-in-out">
                    <li>
                      {/* Cloud & DevOps Button */}
                      <button
                        className="w-full text-left "
                        onClick={() => setShowSubmenu(!showSubmenu)}
                      >
                        Cloud & DevOps
                      </button>
                      {/* Submenu for Cloud & DevOps */}
                      {showSubmenu && (
                        <ul className="pl-4 space-y-2 transition-all duration-700 ease-in-out overflow-hidden ">
                          <li>
                            <Link to="/solutions/cloud/aws">AWS</Link>
                          </li>

                          {/* <li>
                            <Link to="/solutions/cloud/azure">Azure</Link>
                          </li>
                          <li>
                            <Link to="/solutions/cloud/gcp">GCP</Link>
                          </li> */}

                          {/* <li>
                            <Link to="/solutions/cloud">Cloud</Link>
                          </li> */}

                          <li>
                            <Link to="/solutions/cloud/devops">DevOps</Link>
                          </li>
                          <li>
                            <Link to="/solutions/cloud/multi-cloud">
                              Multi Cloud
                            </Link>
                          </li>
                          <li>
                            <Link to="/solutions/cloud/Hybrid-Cloud">
                              Hybrid Cloud
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      {/* Cloud & DevOps Button */}
                      <button
                        className="w-full text-left "
                        onClick={() => setShowSubmenu2(!showSubmenu2)}
                      >
                        Cloud Solutions
                      </button>
                      {/* Submenu for Cloud & DevOps */}
                      {showSubmenu2 && (
                        <ul className="pl-4 space-y-2 transition-all duration-700 ease-in-out overflow-hidden ">
                          <li>
                            <Link to="/solutions/cloud/MOM">
                              Cloud Migration
                            </Link>
                          </li>
                          <li>
                            <Link to="/solutions/cloud/TitanX">Titan X</Link>
                          </li>
                          <li>
                            <Link to="/solution/Cloud-Solutions/OmniBot">
                              OmniBot
                            </Link>
                          </li>
                          <li>
                            <Link to="/service/Managed-Opsis-Streaming">
                              Opsis Streaming
                            </Link>
                          </li>
                          <li>
                            <Link to="/solutions/cloud/Aviation-Cloud">
                              Aviation in the cloud
                            </Link>
                          </li>
                          <li>
                            <Link to="/GX-Connect">GX Customer Connect</Link>
                          </li>

                          <li>
                            <Link to="/solutions/cloud/iosa">
                              Prolific I/O Storage Accelerator
                            </Link>
                          </li>
                          <li>
                            <Link to="/solution/Cloud-Solutions">
                              Cloud Solutions
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link to="/solutions/collaboration-technologies">
                        Collaboration Technologies
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/data-center-design">
                        Data Center Design/Build
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/solutions/SoftwareDevopment">
                        Software Development
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/solutions/cyber-security">Cyber Security</Link>
                    </li>
                    <li>
                      <Link to="/solutions/small-medium-business">
                        Small and Medium Business
                      </Link>
                    </li>
                    <li>
                      {/* AI & Machine Learning Solutions Button */}
                      <button
                        className="w-full text-left"
                        onClick={() => setShowMLSubmenu(!showMLSubmenu)}
                      >
                        AI & Machine Learning Solutions
                      </button>

                      {/* Submenu for AI & Machine Learning Solutions */}
                      {showMLSubmenu && (
                        <ul className="pl-4 space-y-2 transition-all duration-700 ease-in-out overflow-hidden">
                          <li>
                            <Link to="/solutions/smart-transit">
                              Smart Transit
                            </Link>
                          </li>
                          <li>
                            <Link to="/AI-Machine-Learning-on-AWS">
                              AI & Machine Learning on AWS
                            </Link>
                          </li>
                          <li>
                            <Link to="/solutions/AI&MlSolutions">
                              AI & Machine Learning Solutions
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  className="w-full text-left font-semibold"
                  onClick={() => handleToggle(2)}
                >
                  Services
                </button>
                {openIndex === 2 && (
                  <ul className="pl-4 space-y-2 transition-all duration-300 ease-in-out">
                    <li>
                      <Link to="/service/Field-Services">Field Services</Link>
                    </li>
                    <li>
                      <Link to="/service/Managed-Services">
                        Managed Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/service/Professional-Services">
                        Professional Services
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="w-full text-left font-semibold"
                  onClick={() => handleToggle(3)}
                >
                  Industries
                </button>
                {openIndex === 3 && (
                  <ul className="pl-4 space-y-2 transition-all duration-300 ease-in-out">
                    <li>
                      <Link to="/Industries/Education">Education</Link>
                    </li>
                    <li>
                      <Link to="/Industries/Energy">Energy</Link>
                    </li>
                    <li>
                      <Link to="/Industries/Healthcare">Healthcare</Link>
                    </li>
                    <li>
                      <Link to="/Industries/Financial">Financial</Link>
                    </li>
                    <li>
                      <Link to="/Industries/Retail">Retail</Link>
                    </li>
                    <li>
                      <Link to="/Industries/MediaEnter">
                        Media & Entertainment
                      </Link>
                    </li>

                    <li>
                      <Link to="/Industries/ServiceProvider">
                        Service Provider
                      </Link>
                    </li>
                    <li>
                      <Link to="/Industries/Goverment">Government</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="w-full text-left font-semibold"
                  onClick={() => handleToggle(4)}
                >
                  Insights
                </button>
                {openIndex === 4 && (
                  <ul className="pl-4 space-y-2 transition-all duration-300 ease-in-out">
                    <li>
                      <Link to="/Insights/Blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/Insights/CaseStudies">Case Studies</Link>
                    </li>
                    <li>
                      <Link to="/Insights/Media-Library">Media Library</Link>
                    </li>
                    <li>
                      <Link to="/Insights/Partners">Partners</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  className="w-full text-left font-semibold"
                  onClick={() => handleToggle(6)}
                >
                  Company
                </button>
                {openIndex === 6 && (
                  <ul className="pl-4 space-y-2 transition-all duration-300 ease-in-out">
                    <li>
                      <Link to="/Company/About">About</Link>
                    </li>
                    <li>
                      <Link to="/Careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Get Started for Mobile */}
              <div className="bg-greenCustomColor2 text-white px-6 py-3 text-center rounded">
                <Link to="/LoginSignup">Get Started</Link>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
