import React, { useRef } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import v1 from "../../../Assets/TCDvid.mp4";
import colobraction from "../../../Assets/cloudSpace.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Img1 from "../../../Assets/AWS.jfif";
import Img2 from "../../../Assets/azure.jfif";
import Img3 from "../../../Assets/gcp.png";
import { useEffect, useState } from "react";
import c1 from "../../../Assets/AWservice.jfif";
import MicrosoftAzure from "../../../Assets/MicrosoftAzure.png";
import c3 from "../../../Assets/google2.jpg";
import { Link } from "react-router-dom";
import ContactCard from "../../Contact/ContactCard";
import { Helmet } from "react-helmet";

function MultiCloud() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null); // Reference to the FAQ section

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const scrollToFAQs = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Scroll to the start of the section
      });
    }
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

  const faqs = [
    {
      question: "What is multi-cloud?",
      answer:
        "Multi-cloud refers to the use of multiple cloud services from different providers, such as AWS, Azure, and Google Cloud, to avoid vendor lock-in, enhance flexibility, and optimize performance and cost. It allows organizations to leverage the best features of each platform while managing data and applications across various environments.",
    },
    {
      question: "Why is multi-cloud important?",
      answer:
        "Multi-cloud is important because it provides greater resilience, flexibility, and performance optimization. By distributing workloads across multiple cloud environments, organizations can minimize the risk of outages, access a broader range of services, and choose the most cost-effective and high-performing solutions for their needs.",
    },
    {
      question: "How does multi-cloud improve security?",
      answer:
        "Multi-cloud improves security by allowing organizations to use multiple security protocols and controls across different platforms. It enables the implementation of redundant security measures, compliance across regions, and reduces the impact of potential security breaches from a single provider, thus enhancing overall data protection.",
    },
    {
      question: "What are the challenges of multi-cloud management?",
      answer:
        "Multi-cloud management can be complex due to varying architectures, interfaces, and services offered by different cloud providers. It requires careful orchestration, consistent security policies, and effective monitoring tools to ensure seamless integration and avoid cost overruns. Additionally, managing data consistency and avoiding vendor lock-in can be challenging.",
    },
    {
      question: "How can organizations optimize costs with multi-cloud?",
      answer:
        "Organizations can optimize costs in a multi-cloud environment by leveraging the best pricing models and discounts from each provider, using reserved instances, and dynamically scaling resources based on demand. Additionally, avoiding vendor lock-in allows for the negotiation of better pricing and utilization of free-tier services across different clouds.",
    },
    {
      question: "What are best practices for multi-cloud adoption?",
      answer:
        "Best practices for multi-cloud adoption include having a clear strategy, selecting the right mix of services based on performance and cost, implementing unified security measures, and using automation for deployment and monitoring. Organizations should also invest in skilled teams and tools that can handle the complexities of managing multiple cloud platforms effectively.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Multi-Cloud Solutions</title>
        <meta name="description" content="Multi-Cloud" />
      </Helmet>
      <div className=" ">
        <div className=" w-full">
          <Navbar />
        </div>
        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Multi-Cloud Solutions
                </h2>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact-us"
                    className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Contact Us
                  </Link>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                    onClick={scrollToFAQs}
                  >
                    FAQs <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
              <div className="w-full text-center lg:text-right mt-10 lg:mt-0 order-3 lg:order-2">
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                  “Revitalize your business with our Mulit Cloud Solutions
                  solutions.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-14">
          <div className="max-w-7xl mx-auto flex    flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <p className="mt-8 text-xl text-gray-500">
                Leverage AWS, Azure, and Google Cloud to enhance flexibility and
                performance while avoiding vendor lock-in.
              </p>
            </div>
            {/* Image Section */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2">
              <img
                className="w-full rounded-lg object-cover"
                src={colobraction}
                alt="A man working on a laptop in a server room."
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mt-12 mb-6">
              Overview of Multi-Cloud Solutions
            </h2>
            <p className="text-center text-gray-600 md:text-2xl mb-8">
              Multi-Cloud Solutions reduce vendor lock-in and enable the
              selection of optimal tools.
            </p>
           
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-14 mt-10 px-4">
              {/* Box 1 - AWS */}
              <Link to="/solutions/cloud/aws">
                <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c1}
                        alt="AWS Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40"></div>
                    </div>

                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-5">
                          AWS: Versatile cloud platform with scalable computing,
                          storage, and machine learning services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Box 2 - Azure */}
              <Link to="/solutions/cloud/azure">
                <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={MicrosoftAzure}
                        alt="Azure Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40"></div>
                    </div>

                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-10">
                          Azure: Secure cloud platform with seamless Microsoft
                          integration and scalability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Box 3 - Google Cloud */}
              <Link to="/solutions/cloud/GCP">
                <div className="w-[300px] h-[225px] bg-transparent cursor-pointer group perspective border border-gray-300">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c3}
                        alt="Google Cloud Service Image"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold bg-black bg-opacity-40"></div>
                    </div>

                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 text-gray-300">
                        <p className="text-lg py-2 text-gray-200 mt-20">
                          Google Cloud: High-performance platform with
                          innovative services and integration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* <div className="bg-blueCustomColor p-10 mt-28">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Value Proposition
                </h2>
                <p className="mt-3 text-lg text-gray-300 sm:mt-4">
                  Our multi-cloud solution harnesses the power of AWS, Azure,
                  and Google Cloud to deliver a flexible, secure, and
                  high-performance environment. Optimize costs, reduce vendor
                  lock-in, and seamlessly integrate services tailored to your
                  business needs.
                </p>
              </div>
             
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
          </div> */}

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
                    <h3 className="text-2xl font-bold mb-4">Cloud Solutions</h3>
                    <p>
                      Maximize your cloud efficiency with our advanced
                      multi-cloud strategies. Enjoy seamless integration, robust
                      performance, and secure management across diverse
                      environments.
                    </p>
                    {/* <a
                      href="#"
                      className="text-blue-500 hover:underline mt-2 block"
                    >
                      Explore Solutions →
                    </a> */}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4">
                      Emerging Technologies
                    </h3>
                    <p>
                      Stay updated on AI-driven services, serverless computing,
                      and advanced security technologies shaping the cloud
                      landscape.
                    </p>
                    {/* <a
                      href="#"
                      className="text-blue-500 hover:underline mt-2 block"
                    >
                      Learn More →
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16 ">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
              Frequently Asked Questions
            </h1>
            <div className="border border-blue-700 rounded-lg  mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <h2
                    className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                    onClick={() => handleToggle(index)}
                  >
                    {faq.question}
                  </h2>
                  {activeQuestion === index && (
                    <p className="text-lg mb-4 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <ContactCard />
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MultiCloud;
