import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Assets/cloud.avif";
import img2 from "../../Assets/aws2.jpg";
import Footer from "../Footer";
import cloudSerive from "../../Assets/dvops.png";
import c1 from "../../Assets/cloud2.jpg";
import c2 from "../../Assets/migration.avif";
import c3 from "../../Assets/image (10).png";
import c4 from "../../Assets/image (11).png";
import c5 from "../../Assets/image (12).png";
import c6 from "../../Assets/image (13).png";
import ContactCard from "../Contact/ContactCard";
// import { IoMdContact } from "react-icons/io";
import { FcCustomerSupport } from "react-icons/fc";

const Cloud = () => {
  const images = [img2, img1]; // Array of image imports
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageSubIndex, setCurrentImageSubIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Combine both setState functions into one `afterChange` function
  const handleAfterChange = (index) => {
    setCurrentImageIndex(index);
    setCurrentImageSubIndex(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    afterChange: handleAfterChange, // Use the combined function here
  };

  const texts = ["Amazon Partner Information", "Microsoft Azure"];

  const subTexts = [
    "Partner Path(s): Software and Services Staff Members – AWS Technology Competencies AWS Technology Competencies are a way for AWS",
    "Overview Microsoft Azure – Optimize across workloads and environments and accomplish more with a comprehensive cloud platform.",
  ];

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="bg-gray-100">
          <div className="p-8 max-w-7xl mx-auto">
            <div className="bg-gray-100  py-12 px-4 sm:px-6 lg:px-8 mt-14">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Cloud & DevOps
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    GlobalXperts delivers expert cloud solutions, from
                    consulting and migration to DevOps and 24/7 support,
                    ensuring optimal performance and cost efficiency throughout
                    your cloud journey.
                  </p>
                </div>

                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2 ">
                  <img
                    className="w-full rounded-lg"
                    src={cloudSerive}
                    alt="A man working on a laptop in a server room."
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-center mt-28">Overview</h2>
              <p className="text-center mt-5 text-gray-700 text-xl">
                GlobalXperts is your one-stop shop for cloud computing, offering
                independent expertise and services from strategy development to
                workload migration and continuous optimization.
              </p>
              <p className="text-center mt-5 text-gray-700 text-xl">
                We align your people, processes, and technology, ensuring
                visibility and resilience as your cloud infrastructure scales
                with business growth.
              </p>
              <p className="text-center mt-5 text-gray-700 text-xl">
                Unlock the cloud's full potential with GlobalXperts’ tailored
                solutions, designed to help you achieve your business goals and
                drive success.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-14 px-4">
              {/* Box 1 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c1}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">
                        Cloud Strategy & Consulting
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Add value to your business with the right Cloud strategy
                        to cut down costs and deliver a differentiated customer
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c2}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">Cloud Migration</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Seamless migration of your data, applications &
                        workloads from data centers & on-premise to Cloud.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c3}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">DevOps as a Service</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Automation of end-to-end delivery pipeline across Cloud
                        platforms for faster go-to-market, increased efficiency
                        & reduced cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 4 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c4}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">Managed Services</p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Support and monitoring by certified SysOps and Cloud
                        administrators for incident handling & resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 5 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c5}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">
                        Next-gen ARM Processor
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-base py-2 text-gray-200 mt-10">
                        Next-gen ARM based processor for enhanced performance,
                        scalability and cost-efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 6 */}
              <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  {/* Front side with image */}
                  <div className="absolute backface-hidden w-full h-full">
                    <img
                      src={c6}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40">
                      <p className="w-full text-center">
                        Prolific I/O – Storage Accelerator (IOSA)
                      </p>
                    </div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-15 text-gray-300">
                      <p className="text-sm py-1 text-gray-200 mt-5">
                        <div class="  rounded-md">
                          <ul class="list-disc list-inside text-white">
                            <li>
                              Prolific I/O Storage Accelerator dynamically
                              scales throughput and IOPS to meet peak demand.
                            </li>
                            <li>
                              Ensures peak throughput runs only when needed to
                              avoid unnecessary expenses during off-peak
                              periods.
                            </li>
                            <li>
                              Leverages additional EC2 instances as accelerators
                              to offload EBS read and write operations.
                            </li>
                          </ul>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gray-100 p-8 mt-10">
              <h1 className="text-3xl font-bold  py-5">Cloud Partners</h1>
              <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    <Slider {...settings}>
                      {images.map((image, index) => (
                        <div key={index}>
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                      {texts[currentImageIndex]}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {subTexts[currentImageSubIndex]}
                    </p>
                    <div className="flex gap-4">
                      <Link
                        to=""
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Discover Solution
                      </Link>
                      <button
                        onClick={handleContactUsClick}
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-lg"
                      >
                        <FcCustomerSupport size={24} />
                        <span>Contact Us</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 py-16">
              <div className="flex mb-16">
                {/* <Link to={ContactCard} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4">
                    Contact Us
                  </Link> */}
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                  FAQs <span className="ml-2">→</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-4">
                    <h2
                      className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                      onClick={() => handleToggle(0)}
                    >
                      What is AWS, and how does it benefit businesses?
                    </h2>
                    {activeQuestion === 0 && (
                      <p className="text-lg mb-4">
                        AWS (Amazon Web Services) is a comprehensive cloud
                        computing platform that provides a wide range of
                        services, including computing power, storage, and
                        databases. It benefits businesses by offering scalable,
                        cost-effective solutions that enable rapid deployment of
                        applications, reducing the need for upfront hardware
                        investment.
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <h2
                      className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                      onClick={() => handleToggle(1)}
                    >
                      How does Kubernetes enhance DevOps workflows?
                    </h2>
                    {activeQuestion === 1 && (
                      <p className="text-lg mb-4">
                        Kubernetes is an open-source container orchestration
                        platform that automates the deployment, scaling, and
                        management of containerized applications. It enhances
                        DevOps workflows by streamlining operations, increasing
                        deployment speed, and providing better resource
                        utilization through automated scaling.
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <h2
                      className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                      onClick={() => handleToggle(2)}
                    >
                      What is Azure DevOps, and how does it support CI/CD?
                    </h2>
                    {activeQuestion === 2 && (
                      <p className="text-lg mb-4">
                        Azure DevOps is a suite of development tools that
                        supports continuous integration (CI) and continuous
                        delivery (CD) by providing version control, build
                        automation, testing, and release management. It
                        streamlines the software development lifecycle, helping
                        teams deliver high-quality software faster and more
                        reliably.
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
                      What is Terraform, and why is it popular in DevOps?
                    </h2>
                    {activeQuestion === 3 && (
                      <p className="text-lg mb-4">
                        Terraform is an open-source infrastructure as code (IaC)
                        tool that allows teams to define and provision
                        infrastructure using a declarative configuration
                        language. It is popular in DevOps because it supports
                        multi-cloud environments, enables version control of
                        infrastructure, and simplifies the process of managing
                        complex deployments.
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <h2
                      className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                      onClick={() => handleToggle(4)}
                    >
                      How does Jenkins facilitate continuous integration?
                    </h2>
                    {activeQuestion === 4 && (
                      <p className="text-lg mb-4">
                        Jenkins is an open-source automation server that
                        facilitates continuous integration by automating the
                        build and testing of software projects. It supports a
                        wide range of plugins, making it highly customizable and
                        enabling teams to integrate various tools and processes
                        into their CI/CD pipelines.
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <h2
                      className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                      onClick={() => handleToggle(5)}
                    >
                      What is Docker, and how does it improve application
                      deployment?
                    </h2>
                    {activeQuestion === 5 && (
                      <p className="text-lg mb-4">
                        Docker is a platform that enables developers to create,
                        deploy, and run applications in containers. Containers
                        package software and its dependencies, ensuring
                        consistent performance across different environments,
                        and improving application deployment by making it more
                        scalable and portable.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={contactRef}>
          <ContactCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cloud;
