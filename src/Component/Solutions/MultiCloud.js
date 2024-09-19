import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import v1 from "../../Assets/gradient.mp4";
import colobraction from "../../Assets/cloudSpace.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Img1 from "../../Assets/AWS.jfif";
import Img2 from "../../Assets/azure.jfif";
import Img3 from "../../Assets/gcp.png";
import { useEffect, useState } from "react";
import c1 from "../../Assets/AWservice.jfif";
import MicrosoftAzure from "../../Assets/MicrosoftAzure.png";
import c3 from "../../Assets/google2.jpg";
import { Link } from "react-router-dom";
import ContactCard from '../Contact/ContactCard'


function MultiCloud() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  const slides = [
    {
      id: 1,
      img: Img1,
    },
    {
      id: 2,
      img: Img2,
    },
    {
      id: 3,
      img: Img3,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Slide changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className=" w-full  h-screen">
        <div className=" w-full">
          <Navbar />
        </div>
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-14">
          <div className="max-w-7xl mx-auto flex    flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-5">
                Multi-Cloud Solutions
              </h2>
              <p className="mt-8 text-xl text-gray-500 ">
                Multi-Cloud Solutions leverage AWS, Azure, and Google Cloud to
                enhance flexibility, resilience, and performance. This approach
                optimizes workloads, improves disaster recovery, and allows
                businesses to select best-in-class services without vendor
                lock-in.
              </p>
            </div>
            {/* Image Section */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2 ">
              <img
                className="w-full rounded-lg l object-cover"
                src={colobraction}
                alt="A man working on a laptop in a server room."
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
            </div>
          </div>

          <div className="w-full px-4 py-12">
            <h2 className="text-5xl font-bold text-center text-gray-800 mt-12 mb-6">
              Overview of Multi-Cloud Solutions
            </h2>
            <p className="text-center text-gray-600 text-2xl mb-8">
              Multi-Cloud Solutions offer flexibility, reduce vendor lock-in,
              and let you choose the best tools for your needs. Understanding
              each provider’s strengths is key to successful integration.
            </p>
            <ul className="list-disc list-inside mx-auto max-w-4xl text-gray-600 text-xl">
              <li className="mb-6">
                <strong className="text-gray-800">AWS:</strong> Scalable,
                reliable, with flexible pricing for diverse needs.
              </li>
              <li className="mb-6">
                <strong className="text-gray-800">Microsoft Azure:</strong>{" "}
                Exceptional security, compliance, and seamless integration with
                Microsoft products.
              </li>
              <li className="mb-6">
                <strong className="text-gray-800">Google Cloud:</strong>{" "}
                High-performance, innovative tools, and smooth integration with
                Google services.
              </li>
            </ul>
            <p className="text-center text-gray-600 text-xl mt-8">
              Each provider offers unique benefits, allowing you to build a
              flexible, future-ready cloud strategy.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap justify-center gap-14  mt-10 px-4">
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
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40"></div>
                  </div>

                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2  text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-5">
                        AWS is a versatile cloud platform by Amazon, providing
                        services such as computing, storage, databases,
                        analytics, and machine learning. It is renowned for its
                        scalability, reliability, and flexibility. Key benefits
                        include.
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
                      src={MicrosoftAzure}
                      alt="Service Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40"></div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-10">
                        Microsoft Azure: A cloud platform known for security,
                        seamless integration with Microsoft products, hybrid
                        cloud capabilities, and scalability.
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
                    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40"></div>
                  </div>
                  {/* Back side with content */}
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                    <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                      <p className="text-lg py-2 text-gray-200 mt-20">
                        Google Cloud: A cloud platform known for high
                        performance, innovation, and seamless integration with
                        other Google products, offering a wide range of services
                        including computing, storage, and machine learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blueCustomColor p-10 mt-28">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Value Proposition
                </h2>
                <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                  Our multi-cloud solution combines the strengths of AWS, Azure,
                  and Google Cloud to provide a flexible, secure, and
                  high-performance cloud environment. Choose the best services
                  from each provider to suit your business needs, reduce vendor
                  lock-in, and optimize costs. Seamlessly integrate these
                  platforms into your IT infrastructure for maximum value and
                  performance.
                </p>
              </div>
              {/* Video Section */}
              <div className="relative mt-12 lg:mt-0 lg:w-1/2">
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

          <div className="container mx-auto mt-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Unleashing <span className="italic">power of </span> the multiple
              clouds, <span className="italic">seamlessly.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-start">
              {/* Left Side Slider */}
              <div className="w-full md:w-2/3 p-4">
                <div className="relative w-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((slide) => (
                      <div key={slide.id} className="w-full flex-shrink-0">
                        <div className="relative bg-black rounded-lg overflow-hidden text-white">
                          <img
                            src={slide.img}
                            className="w-full h-[500px] md:h-[500px] object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Arrows */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
                    <button
                      className="bg-white rounded-full p-2 shadow-md"
                      onClick={handlePrev}
                    >
                      <FaArrowLeft className="text-black" />
                    </button>
                    <button
                      className="bg-white rounded-full p-2 shadow-md"
                      onClick={handleNext}
                    >
                      <FaArrowRight className="text-black" />
                    </button>
                  </div>
                </div>
                {/* Pagination */}
                <div className="text-center mt-4">
                  <span>
                    {currentSlide + 1}/{slides.length}
                  </span>
                </div>
              </div>

              {/* Right Side Boxes */}
              <div className="w-full md:w-1/3 p-4">
                <div className="mb-4">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4">Cloud Solution</h3>
                    <p>
                      Leverage advanced multi-cloud strategies to maximize your
                      cloud infrastructure's efficiency. Our solutions ensure
                      smooth integration, robust performance, and secure
                      management across diverse cloud environments.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline mt-2 block"
                    >
                      Explore Solutions →
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      Emerging Cloud Technologies
                    </h3>
                    <p>
                      Discover the latest in cloud technologies, including
                      AI-driven services, serverless computing, and advanced
                      security. Stay informed on how these innovations are
                      shaping the cloud landscape.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline mt-2 block"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
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
                    What is multi-cloud?
                  </h2>
                  {activeQuestion === 0 && (
                    <p className="text-lg mb-4">
                      Multi-cloud refers to the use of multiple cloud services
                      from different providers, such as AWS, Azure, and Google
                      Cloud, to avoid vendor lock-in, enhance flexibility, and
                      optimize performance and cost. It allows organizations to
                      leverage the best features of each platform while managing
                      data and applications across various environments.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(1)}
                  >
                    Why is multi-cloud important?
                  </h2>
                  {activeQuestion === 1 && (
                    <p className="text-lg mb-4">
                      Multi-cloud is important because it provides greater
                      resilience, flexibility, and performance optimization. By
                      distributing workloads across multiple cloud environments,
                      organizations can minimize the risk of outages, access a
                      broader range of services, and choose the most
                      cost-effective and high-performing solutions for their
                      needs.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(2)}
                  >
                    How does multi-cloud improve security?
                  </h2>
                  {activeQuestion === 2 && (
                    <p className="text-lg mb-4">
                      Multi-cloud improves security by allowing organizations to
                      use multiple security protocols and controls across
                      different platforms. It enables the implementation of
                      redundant security measures, compliance across regions,
                      and reduces the impact of potential security breaches from
                      a single provider, thus enhancing overall data protection.
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
                    What are the challenges of multi-cloud management?
                  </h2>
                  {activeQuestion === 3 && (
                    <p className="text-lg mb-4">
                      Multi-cloud management can be complex due to varying
                      architectures, interfaces, and services offered by
                      different cloud providers. It requires careful
                      orchestration, consistent security policies, and effective
                      monitoring tools to ensure seamless integration and avoid
                      cost overruns. Additionally, managing data consistency and
                      avoiding vendor lock-in can be challenging.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(4)}
                  >
                    How can organizations optimize costs with multi-cloud?
                  </h2>
                  {activeQuestion === 4 && (
                    <p className="text-lg mb-4">
                      Organizations can optimize costs in a multi-cloud
                      environment by leveraging the best pricing models and
                      discounts from each provider, using reserved instances,
                      and dynamically scaling resources based on demand.
                      Additionally, avoiding vendor lock-in allows for the
                      negotiation of better pricing and utilization of free-tier
                      services across different clouds.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(5)}
                  >
                    What are best practices for multi-cloud adoption?
                  </h2>
                  {activeQuestion === 5 && (
                    <p className="text-lg mb-4">
                      Best practices for multi-cloud adoption include having a
                      clear strategy, selecting the right mix of services based
                      on performance and cost, implementing unified security
                      measures, and using automation for deployment and
                      monitoring. Organizations should also invest in skilled
                      teams and tools that can handle the complexities of
                      managing multiple cloud platforms effectively.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactCard/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MultiCloud;
