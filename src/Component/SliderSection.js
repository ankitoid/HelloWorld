import React from "react";
import b3 from "../Assets/CloudDev.mp4";
// import b1 from "../Assets/fieldService.mp4";
import { Link } from "react-router-dom";
import v1 from "../Assets/TCDvid.mp4";
import Slider3 from "./Slider3";
import ServicesHockey from "./ServicesHockey";
// import NetworkCon from "../Assets/networkingCon.mp4";
import ProfessionalService from "../Assets/professionalService.mp4";
import NetwokringCus from '../Assets/EnhancedNetworkSecurity.webp'
function SliderSection() {
  return (
    <>
      {/* First Section */}
      <div className="bg-white mt-16 flex items-center justify-center">
        <div className="flex flex-col  2xl:max-w-[100rem] 2xl:mx-auto md:flex-row items-center justify-between w-full h-full mb-8">
          {/* Left Section */}
          <div className="w-full md:w-3/5 md:ml-14 sm:py-24 sm:rounded-lg bg-blue-500 flex items-center justify-center md:rounded-md p-10 md:p-52 relative overflow-hidden">
            <div className="absolute inset-0">
              <video
                src={b3}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-3/5 bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg 2xl:max-w-7xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Cloud & DevOps
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8">
                GlobalXperts offers comprehensive cloud solutions and DevOps to
                enhance efficiency, sustainability, and cost optimization.
              </p>
              <Link
                to="Solutions/Cloud"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-blueCustomColor p-10 mt-16">
        <div className="max-w-7xl mx-auto 2xl:max-w-[95rem] 2xl:mx-auto flex flex-col lg:flex-row items-center justify-between">
         
         
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white sm:text-4xl">
              Value Proposition
            </h2>
            <p className="mt-3 md:text-xl text-gray-300 sm:mt-4 ">
              Enhance your business communication and collaboration with our
              expert services in Cisco Unified Communications, AWS Connect, and
              ConnectWise. We provide seamless integration of voice, video, and
              messaging, along with scalable and secure contact centers. Our
              solutions optimize operations and support growth with cutting-edge
              technologies. Contact us to transform your organizational
              capabilities today.
            </p>
          </div>
        
        
          <div className="relative mt-6 lg:mt-0 lg:w-1/2">
            <video
              className="w-full rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              src={v1}
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
        </div>
      </div> */}


      {/* Second Section */}
      <div className="bg-white mt-16 flex items-center justify-center ">
        <div className="flex flex-col 2xl:max-w-[100rem] 2xl:mx-auto md:flex-row-reverse items-center justify-between w-full h-full">
          {/* Right Section */}
          <div className="w-full md:w-3/5 md:ml-14 sm:py-20 sm:rounded-lg bg-yellow-400 flex items-center justify-center p-10 md:p-44  relative overflow-hidden">
            {/* <video
              src={b1}
              className="absolute inset-0 w-full h-full object-cover rounded-sm"
              muted
              autoPlay
              loop
              playsInline
            ></video> */}
            <img src={NetwokringCus} alt="" className="absolute inset-0 w-full h-full object-cover" />

          </div>

          {/* Left Section */}
          <div className="w-full md:w-3/5 bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg  2xl:max-w-[100rem] 2xl:mx-auto text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Field Services
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Expert IT support minimizing downtime, optimizing performance,
                and ensuring secure, reliable operations.
              </p>
              <a
                href="/service/Field-Services"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Slider3 />
      {/* Third Section */}
      <div className="bg-white flex items-center justify-center 2xl:max-w-[100rem] 2xl:mx-auto  md:ml-4 ">
        <div className="flex flex-col md:flex-row  items-center justify-between w-full h-full ">
          {/* Left Section */}
          <div className="2xl:ml-10 w-full md:w-3/5  flex items-center justify-center p-16 md:p-48 md:rounded-r-full rounded-l-sm md:rounded-l-none relative overflow-hidden">
            <div className="absolute inset-0 rounded-l-sm sm:py-28 sm:rounded-lg  md:rounded-l-md ">
              {/* <video
                src={NetworkCon}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video> */}

<img src={NetwokringCus} alt="" className="absolute inset-0 w-full h-full object-cover" />


            </div>
          </div>

          {/* Right Section */}
          <div className="md:max-w-7xl md:mx-auto w-full md:w-2/5 sm:mt-6 bg-white flex items-center justify-center  md:p-12">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Networking Consulting
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Optimize communication, enhance collaboration, and streamline
                workflows with tailored networking solutions.
              </p>
              <a
                href="/solutions/Networking"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <ServicesHockey />
      </div>

      {/* Fourth Section */}
      <div className="bg-white mt-24 flex items-center justify-center">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full h-full">
          {/* Right Section */}
          <div className="w-full md:w-3/5 sm:py-20 sm:rounded-lg  flex items-center justify-center p-10 md:p-48 md:rounded-l-full relative overflow-hidden">
            <video
              src={ProfessionalService}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>

          {/* Left Section */}
          <div className="w-full md:w-2/5 bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Professional Services
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Advanced IT services boosting efficiency, innovation, and
                sustainable growth for digital success.
              </p>
              <a
                href="/service/Professional-Services"
                className="text-blue-500 hover:text-blue-700 font-bold mt-3"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderSection;
