import React from "react";
import { Link } from "react-router-dom";
import Slider3 from "./Slider3";
import ServicesHockey from "./ServicesHockey";

function SliderSection() {
  return (
    <>
      {/* First Section */}
      <div className="bg-white mt-16 flex items-center justify-center ">
        <div className="flex flex-col 2xl:max-w-[100rem] 2xl:mx-auto md:flex-row-reverse items-center justify-between w-full h-full">
          {/* Right Section */}
          <div className="w-full md:w-3/5 md:ml-14 sm:py-20 sm:rounded-lg bg-yellow-400 flex items-center justify-center p-10 md:p-44  relative overflow-hidden">
            <video
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/fieldService.mp4"
              className="absolute inset-0 w-full h-full object-cover rounded-sm"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>

          {/* Left Section */}
          <div className="w-full md:w-3/5 bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg  2xl:max-w-[100rem] 2xl:mx-auto text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Field Services
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                We deliver our professional and managed services on-site. We
                perform dispatch services, technology refreshes, site surveys,
                data-center migrations, and more.
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

      <div className="bg-white mt-16 flex items-center justify-center">
        <div className="flex flex-col  2xl:max-w-[100rem] 2xl:mx-auto md:flex-row items-center justify-between w-full h-full mb-8">
          {/* Left Section */}
          <div className="w-full md:w-3/5 md:ml-14 sm:py-24 sm:rounded-lg bg-blue-500 flex items-center justify-center md:rounded-md p-10 md:p-52 relative overflow-hidden">
            <div className="absolute inset-0">
              <video
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/CloudDev.mp4"
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
                When we build cloud solutions, we optimize them to your specific
                needs. From consulting and migration to DevOps and 24/7 support,
                we ensure optimal performance and cost efficiency throughout
                your cloud journey.
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

      {/* Second Section */}

      {/* <Slider3 /> */}

      <div className=" mt-10">
        <ServicesHockey />
      </div>
      

      {/* Third Section */}
      <div className="bg-white flex items-center justify-center 2xl:max-w-[100rem] 2xl:mx-auto  md:ml-4 2xl:mt-8 ">
        <div className="flex flex-col md:flex-row  items-center justify-between w-full h-full ">
          {/* Left Section */}
          <div className="2xl:ml-10 w-full md:w-3/5  flex items-center justify-center p-16 md:p-48 md:rounded-r-full rounded-l-sm md:rounded-l-none relative overflow-hidden">
            <div className="absolute inset-0 rounded-l-sm sm:py-28 sm:rounded-lg  md:rounded-l-md ">
              <video
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/networkingCon.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:max-w-7xl md:mx-auto w-full md:w-2/5 sm:mt-6 bg-white flex items-center justify-center  md:p-12">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Network Consulting
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Need experts to work on your network? We can optimize
                communication, enhance collaboration, and streamline workflows
                with tailored networking solutions.
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

     

      {/* Fourth Section */}
     
      {/* <div className="bg-white mt-24 flex items-center justify-center">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full h-full">
        
          <div className="w-full md:w-3/5 sm:py-20 sm:rounded-lg  flex items-center justify-center p-10 md:p-48 md:rounded-l-full relative overflow-hidden">
            <video
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/professionalService.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>

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
      </div> */}
    </>
  );
}

export default SliderSection;
