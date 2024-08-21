import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SliderSection from "./SliderSection";
import Slider2 from "./Slider2";
import Priority from "./priority";
import Slider3 from "./Slider3";
import TeamGrid from "./TeamGrid";

function Home() {
  return (
    <>
      <Navbar />
      <div className=" w-full h-screen">
        <HeroSection />
        <Slider2 />
        <SliderSection />
        <Slider3/>
        <TeamGrid/>
        <div className=" w-full">
          <div className="relative w-full py-12 text-center font-bold">
            {/* Heading */}
            <h1 className=" w-full text-center font-bold text-7xl p-10">
              We modernize
            </h1>
            {/* Text Boxes */}
            <div className="flex gap-5  justify-center mx-5 mt-10 ">
              {/* First Box */}
              <div className=" bg-white border-b-8 border border-cyan-500 text-black  py-10 px-8 transition-all duration-300 ">
                <p className="text-black text-2xl transition-all duration-300 hover:text-cyan-500">
                  Reduce AWS block storage TCO
                  <br />
                  by 70% by scaling IOPS on demand
                </p>
              </div>

              {/* Second Box */}
              <div className="border-b-8  border border-cyan-500 bg-white rounded-lg py-10 px-8 transition-all duration-300">
                <p className="text-black text-2xl transition-all duration-300 hover:text-cyan-500">
                  Experience enhanced performance and
                  <br />
                  cost-efficiency in IOPs by using PIOSA
                </p>
              </div>

              {/* Third Box */}
              <div className="border-b-8 border bg-white border-cyan-500 rounded-lg py-10 px-8 transition-all duration-300 hover:border-cyan-600">
                <p className="text-black text-2xl transition-all duration-300 hover:text-cyan-500">
                  Achieve or exceed current on-premise IOPS
                  <br />
                  levels on AWS for these applications
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <Priority/> */}
        <div className=" w-full flex bg-greenCustomColor2 p-10">
          <div className=" ">
            <h1 className="text-black text-4xl font-bold font-sans mb-4">
              Be a part of the future.
            </h1>
            <p className="text-black text-lg font-semibold mb-6">
              We're passionate about solving human problems and improving the
              world, digitally.
              <br /> We're redefining digital transformation and work culture.
              Join us.
            </p>
            <button className="bg-white text-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full px-4 py-2 transition duration-200 ease-in-out">
              Explore open roles
            </button>
          </div>
          <div>
            <div className="flex justify-center text-center w-full items-center mt-10 px-10 mx-5 gap-5">
              <div>
                <div className="w-1/2">
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Profile 1"
                    className="rounded-full  w-full h-auto"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Profile 2"
                    className="rounded-full w-full h-auto"
                  />
                </div>
              </div>

              <div className=" ">
                <div className="w-1/2">
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Profile 3"
                    className="rounded-full w-full h-auto"
                  />
                </div>
                <div className="w-1/2">
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Profile 4"
                    className="rounded-full w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
