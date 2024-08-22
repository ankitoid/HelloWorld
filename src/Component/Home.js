import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SliderSection from "./SliderSection";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import TeamGrid from "./TeamGrid";
import FAQWithImpactFilm from "./FAQSection";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.jfif";
import img4 from "../Assets/img4.png";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className=" w-full h-screen">
        <HeroSection />
        <Slider2 />
        <SliderSection />
        <Slider3 />
        <TeamGrid />
        <div className=" w-full">
          <div className="relative w-full py-12 text-center font-bold">
            {/* Heading */}
            <h1 className=" w-full text-center font-bold text-7xl p-10">
              We modernize
            </h1>
            {/* Text Boxes */}
            <div className="flex gap-5  justify-center mx-5 mt-10 ">
              {/* First Box */}
              <div className=" bg-white border-b-8 border  hover:text-white hover:bg-greenCustomColor2  border-b-blueCustomColor border-greenCustomColor      py-10 px-8 transition-all duration-300 ">
                <p className=" text-2xl transition-all duration-300  ">
                  Reduce AWS block storage TCO
                  <br />
                  by 70% by scaling IOPS on demand
                </p>
              </div>

              {/* Second Box */}
              <div className="border-b-8  border hover:text-white hover:bg-greenCustomColor2  border-b-blueCustomColor border-greenCustomColor  bg-white  py-10 px-8 transition-all duration-300">
                <p className=" text-2xl transition-all duration-300 ">
                  Experience enhanced performance and
                  <br />
                  cost-efficiency in IOPs by using PIOSA
                </p>
              </div>

              {/* Third Box */}
              <div className="border-b-8 border bg-white hover:text-white hover:bg-greenCustomColor2  border-b-blueCustomColor border-greenCustomColor   py-10 px-8 transition-all duration-300 ">
                <p className=" text-2xl transition-all duration-300 ">
                  Achieve or exceed current on-premise IOPS
                  <br />
                  levels on AWS for these applications
                </p>
              </div>
            </div>
          </div>
        </div>
        <FAQWithImpactFilm />

        {/* <Priority/> */}
        <div className="w-full flex bg-greenCustomColor2 p-10">
          <div>
            <h1 className="text-black text-4xl font-bold font-sans mb-4">
              Be a part of the future.
            </h1>
            <p className="text-black text-lg font-semibold mb-6">
              We're passionate about solving human problems and improving the
              world, digitally.
              <br /> We're redefining digital transformation and work culture.
              Join us.
            </p>
            <button className="bg-white text-black font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full px-4 py-2 transition duration-200 ease-in-out">
              Explore open roles
            </button>
          </div>
          <div>
            <div className="flex justify-center text-center w-full items-center mt-10 px-2 mx-8">
              <div className="flex flex-col items-center ">
                <div className="h-36 w-36 rounded-full overflow-hidden mb-5 ">
                  <img
                    src={img1}
                    alt="Profile 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-36 w-36 rounded-full overflow-hidden mx-5 ">
                  <img
                    src={img2}
                    alt="Profile 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mx-5">
                <div className="h-36 w-36 rounded-full overflow-hidden mb-5">
                  <img
                    src={img3}
                    alt="Profile 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-36 w-36 rounded-full overflow-hidden">
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
       <Footer/>
      </div>
    </>
  );
}

export default Home;
