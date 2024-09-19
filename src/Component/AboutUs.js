import React from "react";
import companyImage from "../../Assets/imageAbout.jpg"; // Ensure the path to the image is correct
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutImg from "../../Assets/About.png";
import About3 from "../../Assets/About3.mp4";
import CollebrationAbout from "../../Assets/CollegrationAbout.png";
import value from "../../Assets/value.png";
import Diversity from "../../Assets/Diversity.png";
import GlobalImpact from "../../Assets/GlobalImpact.png";
 
const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-blueCustomColor text-white min-h-screen  flex  items-center justify-center">
        <div className="max-w-xl text-center justify-center mt-20 m">
          <div className=" mx-2">
            <h1 className="text-5xl font-bold mb-4">
              Discover how the world works with GlobalXperts
            </h1>
            <p className="text-xl mb-8">
              We help organizations of every size, in every industry, put AI to
              work for people.
            </p>
            <div className="flex space-x-4 text-center">
              <button className="bg-green-500 mx-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                <svg
                  className="inline-block mr-2"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Watch Video
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                View Fact Sheet
                <svg
                  className="inline-block ml-2"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M13 17h8l-4-4-4 4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl mt-12 rounded-lg overflow-hidden px-5">
          <img
            className="w-full h-full object-cover rounded-md"
            src={AboutImg}
            alt="People in an office setting"
          />
        </div>
      </div>
      <div className=" w-full flex p-5 mt-10 gap-2">
        <div className=" w-full rounded-lg">
          <video
            src={About3}
            className="h-full w-full object-cover rounded-md"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
 
        <div className=" w-full mx-5 ">
          <h1 className=" text-4xl text-center py-5 text-black font-bold">
            About GlobalXperts
          </h1>
          <p className=" text-lg px-2 font-medium">
            Founded in 2005 and headquartered in Raleigh, North Carolina,
            GlobalXperts operates in three key areas: Professional Services,
            Technical Staffing, and Managed Services support for Data Center for
            On-Premises & Cloud, Security, Collaboration, and SDN in IT
            networks. With a vendor-agnostic approach, our technical staff holds
            expertise in Cisco UC solutions and certifications with AWS Cloud,
            Microsoft, Arista, VMware, EMC, Oracle, NetApp, and more. <br />{" "}
            <br />
            <p className=" text-lg px-2">
              Our 24/7 global team offers expert professional services, from
              “Smart Hands” to SMEs, across all stages of enterprise networking,
              Data Center, and Cloud technologies. We specialize in planning,
              design, automation, implementation, and operations to support your
              needs worldwide.
            </p>
          </p>
        </div>
      </div>
 
      <div className=" w-full mt-10">
        <div className="bg-gray-100 py-16 px-8">
          <div className="container mx-auto flex flex-col gap-2 items-center justify-between md:flex-row">
            <div className="flex flex-col items-start space-y-8 md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
              <p className="text-lg text-gray-600">
                We provide cutting-edge Multi-Cloud, DevOps, AI-driven, and
                Networking solutions, including Cisco, Meraki, Arista, and
                advanced firewall, routers & switch services. Our expertise
                spans data centers, field services, and professional IT
                services, leveraging AI and automation to ensure seamless
                operations and secure infrastructure. Additionally, we deliver
                innovative software development, AI-powered tools, media and
                broadcasting solutions, and live streaming services, along with
                comprehensive IT support for businesses looking to thrive in the
                digital age.
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Contact
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={CollebrationAbout}
                alt="People talking"
                className="w-full h-auto rounded-lg shadow-lg mt-5"
              />
              <div className="text-center mt-8">
                <h3 className="text-5xl font-bold text-gray-800">100%</h3>
                <p className="text-gray-600">
                  of the Fortune 500® work with GlobalXperts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="container mx-auto mt-5 p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-4 mx-5 text-center justify-center md:text-left w-full flex">
          Our commitments
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Professional Service Section */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={value}
              className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
              alt="Employees"
            />
            <h2 className="text-xl md:text-2xl font-bold mb-4">Values</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Our values guide us to always do the right thing in our ambition
              to be the defining enterprise service-based company of the 21st
              century.
            </p>
            <ul className="mt-10 "></ul>
          </div>
 
          {/* Managed Service Section */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={Diversity}
              alt="Customers"
              className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Diversity, Equity, and Inclusion
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Building equity at home is the first step to global progress. When
              diverse ideas come together, real change happens, and everyone
              benefits.
            </p>
            <ul className="mt-16"></ul>
          </div>
 
          {/* Networking Consulting Section */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={GlobalImpact}
              alt="IT Operations"
              className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Global Impact
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Through promoting a net-zero carbon environment, improving
              workplace equity for all, and acting with integrity, we contribute
              to making the world a better place to work.
            </p>
            <ul className="mt-16 md:"></ul>
          </div>
        </div>
      </div>
 
      <Footer />
    </>
  );
};
 
export default About;
 
 