import React from "react";
import b3 from "../Assets/CloudDev.mp4";
import b1 from "../Assets/fieldService.mp4";
import { Link } from "react-router-dom";
import v1 from "../Assets/TCDvid.mp4";
import Slider3 from "./Slider3";
import ServicesHockey from "./ServicesHockey";
import NetworkCon from '../Assets/networkingCon.mp4'
import ProfessionalService from '../Assets/professionalService.mp4'

function SliderSection() {
  return (
    <>
      {/* First Section */}
      <div className="bg-white mt-16 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full mb-8">
          {/* Left Section */}
          <div className="w-full md:w-3/5 md:ml-14 bg-blue-500 flex items-center justify-center md:rounded-md p-10 md:p-52 relative overflow-hidden">
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
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Cloud & DevOps
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Leveraging deep expertise in cloud technologies, GlobalXperts
                supports clients globally through every stage of their cloud
                journey. We offer comprehensive services including consultancy,
                seamless migration, and 24/7 managed services, ensuring
                continuous support and optimization. Our advanced DevOps
                solutions enhance operational efficiency and reliability. Our
                focus on cost optimization ensures that your cloud
                infrastructure is both efficient and economically sound, driving
                long-term value and sustainability.
              </p>
              <Link
                to="/Cloud" // Updated to path string
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blueCustomColor p-10 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Value Proposition
            </h2>
            <p className="mt-3 text-xl text-gray-300 sm:mt-4">
              Enhance your business’s communication and collaboration with our
              expert design and build services for advanced collaboration
              technologies. We specialize in Cisco Unified Communications, AWS
              Connect, and ConnectWise to streamline your operations and improve
              customer service. Our solutions integrate voice, video, and
              messaging into seamless platforms, offer scalable, secure contact
              centers, and optimize business management. Choose our services to
              boost efficiency, enhance communication, and support your growth
              with tailored, cutting-edge technologies. Contact us today to
              transform your organizational capabilities.
            </p>
          </div>
          {/* Video Section */}
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
      </div>
      {/* Second Section */}
      <div className="bg-white mt-12 flex items-center justify-center ">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full h-full">
          {/* Right Section */}
          <div className="w-full md:w-3/5 md:ml-14 mr-12 bg-yellow-400 flex items-center justify-center p-10 md:p-44  relative overflow-hidden">
            <video
              src={b1}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>

          {/* Left Section */}
          <div className="w-full md:w-3/5 bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Field Services
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Our expert technicians and engineers deliver critical on-site IT
                support, ensuring seamless system operations. With hands-on
                expertise, we resolve technical challenges efficiently,
                providing reliable solutions that keep your business running
                smoothly. Taking a proactive approach, we identify potential
                issues before they become problems, minimizing downtime and
                optimizing performance. Whether it's troubleshooting,
                maintenance, or system upgrades, our team is dedicated to
                keeping your IT infrastructure robust and secure.
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
      <div className="bg-white flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
          {/* Left Section */}
          <div className="w-full md:w-3/5 bg-blue-500 flex items-center justify-center p-10 md:p-48 md:rounded-r-full relative overflow-hidden">
            <div className="absolute inset-0">
              <video
                src={NetworkCon}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5 bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Networking Consulting
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Our networking consulting services provide structured solutions
                to enhance connectivity across teams, departments, and
                locations. With expert guidance, we help you build efficient
                communication channels, streamline workflows, and connect
                seamlessly across offices, time zones, and even external
                partners, ensuring a cohesive and collaborative work
                environment.
              </p>
              <a
                href="#"
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
          <div className="w-full md:w-3/5 bg-yellow-400 flex items-center justify-center p-10 md:p-48 md:rounded-l-full relative overflow-hidden">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Services
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Our Professional Services provide cutting-edge IT solutions to
                empower your business in the digital era. We offer innovative
                services that enhance your operations, improve efficiency, and
                drive sustainable growth. With a focus on delivering excellence,
                we tailor our approach to meet your unique needs and ensure your
                business thrives in a competitive landscape.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-bold"
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
