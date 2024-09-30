import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Managed from "../../Assets/ManageCloud.mp4";
import Increased from "../../Assets/Increased.png";
import resolution from "../../Assets/resolution.png";
import ProactiveMonitoring from "../../Assets/ProactiveMonitoring.mp4";
import collebratin from "../../Assets/collebratin.png";
import productivity from "../../Assets/productivit.webp";
import cost from "../../Assets/cost.webp";
import Scalable from "../../Assets/Scalable.jpg";
import PeaceOfMind from "../../Assets/PeaceOfMind.jpg";
import BetterCommunication from "../../Assets/Better communication and tracking.webp";
import SkilledTechnician from "../../Assets/SkilledTechnician.jpg";
import FocusOnSiteRepairs from "../../Assets/FocusOn-SiteRepairs.webp";
import Quick from "../../Assets/Quick.jpg";
import RepairPartsHand from "../../Assets/RepairPartsHand.jpg";
import GlobalCoverage from "../../Assets/GlobalCoverage.jpg";
import NetworkOperationsCenterCyberSecurity from "../../Assets/NetworkOperationsCenterCyberSecurity.jpg";
import NetworkOperationsCenterEnterpriseNetworking from "../../Assets/NetworkOperationsCenterEnterpriseNetworking.jpg";
import ProactiveMonitoringManagement from "../../Assets/ProactiveMonitoringManagement.webp";
import ImprovedNetworkPerformance from "../../Assets/ImprovedNetworkPerformance.jfif";
import EnhancedNetworkSecurity from "../../Assets/EnhancedNetworkSecurity.webp";
import CostIT from "../../Assets/CostIT.jpg";
import Experts from "../../Assets/Experts.jpg";
import OpsisStreaming from "../../Assets/OpsisStreaming.webp";
import AWSElementalMediaLive from "../../Assets/AWSElementalMediaLive.jpg";
import AWSElementalLive2 from "../../Assets/AWSElementalLive2.webp";
import AWSElementalMediaPackage from "../../Assets/AWSElementalMediaPackage.png";
import AWSElementalMediaTaylor2 from "../../Assets/AWS MediaTaylor2.png";
import AWSElasticTranscoder from "../../Assets/AWSElasticTranscoder2.png";
import AWSCloudfront from "../../Assets/AWSCloudfront.png";
import ManagedV from "../../Assets/Managed.mp4";
import { Link } from "react-router-dom";
import ManagedHelpDisk from "../../Assets/ManagedHelpDesk.png";

