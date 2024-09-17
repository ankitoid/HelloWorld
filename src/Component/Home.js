import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SliderSection from "./SliderSection";
import Slider2 from "./Slider2";
import TeamGrid from "./TeamGrid";
import FAQWithImpactFilm from "./FAQSection";
import img1 from "../Assets/AIML.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.jfif";
import img4 from "../Assets/img4.png";
import Footer from "./Footer";

import Icn from "../Assets/awsi.svg";
import Icn2 from "../Assets/google1.png";
import Icn3 from "../Assets/62067060d7b91b0004122615.png";
import Icn4 from "../Assets/git.png";
import Icn5 from "../Assets/jen.png";
import Icn6 from "../Assets/image (14).png";
import Icn7 from "../Assets/kub.png";
import Icn8 from "../Assets/cisco.jpg";
import Icn9 from "../Assets/aris.webp";
import Icn10 from "../Assets/mongo.png";
import Icn11 from "../Assets/ai.jpg";
import Icn12 from "../Assets/openai.png";
import CompaniesLogos from "./CompaniesLogos";
import ContactUs from "../Component/ContactUs";
import ContactTab from "../Component/Contact/ContactSlider";
function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false); // State for contact form visibility

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    setIsContactFormOpen(true);
  };

  const handleMouseLeave = () => {
    setIsContactFormOpen(false);
  };

  return (
    <>
      {showNavbar && <Navbar />}
      <div className="w-full h-screen overflow-x-hidden">
        <HeroSection />
        <Slider2 />
        <SliderSection />
        <TeamGrid />
        <div className="relative overflow-hidden w-full h-16 bg-white mt-14    ">
          <div className="absolute flex whitespace-nowrap animate-slide">
            <div className="flex items-center space-x-4 gap-10 mt-2">
              <img src={Icn} alt="Logo" className="h-12" />
              <img src={Icn2} alt="Logo" className="h-12" />
              <img src={Icn3} alt="Logo" className="h-12" />
              <img src={Icn4} alt="Logo" className="h-12" />
              <img src={Icn5} alt="Logo" className="h-12" />
              <img src={Icn6} alt="Logo" className="h-12" />
              <img src={Icn7} alt="Logo" className="h-12" />
              <img src={Icn8} alt="Logo" className="h-12" />
              <img src={Icn9} alt="Logo" className="h-12 w-32" />
              <img src={Icn10} alt="Logo" className="h-12 w-32" />
              <img src={Icn11} alt="Logo" className="h-12" />
              <img src={Icn12} alt="Logo" className="h-12" />
              {/* Add more images as needed */}
            </div>
          </div>
        </div>
        <FAQWithImpactFilm />
        <div className="w-full bg-greenCustomColor2 p-6 md:p-10 py-10 md:py-16">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-black text-3xl md:text-4xl font-bold font-sans mb-4">
                Be a part of the future.
              </h1>
              <p className="text-black text-base md:text-lg font-semibold mb-6">
                We're passionate about solving human problems and improving the
                world, digitally.
                <br /> We're redefining digital transformation and work culture.
                Join us.
                <br /> Experience cutting-edge AI/ML services that automate and
                enhance solutions for a smarter tomorrow.
              </p>
              <button className="bg-white text-black mt-10 font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full px-4 py-2 transition duration-200 ease-in-out">
                Explore open roles
              </button>
            </div>
            <div className="flex flex-col md:flex-row justify-center text-center w-full items-center mt-10 md:mt-0">
              <div className="flex flex-col items-center mb-5 md:mb-0 md:mr-5">
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden mb-4">
                  <img
                    src={img1}
                    alt="AI/ML Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden">
                  <img
                    src={img2}
                    alt="Profile 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mb-5 md:mb-0 md:ml-5">
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden mb-4">
                  <img
                    src={img3}
                    alt="Profile 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden">
                  <img
                    src={img4}
                    alt="Profile 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactTab
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <CompaniesLogos />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Home;
