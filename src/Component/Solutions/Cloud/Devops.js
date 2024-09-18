import React from "react";
import cloudService from "../../../Assets/devopsIMG.jpeg";
import Navbar from "../../Navbar";

const Devops = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between mt-20 px-4">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            DevOps Consulting
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            As the best DevOps consultant, we automate the manual infrastructure
            deployment process using modern tools to standardize the conventional
            method. Our end-to-end DevOps services help our clients achieve
            increased reliability and frequency of software releases.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2">
          <img
            className="w-full rounded-lg"
            src={cloudService}
            alt="A man working on a laptop in a server room."
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            {/* You can add additional content here if needed */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mt-20 px-4">
        <h1 className="text-3xl font-bold text-gray-900">
          What makes us the top DevOps consulting company?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* First item */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p>
              We minimize the chances of{" "}
              <span className="text-blue-400">
                infrastructure deployment failure and successful rollbacks
              </span>{" "}
              after running frequent tests.
            </p>
          </div>

          {/* Second item */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18v6H3zm0 6h18v6H3zm0 6h18v6H3z"
                />
              </svg>
            </div>
            <p>
              Our DevOps Consultancy helps in solid source code control,{" "}
              <span className="text-blue-400">cloud computing</span>, and
              automated process monitoring.
            </p>
          </div>

          {/* Third item */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <p>
              We have collaborative teams with shared objectives, strong
              working principles, and consistent value delivery.
            </p>
          </div>

          {/* Fourth item */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3"
                />
              </svg>
            </div>
            <p>
              Our best DevOps solutions achieve greater MTTR (Mean Time To
              Recovery) by employing a fully detailed system service architecture.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mb-10 px-4 mt-10">
        <h1 className="text-yellow-400 text-3xl lg:text-4xl font-bold mb-4">
          Why should you get our DevOps consulting services?
        </h1>
        <p className="text-lg">
          Being the leading DevOps consulting company, our best DevOps solutions
          create your roadmap and give 24/7 support.
        </p>
        <p className="text-md mt-2">
          Our end-to-end DevOps consultancy and implementation services boost
          your growth. Need any IT service or application support? Count on us!
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Continuous Delivery */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <div className="bg-green-500 rounded-full p-4">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM9.293 9.293l-3.294 3.294a1 1 0 00-.293.707v6.586a1 1 0 001 1h1.586a1 1 0 00.707-.293l3.294-3.293 1.414 1.414L8.707 21.707a2 2 0 01-1.414.586H6a2 2 0 01-2-2v-6.586a2 2 0 01.586-1.414l3.293-3.293 1.414 1.414zm8.486-8.486a1 1 0 010 1.414L11.414 9.707a1 1 0 01-1.414 0L9 8.707l7.293-7.293a1 1 0 011.414 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Continuous Delivery</h3>
            <p className="text-center">
              Our DevOps service delivers excellent continuous delivery (CD)
              capabilities with automation to boost your service efficiency.
            </p>
          </div>

          {/* Configuration Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <div className="bg-yellow-400 rounded-full p-4">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3M12 8l-3 3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Configuration Management</h3>
            <p className="text-center">
              We offer consistent deployment services for Configuration Management.
              It eliminates system configuration mismatches while optimizing cost.
            </p>
          </div>

          {/* Infrastructure As a Code */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <div className="bg-green-500 rounded-full p-4">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m0 0l-3 3m3-3H9m3-3H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Infrastructure As a Code</h3>
            <p className="text-center">
              Our service enables infrastructure provisioning with code, ensuring
              consistency and flexibility in deployments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Devops;