const ManagedServices = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      <Navbar />
      {/* Text Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-20 px-5">
        {/* Text Section */}
        <div className="flex-1 md:pr-8 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Managed Cloud Application
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Looking for reliable application support? Our 24/7 Managed
            Applications Support ensures optimal performance for AWS, Azure, and
            GCP, offering personalized assistance and flexible pricing to
            streamline your operations and grow your business!
          </p>
        </div>

        {/* Video Section */}
        <div className="flex-1 w-full">
          <video
            src={Managed}
            className="w-full h-auto object-cover rounded-lg"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
      </div>

      {/* Boxes Section */}
      <div className="max-w-7xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Value Proposition
        </h2>
        <p className="text-lg text-gray-600 mb-8 px-4">
          Our Managed Applications Support offers 24/7 monitoring and expert
          management to keep your business applications running smoothly. Focus
          on your business while we handle performance and quick issue
          resolution. Contact us to learn more!
        </p>

        {/* Boxes Section */}
        <div className="flex flex-wrap justify-center gap-10 px-4">
          {/* Box 1 */}
          <div className="w-full max-w-xs h-[225px] bg-transparent cursor-pointer group perspective">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <div className="absolute backface-hidden w-full h-full">
                <img
                  src={Increased}
                  alt="Increased reliability"
                  className="w-full h-full object-cover"
                />
                <div className="bg-blueCustomColor flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                  <p className="text-center">Increased reliability</p>
                </div>
              </div>
              {/* Back side with content */}
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                <div className="flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                  <p className="text-lg py-2 text-gray-200">
                    Increased uptime for your applications
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full max-w-xs h-[225px] bg-transparent cursor-pointer group perspective">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with image */}
              <div className="absolute backface-hidden w-full h-full">
                <img
                  src={resolution}
                  alt="Rapid resolution"
                  className="w-full h-full object-cover"
                />
                <div className="bg-blueCustomColor flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                  <p className="text-center">Rapid resolution</p>
                </div>
              </div>
              {/* Back side with content */}
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                <div className="flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                  <p className="text-lg py-2 text-gray-200">
                    Minimized downtime and business disruption
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full max-w-xs h-[225px] bg-transparent cursor-pointer group perspective">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              {/* Front side with video */}
              <div className="absolute backface-hidden w-full h-full">
                <video
                  src={ProactiveMonitoring}
                  className="h-full w-full object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
                <div className="bg-blueCustomColor flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                  <p className="text-center">Proactive monitoring</p>
                </div>
              </div>
              {/* Back side with content */}
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                <div className="flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                  <p className="text-lg py-2 text-gray-200">
                    Preventing issues before they occur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <div className="h-1 bg-blueCustomColor relative overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-white via-blue-300 to-blue-500 animate-pulse"></div>
        </div>
      </div>
      <div className="max-w-7xl flex flex-col lg:flex-row items-center mx-auto justify-between mt-32 pb-10">
        {/* Image Section */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
          <img
            className="w-full rounded-lg"
            src={collebratin}
            alt="A man working on a laptop in a server room."
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 mt-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl  ">
            Managed Collaboration Technologies
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Enhance communication with our managed Cisco Unified Communications
            services, covering installation, upgrades, and maintenance. We
            ensure seamless operation and proactive support. Contact us today to
            improve your communication infrastructure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
        <p className="text-lg text-gray-600 mb-8"></p>

        {/* Boxes Section */}
        <div className="max-w-7xl mx-10 flex flex-col lg:flex-row items-center justify-between mt-32 pb-10">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Managed Help Desk
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Our 24/7 Managed Help Desk provides comprehensive IT support.
              Level 1 handles basic issues, while Level 2 and 3 tackle complex
              problems with advanced tools. We monitor your network to prevent
              downtime and resolve issues efficiently, allowing you to focus on
              business growth. Contact us today.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
            <img
              className="w-full rounded-lg"
              src={ManagedHelpDisk}
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Value Proposition
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our Managed Help Desk service (Levels 1, 2, and 3) utilizes Network
            Management tools and ticketing systems to deliver unparalleled
            value. Here are some key benefits:
          </p>

          {/* Boxes Section */}
          <div className="flex flex-wrap justify-center gap-14 px-4">
            {/* Box 1 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={productivity}
                    alt="Improved productivity"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Improved productivity
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Proactive monitoring and rapid responses minimize
                      downtime, ensuring productivity and preventing revenue
                      loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={cost}
                    alt="Cost-effective IT support"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Cost-effective IT support
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Expert IT support at a fraction of the cost of an in-house
                      team, providing expertise without the expense.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={Scalable}
                    alt="Scalable service"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Scalable service
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Easily scale your IT support as your business grows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="w-[300px] h-[225px] bg-transparent mt-5 cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={PeaceOfMind}
                    alt="Peace of mind"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Peace of mind
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Certified technicians ensure your IT needs are in good
                      hands, allowing you to focus on your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 5 */}
            <div className="w-[300px] h-[225px] bg-transparent mt-5 cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={BetterCommunication}
                    alt="Better communication"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Better communication
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Streamlined communication and tracking of IT issues ensure
                      timely resolutions and keep you informed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <div className="h-1 bg-blueCustomColor relative overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-white via-blue-300 to-blue-500 animate-pulse"></div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl flex flex-col lg:flex-row items-center mx-auto justify-between mt-32 pb-10">
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
            <img
              className="w-full rounded-lg"
              src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/bc-ce1-marquee.sm.jpg"
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Managed On-Site Service
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Need fast, reliable on-site repairs? Our team provides quick
              response times—within 4, 8 hours, or next business day. Skilled
              technicians arrive with parts to minimize downtime, serving 165
              countries with enterprise-level expertise. Contact us today to
              learn more!
            </p>
          </div>
        </div>

        <div className="max-w-7xl  mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Value Proposition
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our On-Site Repair Service offers unique value for businesses
            needing reliable and efficient equipment repairs. Here are key
            benefits:
          </p>

          {/* Boxes Section */}
          <div className="flex flex-wrap justify-center gap-14 px-4">
            {/* Box 1 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={SkilledTechnician}
                    alt="Skilled Technicians"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Skilled Technicians
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Our technicians quickly diagnose and repair a range of
                      issues, getting your equipment back in action fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={FocusOnSiteRepairs}
                    alt="Focus on On-Site Repairs"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Focus on On-Site Repairs
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      We come to you for repairs, saving time and shipping
                      costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={Quick}
                    alt="Quick Response Times"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Quick Response Times
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-10 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Choose from 4, 8 hour, or next business day service to
                      minimize downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={RepairPartsHand}
                    alt="Repair Parts in Hand"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Repair Parts in Hand
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Our technicians arrive prepared with parts to minimize
                      downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 5 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={GlobalCoverage}
                    alt="Global Coverage"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Global Coverage
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      We manage complex repairs across 165 countries, wherever
                      you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="h-1 bg-blueCustomColor relative overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-white via-blue-300 to-blue-500 animate-pulse"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto  flex flex-col lg:flex-row items-center justify-between mt-16 pb-10">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Network Operations Center – Cyber Security
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Safeguard your organization with our Cyber Security NOC. Utilizing
              XDR for advanced threat detection and Deep Packet Inspection for
              real-time analysis, we protect against sophisticated cyber
              threats. Contact us to enhance your cybersecurity today.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
            <img
              className="w-full rounded-lg"
              src={NetworkOperationsCenterCyberSecurity}
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
          {/* Image Section */}
        </div>

        <div className="mt-10 max-w-7xl 2xl:mx-auto md:ml-4  ">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center  mt-10 ">
              Value Proposition
            </h2>

            <p className="max-w-7xl 2xl:mx-auto text-lg text-gray-600 mb-8">
              <strong>Advanced Threat Detection:</strong> Our XDR solution uses
              machine learning to detect and respond to threats in real-time,
              with Deep Packet Inspection for enhanced visibility.
              <br />
              <br />
              <strong>24/7 Monitoring:</strong> Our experts provide
              round-the-clock monitoring and threat response, keeping your
              network safe from malicious activity.
              <br />
              <br />
              <strong>Cost-Effective:</strong> Outsource your cybersecurity to
              us and save on in-house costs while ensuring data security and
              peace of mind.
              <br />
              <br />
              <strong>Compliance:</strong> We help you meet compliance standards
              like HIPAA, GDPR, and PCI DSS with regular audits and reports to
              keep your data protected.
            </p>
          </div>

          {/* Boxes Section */}
        </div>
        <div className="mt-8">
          <div className="h-1 bg-blueCustomColor relative overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-white via-blue-300 to-blue-500 animate-pulse"></div>
          </div>
        </div>
        <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-auto justify-between mt-10 pb-10">
          <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
            <img
              className="w-full rounded-lg"
              src={NetworkOperationsCenterEnterpriseNetworking}
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 mt-4">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Network Operations Center – Enterprise Networking
            </h2>
            <p className="mt-3 text-lg text-gray-500 sm:mt-4">
              Our Network Operation Center (NOC) ensures the reliability,
              availability, and security of your network through:
              <br />
              • Continuous network monitoring to prevent issues.
              <br />
              • Quick incident management with root cause analysis.
              <br />
              • Controlled network configuration and change management.
              <br />
              • Performance optimization for efficiency and capacity.
              <br />• Security management with firewalls and intrusion
              detection.
            </p>
          </div>
          {/* Text Section */}

          {/* Image Section */}
        </div>

        <div className="max-w-7xl mx-auto  mt-10 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Value Proposition
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            A Network Operations Center (NOC) provides a secure and reliable
            network infrastructure for enterprises. Key benefits include:
          </p>

          {/* Boxes Section */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Box 1 */}
            <div className="relative bg-transparent cursor-pointer group perspective ">
              <div className="preserve-3d group-hover:my-rotate-y-180 w-full h-60 duration-1000">
                <div className="absolute backface-hidden w-full h-full sm:mt-4">
                  <img
                    src={ProactiveMonitoringManagement}
                    alt="Proactive Monitoring"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="flex items-center   justify-center text-white text-xl font-semibold bg-opacity-40 rounded-lg">
                    <p className="w-full text-center bg-blueCustomColor">
                      Proactive Monitoring
                    </p>
                  </div>
                </div>
                <div className=" max-w-7xl mx-auto my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden rounded-lg">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-md py-2 text-gray-200 mt-4">
                      Our NOC team monitors performance to resolve issues before
                      they impact operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="relative bg-transparent cursor-pointer group perspective">
              <div className="preserve-3d group-hover:my-rotate-y-180 w-full h-60 duration-1000">
                <div className="absolute backface-hidden w-full h-full sm:mt-4">
                  <img
                    src={ImprovedNetworkPerformance}
                    alt="Improved Network Performance"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-center text-white text-xl font-semibold bg-opacity-40 rounded-lg">
                    <p className="w-full text-center bg-blueCustomColor">
                      Improved Network Performance
                    </p>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden rounded-lg">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-md py-2 text-gray-200 mt-4">
                      Optimized network performance for increased efficiency and
                      reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="relative bg-transparent cursor-pointer group perspective ">
              <div className="preserve-3d group-hover:my-rotate-y-180 w-full h-60 duration-1000">
                <div className="absolute backface-hidden w-full h-full sm:mt-4">
                  <img
                    src={EnhancedNetworkSecurity}
                    alt="Enhanced Network Security"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-center text-white text-xl font-semibold bg-black bg-opacity-40 rounded-lg">
                    <p className="w-full text-center bg-blueCustomColor">
                      Enhanced Network Security
                    </p>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden rounded-lg">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-md py-2 text-gray-200 mt-4">
                      Strengthening security to protect data and minimize breach
                      risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="relative bg-transparent cursor-pointer group perspective mt-10">
              <div className="preserve-3d group-hover:my-rotate-y-180 w-full h-60 duration-1000">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={CostIT}
                    alt="Reduced IT Costs"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-center text-white text-xl font-semibold bg-opacity-40 rounded-lg">
                    <p className="w-full text-center bg-blueCustomColor">
                      Reduced IT Costs
                    </p>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden rounded-lg">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-md py-2 text-gray-200 mt-4">
                      Cost-effective management of network hardware, software,
                      and staffing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 5 */}
            <div className="relative bg-transparent cursor-pointer group perspective mt-10">
              <div className="preserve-3d group-hover:my-rotate-y-180 w-full h-60 duration-1000">
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={Experts}
                    alt="Access to Expertise"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-center text-white text-xl font-semibold bg-opacity-40 rounded-lg">
                    <p className="w-full text-center bg-blueCustomColor">
                      Access to Expertise
                    </p>
                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden rounded-lg">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-4 text-gray-300">
                    <p className="text-md py-2 text-gray-200 mt-4">
                      Expert NOC team ensures reliable performance and quick
                      issue resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full text-lg mt-8 text-gray-600">
            <p>
              In summary, a NOC delivers secure and efficient network
              infrastructure, allowing enterprises to focus on core activities
              with confidence in effective management.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <div className="h-1 bg-blueCustomColor relative overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-white via-blue-300 to-blue-500 animate-pulse"></div>
          </div>
        </div>
        <div className="max-w-7xl flex flex-col lg:flex-row items-center mx-auto justify-between mt-32 pb-10">
          <div className="relative lg:w-1/2 px-5">
            <img
              className="w-full rounded-lg"
              src={OpsisStreaming}
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 mt-6 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Opsis Streaming
            </h2>
            <p className="mt-2 text-lg text-gray-500 sm:mt-4">
              Opsis Streaming offers a robust platform for live and on-demand
              video content, emphasizing quality and scalability. Their
              solutions support live broadcasting and adaptive streaming for
              seamless viewing on any device.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center mt-4">
            Overcoming Operational Challenges in Sports Streaming
          </h2>
          <p className="max-w-7xl mx-auto text-center text-lg text-gray-600 mb-8">
            A Network Operation Center (NOC) for Enterprise Networking Services
            ensures reliable and secure infrastructure to support business
            operations. By leveraging a NOC, enterprises can achieve:
          </p>

          <div className="mt-28">
            <div className="h-1 bg-blueCustomColor relative overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-white via-blue-300 to-blue-500 animate-pulse"></div>
            </div>
          </div>
          <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              The Bleacher Blues
            </h1>

            <p className="text-lg text-gray-600 mb-4">
              The excitement of live sports captivates audiences worldwide, but
              behind the thrill lies a complex reality—operational challenges
              that can turn that dream into a digital nightmare.
            </p>
            <div className="space-y-6">
              <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Scalability: When Fans Outnumber Seats
                </h2>
                <p className="text-gray-600">
                  A last-minute winning shot shouldn't be interrupted by
                  buffering. Peak viewership can overwhelm systems, leading to
                  frustrated fans and lost revenue. Upgrading infrastructure is
                  crucial to keep fans engaged and protect brand reputation.
                </p>
              </section>

              <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Content Chaos: A Library Lost in the Archives
                </h2>
                <p className="text-gray-600">
                  Historic moments and exclusive footage are valuable, but poor
                  systems and outdated tagging can hide content, reducing
                  monetization potential.
                </p>
              </section>

              <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Monetization Mayhem: Turning Views into Revenue
                </h2>
                <p className="text-gray-600">
                  Converting views to revenue requires innovation. As
                  traditional ads decline, personalized sponsorships and
                  interactive experiences offer new opportunities.
                </p>
              </section>

              <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Data Darkness: Flying Blind in the Digital Arena
                </h2>
                <p className="text-gray-600">
                  Knowing fan behavior is critical. Many franchises lack
                  analytics, missing opportunities for revenue and fan
                  engagement.
                </p>
              </section>
            </div>

            <footer className="mt-8">
              <p className="text-lg text-gray-700">
                Overcoming these challenges requires innovation, agile
                infrastructure, and data-driven decisions. By integrating
                technology, content, and data, franchises can turn obstacles
                into opportunities and enhance fan engagement without technical
                setbacks.
              </p>
            </footer>
          </div>

          <div className=" max-w-7xl mx-auto p-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Technologies Utilized
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
              {[
                {
                  image: AWSElementalMediaLive,
                  title: "AWS Elemental MediaLive",
                  description:
                    "AWS Elemental MediaLive is a cloud-based, broadcast-grade live video processing service.",
                },
                {
                  image: AWSElementalLive2,
                  title: "AWS Elemental Live",
                  description:
                    "On-premises solution for live video processing, encoding, and transcoding into multiple formats for broadcast and online streaming.",
                },
                {
                  image: AWSElementalMediaPackage,
                  title: "AWS Elemental MediaPackage",
                  description:
                    "Managed service for securely packaging and delivering live and on-demand video streams to various devices and platforms.",
                },

                {
                  image: AWSCloudfront,
                  title: "AWS Cloudfront",
                  description:
                    "Content Delivery Network (CDN) service offered by Amazon Web Services.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative w-full h-60 bg-transparent cursor-pointer group perspective"
                >
                  <div className="absolute w-full h-full backface-hidden mt-10">
                    <img
                      src={item.image}
                      alt={`${item.title} Service Image`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="flex items-center justify-center text-white text-2xl font-semibold bg-blueCustomColor bg-opacity-40 rounded-lg py-2">
                      <p className="text-center">{item.title}</p>
                    </div>
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden rounded-lg">
                    <div className="flex flex-col items-center justify-center h-full text-gray-300 p-4">
                      <p className="text-lg text-gray-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Boxes Section */}
        <div className="bg-blueCustomColor p-10 mt-36">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Services
              </h2>
              <div className="security-services mt-4">
                <p className="text-gray-300">
                  Our Managed Services streamline your operations, improve
                  productivity, and ensure smooth performance. Tailored
                  solutions for your enterprise needs include:
                </p>
                <ul className="service-list text-gray-300 space-y-2 mt-4">
                  {[
                    "Managed Cloud Application",
                    "Managed Collaboration Technologies",
                    "Reduced Downtime",
                    "Managed Help Desk",
                    "Managed On-Site Service",
                    "Opsis Streaming",
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 16l3 3L22 7"
                        />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2">
              <video
                src={ManagedV}
                className="h-full w-full object-cover rounded-lg" // Added rounded corners for aesthetics
                muted
                autoPlay
                loop
                playsInline
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex mb-16">
          <Link
            to="/contact-us"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4"
          >
            Contact Us
          </Link>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
            FAQs
            <span className="ml-2">→</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(0)}
              >
                How does a Managed Cloud Application service benefit my
                business?
              </h2>
              {activeQuestion === 0 && (
                <p className="text-lg mb-4">
                  Managed Cloud Application services handle the hosting,
                  maintenance, and updates of your cloud applications, ensuring
                  high availability, security, and scalability. This allows your
                  business to focus on core operations while reducing IT
                  overhead and infrastructure costs.
                </p>
              )}
            </div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(1)}
              >
                What types of tools are covered under Managed Collaboration
                Technologies?
              </h2>
              {activeQuestion === 1 && (
                <p className="text-lg mb-4">
                  Managed Collaboration Technologies include tools such as video
                  conferencing platforms, unified communication systems,
                  document sharing solutions, and project management
                  applications. These services ensure seamless collaboration
                  across teams, whether they’re remote or onsite, improving
                  productivity and communication.
                </p>
              )}
            </div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(2)}
              >
                What kind of support can I expect from a Managed Help Desk
                service?
              </h2>
              {activeQuestion === 2 && (
                <p className="text-lg mb-4">
                  Managed Help Desk provides 24/7 support to resolve technical
                  issues, assist with troubleshooting, and offer guidance on
                  software or hardware problems. This ensures that your
                  employees have continuous access to expert help, reducing
                  downtime and enhancing workflow efficiency.
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(3)}
              >
                How does Managed On-Site Service differ from remote support?
              </h2>
              {activeQuestion === 3 && (
                <p className="text-lg mb-4">
                  Managed On-Site Service involves having dedicated IT
                  professionals physically present at your location to handle
                  complex hardware installations, maintenance, and technical
                  support. This service complements remote support by addressing
                  issues that require hands-on intervention, ensuring all
                  technical aspects of your business are covered.
                </p>
              )}
            </div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(4)}
              >
                How does a NOC Cyber Security service protect my organization?
              </h2>
              {activeQuestion === 4 && (
                <p className="text-lg mb-4">
                  A NOC Cyber Security service monitors your network 24/7 for
                  any security threats, manages firewalls, performs regular
                  vulnerability assessments, and responds to potential breaches.
                  This proactive approach ensures that your business stays ahead
                  of cybersecurity risks, safeguarding sensitive data and
                  maintaining compliance with industry standards.
                </p>
              )}
            </div>
            <div className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(5)}
              >
                Network Operations Center (NOC) – Enterprise Networking:
              </h2>
              {activeQuestion === 5 && (
                <p className="text-lg mb-4">
                  NOC Enterprise Networking monitors and manages the performance
                  of your entire network infrastructure. This includes ensuring
                  optimal bandwidth usage, minimizing network outages, and
                  troubleshooting issues before they impact business operations,
                  ensuring high availability and reliable connectivity for your
                  organization.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default ManagedServices;
