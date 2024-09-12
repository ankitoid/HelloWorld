import React, { useState } from "react";
import Navbar from "../Navbar";
import c1 from "../../Assets/support.jfif";
import c2 from "../../Assets/image (9).png";
import c3 from "../../Assets/image (10).png";
import v1 from "../../Assets/expert.jpg";
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
import ManagedHelpDisk from "../../Assets/ManagedHelpDesk.png"



const ManagedServices = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center mt-32">
            Managed Cloud Application
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between ml-14 mr-14">
            {/* Text Section */}
            <div className="flex-1 md:pr-8 mb-8 md:mb-0">
              <p className="text-lg text-gray-600 mb-8 ">
                Looking for a reliable solution to manage your applications? Our
                Managed Applications Supp ort service provides 24/7 expert
                support for infrastructure management, application deployment,
                and maintenance. We monitor your systems, proactively address
                issues, and ensure optimal performance. With personalized
                support tailored to your business needs and flexible pricing
                options, you only pay for what you need. We support AWS, Azure,
                and GCP. Contact us today to streamline your operations and grow
                your business!
              </p>
            </div>
            {/* Image Section */}
            <div className="flex-1">
              <video
                src={Managed}
                className="h-full w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>
        </div>

        {/* Boxes Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Value Proposition
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our Managed Applications Support service keeps your business
            applications running smoothly with 24/7 monitoring <br />
            and expert management. We handle all technical aspects, allowing you
            to focus on your business. Our service is <br />
            customizable to meet your needs, ensuring optimized performance and
            quick resolution of any issues. unique <br />
            needs. Contact us today to see how our IT field engineering can keep
            your business running smoothly.
          </p>

          {/* Boxes Section */}
          <div className="flex flex-wrap justify-center gap-14 px-4">
            {/* Box 1 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={Increased}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-blueCustomColor  flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Increased reliability
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Increased reliability and uptime for your applications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <img
                    src={resolution}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-blueCustomColor flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Rapid resolution
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Rapid resolution of issues, minimizing downtime and
                      business disruption
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                {/* Front side with image */}
                <div className="absolute backface-hidden w-full h-full">
                  <video
                    src={ProactiveMonitoring}
                    className="h-full w-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                  ></video>
                  <div className=" bg-blueCustomColor flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                    <p className="w-full text-center bg-blueCustomColor">
                      Proactive monitoring
                    </p>
                  </div>
                </div>
                {/* Back side with content */}
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                  <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                    <p className="text-lg py-2 text-gray-200 mt-10">
                      Proactive monitoring and maintenance of your applications,
                      preventing issues before they occur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boxes Section */}
        <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
          <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
            <img
              className="w-full rounded-lg"
              src={collebratin}
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Managed Collaboration Technologies
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Streamline your communication with our managed services for Cisco
              Unified Communications, Call Manager, Cube, E911, SIP gateways,
              and PSTN. We handle installation, upgrades, and maintenance,
              ensuring seamless operation and boosting productivity with
              proactive support.
              <br />
              <br />
              Maximize reliability and security with our expert solutions.
              Contact us to enhance your communication infrastructure today.
            </p>
          </div>
          {/* Image Section */}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
          <p className="text-lg text-gray-600 mb-8"></p>

          {/* Boxes Section */}
          <div className="max-w-7xl mx-10  flex flex-col lg:flex-row items-center  justify-between mt-32 pb-10">
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Managed Help Desk
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Our Managed Help Desk service provides 24/7 support for all your
                IT needs. Our Level 1 team handles basic issues <br />
                like password resets, while Level 2 and 3 teams tackle more
                complex problems with advanced troubleshooting. Using <br />
                top-of-the-line Network Management tools and popular ticketing
                systems, we monitor your network, prevent downtime,
                <br />
                and ensure efficient issue resolution. Let us manage your IT so
                you can focus on growing your business. Contact <br />
                us today to learn more.
              </p>
            </div>
            <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
              <img
                className="w-full rounded-lg"
                src={ManagedHelpDisk}
                alt="A man working on a laptop in a server room."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
            {/* Text Section */}

            {/* Image Section */}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Value Proposition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Managed Help Desk Level 1, 2, and 3 service with Network
              Management tools and popular ticketing systems <br />
              offers an unparalleled value proposition for your business. Here
              are some of the key benefits:
            </p>

            {/* Boxes Section */}
            <div className="flex flex-wrap justify-center gap-14 px-4">
              {/* Box 1 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={productivity}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Improved productivity
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Our proactive network monitoring and rapid response
                        times minimize downtime, keeping your systems running
                        smoothly to maintain productivity and prevent potential
                        revenue loss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={cost}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Cost-effective IT support
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Our Managed Help Desk service offers expert IT support
                        at a fraction of the cost of an in-house team, providing
                        a broad range of expertise without the expense of
                        salaries, benefits, or training.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={Scalable}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Scalable service
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        As your business grows, our Managed Help Desk service
                        allows you to easily scale your IT support to match your
                        evolving needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] bg-transparent mt-5 cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={PeaceOfMind}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Peace of mind
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        With our certified technicians, you can rest assured
                        that your IT needs are in good hands. We’ll handle all
                        of your IT problems, so you can focus on running your
                        business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] bg-transparent mt-5 cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={BetterCommunication}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Better communication
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Our ticketing systems streamline communication and
                        tracking of IT issues, ensuring timely resolutions and
                        keeping you informed about progress every step of the
                        way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
            <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
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
                Looking for fast, reliable on-site repair services? Our Managed
                Services On-Site Repair team offers quick response times—within
                4 hours, 8 hours, or next business day. Our skilled technicians
                come prepared with parts to minimize downtime, ensuring your
                equipment is up and running quickly. Serving 165 countries with
                enterprise-level expertise, we handle complex repairs and
                ongoing maintenance. Keep your business running smoothly with
                our efficient on-site repair services. Contact us today to learn
                more.
              </p>
            </div>
            {/* Image Section */}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Value Proposition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our managed services On-Site repair Service provides a unique
              value proposition for businesses in need of reliable
              <br />
              and efficient equipment repairs. Here are some of the key benefits
              of choosing our service:
            </p>

            {/* Boxes Section */}
            <div className="flex flex-wrap justify-center gap-14 px-4">
              {/* Box 1 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={SkilledTechnician}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Skilled Technicians
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Our skilled technicians swiftly diagnose and repair a
                        wide range of equipment issues, leveraging years of
                        experience to get your equipment up and running quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={FocusOnSiteRepairs}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Focus on On-Site Repairs
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        We specialize in on-site repairs, coming directly to
                        your location to fix issues, saving you time and money
                        on shipping and wait times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={Quick}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Quick Response Times
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-10 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        We offer 4 hour, 8 hour, or next business day arrival
                        times options, depending on your needs. This means that
                        you can get the repairs you need quickly, minimizing
                        downtime and keeping your business running smoothly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={RepairPartsHand}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Repair Parts in Hand
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Our technicians arrive with repair parts ready, allowing
                        them to quickly diagnose and fix issues on-site,
                        minimizing downtime and boosting productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={GlobalCoverage}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Global Coverage
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        With enterprise sites in 165 countries, we handle even
                        the most complex repairs globally, no matter your
                        location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl   flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Network Operations Center – Cyber Security
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Protect your organization with our Cyber Security NOC, featuring
                XDR for advanced threat detection and Deep Packet Inspection for
                real-time network traffic analysis. Our expert team uses
                cutting-edge technology to guard against sophisticated cyber
                threats, ensuring your sensitive data remains secure. Contact us
                today to enhance your cybersecurity.
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

          <div className="mt-10 ">
            <div className=" w-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-4  mt-10 mx-20">
                Value Proposition
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                <strong>Advanced Threat Detection and Response:</strong>
                Our XDR solution uses advanced machine learning to detect and
                respond
                <br />
                to known and unknown threats in real-time, preventing
                sophisticated attacks that traditional tools miss.
                <br /> With Deep Packet Inspection, we gain deeper network
                visibility for faster, more accurate threat detection.
                <br />
                <br />
                <strong>24/7 Monitoring and Support:</strong>
                Our cybersecurity experts provide 24/7 monitoring and real-time
                threat response,
                <br /> ensuring your network is continuously protected from
                malicious activity.
                <br />
                <br />
                <strong>Cost-Effective Solution:</strong>
                Outsource your cybersecurity to us and save on the costs of an
                in-house team.
                <br />
                Our cost-effective solution ensures your data remains secure
                with peace of mind.
                <br />
                <br />
                <strong>Compliance and Regulatory Requirements:</strong>
                Our solution helps you meet compliance requirements like HIPAA,{" "}
                <br />
                GDPR, and PCI DSS, with regular reporting and auditing to ensure
                your data stays <br />
                protected and compliant.
              </p>
            </div>

            {/* Boxes Section */}
          </div>

          <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
            <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
              <img
                className="w-full rounded-lg"
                src={NetworkOperationsCenterEnterpriseNetworking}
                alt="A man working on a laptop in a server room."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Network Operations Center – Enterprise Networking
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Our Network Operation Center (NOC) manages and monitors your
                network infrastructure from our centralized facilities. Staffed
                by trained professionals, we ensure your network's reliability,
                availability, and security through:
                <br />
                Network Monitoring: Continuous oversight to prevent issues and
                security threats.
                <br />
                Incident Management: Quick response to network outages, with
                root cause analysis and solutions.
                <br />
                Network Configuration and Change Management: Controlled
                management of network configurations and changes.
                <br />
                Performance Optimization: Enhancements for improved network
                efficiency and capacity.
                <br />
                Security Management: Protection with firewalls, intrusion
                detection, and other security measures.
                <br />
              </p>
            </div>
            {/* Text Section */}

            {/* Image Section */}
          </div>

          <div className="mt-10 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Value Proposition
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The value proposition of a Network Operation Center (NOC) for
              Enterprise Networking Services is the
              <br /> ability to provide reliable and secure network
              infrastructure that supports business operations. By utilizing a
              NOC,
              <br /> enterprises can benefit from the following:
            </p>

            {/* Boxes Section */}
            <div className="flex flex-wrap justify-center gap-14 px-4">
              {/* Box 1 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={ProactiveMonitoringManagement}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Proactive Monitoring and Management:
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        The NOC team proactively monitors network performance to
                        identify and resolve issues before they affect business
                        operations, minimizing downtime and ensuring seamless
                        functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={ImprovedNetworkPerformance}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Improved Network Performance
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        The NOC team optimizes network performance by enhancing
                        efficiency and capacity, leading to a faster, more
                        reliable network and improved business productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={EnhancedNetworkSecurity}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Enhanced Network Security
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        The NOC team strengthens network security to protect
                        data, reducing breach risks and minimizing financial and
                        reputational damage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] mt-10 bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={CostIT}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className=" flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Reduced IT Costs
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Outsourcing to a NOC cuts IT costs by providing a
                        cost-effective solution for managing network hardware,
                        software, and staffing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[225px] mt-10 bg-transparent cursor-pointer group perspective  ">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={Experts}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                      <p className="w-full text-center bg-blueCustomColor">
                        Access to Expertise
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        The NOC team of experts ensures reliable network
                        performance with quick issue resolution and expert
                        management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" w-full text-xl">
                <p>
                  In summary, the value proposition of a NOC for Enterprise
                  Networking Services is the ability to provide a reliable,
                  secure, and optimized network infrastructure that supports
                  business operations, reduces IT costs, and provides access to
                  a pool of expertise. This allows enterprises to focus on core
                  business activities while ensuring that their network
                  infrastructure is in good hands.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl  flex flex-col lg:flex-row items-center mx-5 justify-between mt-32 pb-10">
            <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
              <img
                className="w-full rounded-lg"
                src={OpsisStreaming}
                alt="A man working on a laptop in a server room."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Opsis Streaming
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Opsis Streaming provides a platform or service for delivering
                live and on-demand video content. Their solutions
                <br />
                typically focus on high-quality streaming, scalability, and ease
                of integration. They might offer features like
                <br />
                live broadcasting, video-on-demand, and adaptive streaming to
                ensure smooth and reliable viewing experiences <br />
                across various devices and network conditions.
              </p>
            </div>
            {/* Text Section */}

            {/* Image Section */}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Navigating the Operational Challenges of Sports Streaming
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The value proposition of a Network Operation Center (NOC) for
              Enterprise Networking Services is the ability to
              <br />
              provide reliable and secure network infrastructure that supports
              business operations. By utilizing a NOC,
              <br />
              enterprises can benefit from the following:
            </p>

            <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
                The Bleacher Blues
              </h1>

              <p className="text-lg text-gray-600 mb-4">
                The roar of the crowd, the electrifying energy of a live game –
                capturing these moments and delivering them seamlessly to a
                global audience is the dream of every sports franchise. But
                behind the excitement lies a complex reality – the operational
                challenges that threaten to turn that dream into a digital
                nightmare.
              </p>

              <div className="space-y-6">
                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Scalability: When Fans Outnumber Seats
                  </h2>
                  <p className="text-gray-600">
                    Imagine the jubilation of a last-minute winning shot,
                    reflected not in cheers but in buffering wheels. That’s the
                    harsh reality of inadequate streaming infrastructure during
                    peak viewership. Scalability issues can cripple entire
                    systems, leaving fans frustrated and franchises hemorrhaging
                    potential revenue. Upgrading infrastructure is costly but
                    failing to do so risks alienating fans and damaging brand
                    reputation.
                  </p>
                </section>

                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Content Chaos: A Library Lost in the Archives
                  </h2>
                  <p className="text-gray-600">
                    A treasure trove of historic moments, interviews, and
                    behind-the-scenes footage – a goldmine for fan engagement.
                    Yet, managing this vast library can be a logistical
                    nightmare. Fragmented systems, outdated tagging, and
                    inefficient search functions leave valuable content buried,
                    hindering fan engagement and monetization opportunities.
                  </p>
                </section>

                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Monetization Mayhem: Turning Views into Revenue
                  </h2>
                  <p className="text-gray-600">
                    Filling seats is one thing, but filling digital wallets is
                    another. Converting viewership into a sustainable revenue
                    stream requires creativity and adaptability. Traditional
                    advertising models struggle to keep pace with changing
                    viewing habits, while subscription fatigue sets in.
                    Diversifying revenue streams through personalized
                    sponsorships, microtransactions, and interactive experiences
                    becomes crucial, demanding a strategic shift from
                    traditional broadcasting models.
                  </p>
                </section>

                <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Data Darkness: Flying Blind in the Digital Arena
                  </h2>
                  <p className="text-gray-600">
                    Understanding fan behavior is paramount to success, yet many
                    franchises struggle to gather and analyze meaningful data.
                    Lack of insights into viewing habits, engagement levels, and
                    content preferences leaves teams flying blind, unable to
                    optimize content strategies and maximize fan engagement.
                    Investing in robust analytics tools and data-driven decision
                    making becomes the key to unlocking hidden revenue streams
                    and fostering deeper connections with fans.
                  </p>
                </section>
              </div>

              <footer className="mt-8">
                <p className="text-lg text-gray-700">
                  These challenges, though daunting, are not insurmountable. By
                  embracing innovation, investing in agile infrastructure, and
                  prioritizing data-driven decision making, sports franchises
                  can transform the bleacher blues into a symphony of success in
                  the digital arena. Remember, the future of fan engagement lies
                  not just in the roar of the crowd, but in the seamless
                  symphony of technology, content, and data that delivers an
                  unparalleled viewing experience. So, silence the buffering
                  wheels, unlock the content vault, and embrace the data
                  revolution – the digital stands await, eager to be filled with
                  cheers, not technical tears.
                </p>
              </footer>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Technologies Utilized
              </h2>

              <div className="flex flex-wrap justify-center gap-14 px-4">
                {/* Box 1 */}
                <div className="w-[300px] h-[225px] border bg-transparent cursor-pointer group perspective  ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={AWSElementalMediaLive}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className=" flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                        <p className="w-full text-center bg-blueCustomColor">
                          AWS Elemental MediaLive
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          AWS Elemental MediaLive is a cloud-based,
                          broadcast-grade live video processing service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="w-[300px] h-[225px] border bg-transparent cursor-pointer group perspective  ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={AWSElementalLive2}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className=" flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                        <p className="w-full text-center bg-blueCustomColor">
                          AWS Elemental Live
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          On-premises solution for live video processing,
                          encoding, and transcoding into multiple formats for
                          broadcast and online streaming, optimized for various
                          devices and internet speeds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective  ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={AWSElementalMediaPackage}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className=" flex items-center justify-center text-white text-2xl font-semibold bg-opacity-40">
                        <p className="w-full text-center bg-blueCustomColor">
                          AWS Elemental MediaPackage
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          Managed service for securely packaging and delivering
                          live and on-demand video streams to various devices
                          and platforms, simplifying video content preparation
                          and distribution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[300px] h-[225px] mt-14 bg-transparent cursor-pointer group perspective  ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={AWSElementalMediaTaylor2}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className=" flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                        <p className="w-full text-center bg-blueCustomColor">
                          AWS MediaTaylor
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          AWS Elemental MediaTailor is a cloud service for
                          inserting personalized ads and creating linear
                          channels for live and on-demand video streams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[300px] h-[225px]  mt-14 bg-transparent cursor-pointer group perspective  ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={AWSElasticTranscoder}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className=" flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                        <p className="w-full text-center bg-blueCustomColor">
                          AWS Elastic Transcoder
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          Cloud-based media transcoding service that converts
                          video and audio files into formats and resolutions for
                          various devices and internet speeds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[300px] h-[225px]  mt-14 bg-transparent cursor-pointer group perspective  ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={AWSCloudfront}
                        alt="Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className=" flex items-center justify-center text-white text-2xl font-semibold  bg-opacity-40">
                        <p className="w-full text-center bg-blueCustomColor">
                          AWS Cloudfront
                        </p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          Content Delivery Network (CDN) service offered by
                          Amazon Web Services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="security-services mt-2">
                  <p className="text-gray-300">
                    Our Managed Services are designed to streamline your
                    business operations, improve productivity, and ensure smooth
                    performance. We provide tailored solutions to meet your
                    enterprise needs, including:
                  </p>
                  <ul className="service-list text-gray-300 space-y-2 mt-4">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Managed Cloud Application
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Managed Collaboration Technologies
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Reduced Downtime
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Managed Help Desk
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Managed On-Site Service
                    </li>

                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 16l3 3L22 7"
                        ></path>
                      </svg>
                      Opsis Streaming
                    </li>
                  </ul>
                </div>
              </div>
              {/* Video Section */}
              <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                <video
                  src={ManagedV}
                  className="h-full w-full object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                ></video>
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
                    maintenance, and updates of your cloud applications,
                    ensuring high availability, security, and scalability. This
                    allows your business to focus on core operations while
                    reducing IT overhead and infrastructure costs.
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
                    Managed Collaboration Technologies include tools such as
                    video conferencing platforms, unified communication systems,
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
                    support. This service complements remote support by
                    addressing issues that require hands-on intervention,
                    ensuring all technical aspects of your business are covered.
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
                    vulnerability assessments, and responds to potential
                    breaches. This proactive approach ensures that your business
                    stays ahead of cybersecurity risks, safeguarding sensitive
                    data and maintaining compliance with industry standards.
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
                    NOC Enterprise Networking monitors and manages the
                    performance of your entire network infrastructure. This
                    includes ensuring optimal bandwidth usage, minimizing
                    network outages, and troubleshooting issues before they
                    impact business operations, ensuring high availability and
                    reliable connectivity for your organization.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ManagedServices;
