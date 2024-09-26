import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import sm from "../../Assets/smb.png";
import Footer from "../Footer";
import v1 from "../../Assets/Blue Technical Roadmap Brainstorm.png";
import c1 from "../../Assets/laas.avif";
import c2 from "../../Assets/backup.avif";
import c3 from "../../Assets/saas.avif";
import s1 from "../../Assets/cyber.png";
import s2 from "../../Assets/cyber4.jpg";
import s3 from "../../Assets/cloud.avif";
import s4 from "../../Assets/aws2.jpg";
import comu from "../../Assets/comunication.jpg";
import { Link } from "react-router-dom";

import ContactCard from "../Contact/ContactCard";
function SmallandMediumBusiness() {
  
  const slides = [
    {
      id: 1,
      title: "GX Customer Connect",
      description:
        "Transform customer interactions with GX Customer Connect, a cloud-based contact center solution that boosts efficiency and scales with AI-powered features.",
      image: s1,
      link: "/GX-Connect",
    },
    {
      id: 2,
      title: "AWS Medium Business Applications",
      description:
        "GlobalXperts, in partnership with AWS, offers scalable cloud services for SMBs, including virtual servers and analytics, enhancing operational efficiency.",
      image: s2,
      link: "/AWSmall-medium",
    },
    {
      id: 3,
      title: "AWS Migration Services",
      description:
        "Streamline your cloud journey with AWS Migration Hub, a central platform for planning and tracking data center migrations.",
      image: s3,
      link: "/AWS-Migration",
    },
    {
      id: 4,
      title: "VirtualWorkx",
      description:
        "Empower remote work with Amazon WorkSpaces, a managed cloud desktop service offering secure, high-performance virtual desktops accessible from anywhere.",
      image: s4,
      link: "/Virtual-Work",
    },
    {
      id: 5,
      title: "Titan GX On-site Storage",
      description:
        "Optimize data storage with secure, scalable cloud solutions tailored to your needs, using Hyperconverged Storage and TrueNAS for hybrid environments.",
      image: s4,
      link: "/TitanGX",
    },
  ];
  
  const handleSlideClick = (link) => {
    window.location.href = link;
  };
  const allSlides = [...slides, ...slides, ...slides];
  const [currentSlide, setCurrentSlide] = useState(slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = prevSlide + 1;
        if (nextSlide >= slides.length * 2) {
          setTimeout(() => setCurrentSlide(slides.length), 0); // Reset to the first slide smoothly
          return slides.length;
        }
        return nextSlide;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide + 1;
      if (nextSlide >= slides.length * 2) {
        setTimeout(() => setCurrentSlide(slides.length), 0);
        return slides.length;
      }
      return nextSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => {
      const prevSlideIndex = prevSlide - 1;
      if (prevSlideIndex < slides.length) {
        setTimeout(() => setCurrentSlide(slides.length * 2 - 1), 0);
        return slides.length * 2 - 1;
      }
      return prevSlideIndex;
    });
  };
  return (
    <div>
      <div className="w-full">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
              <h2 className="text-3xl font-bold text-CustomHeading sm:text-4xl mb-8">
                Small and Medium Business
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Small and medium businesses (SMBs) are increasingly adopting
                cloud computing to enhance efficiency and stay competitive.
                Cloud solutions offer scalable and cost-effective IT resources,
                reducing the need for significant upfront investments in
                hardware. By leveraging these technologies, SMBs can optimize
                operations, lower costs, and easily adjust resources to meet
                changing demands. This agility allows businesses to focus on
                innovation and growth rather than managing complex IT
                environments.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-center mt-[104px]">
              <img
                className="w-5/6 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                src={sm}
                alt="A man working on a laptop in a server room."
              />
            </div>
          </div>
          <div className="w-full px-4">
            <h2 className="text-4xl font-bold text-center mt-28">
              {" "}
              Empowering Your Business with Expert IT Solutions
            </h2>
          </div>

          <div className="mt-0">
            <section className="h-screen flex flex-col justify-center items-center gap-y-16 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Existing Card 1 */}
                <div className="w-full h-[150px] lg:w-[400px] lg:h-[300px] bg-transparent cursor-pointer group perspective lg:border lg:border-greenCustomColor2">
                  <div className="relative lg:preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="lg:absolute backface-hidden w-full h-full">
                      <img
                        src={c1}
                        alt="IaaS"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-semibold bg-black bg-opacity-40">
                        <p className="text-center mt-10">IaaS</p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <h1 className="text-4xl font-semibold underline decoration-gray-500 mt-5">
                          Infrastructure as a Service
                        </h1>
                        <p className="text-lg py-2 text-gray-200 mt-5">
                          Outsource infrastructure management by renting virtual
                          resources like machines and storage, enabling
                          scalability and cost reduction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Existing Card 2 */}
                <div className="w-full h-[150px] lg:w-[400px] lg:h-[300px] bg-transparent cursor-pointer group perspective lg:border lg:border-greenCustomColor2">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c2}
                        alt="Data Backup"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-semibold bg-black bg-opacity-40">
                        <p className="text-center mt-0 lg:mt-10">Data Backup</p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <h1 className="text-4xl font-semibold underline decoration-gray-500 mt-16">
                          Data Backup and Recovery
                        </h1>
                        <p className="text-lg py-2 text-gray-200 mt-5">
                          Securely protect critical data with cloud storage,
                          simplifying recovery and eliminating physical backup
                          needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Card 1 */}
                <div className="w-full h-[150px] lg:w-[400px] lg:h-[300px] bg-transparent cursor-pointer group perspective lg:border lg:border-greenCustomColor2">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={c3}
                        alt="SaaS"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-semibold bg-black bg-opacity-40">
                        <p className="text-center mt-10">SaaS</p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <h1 className="text-4xl font-semibold underline decoration-gray-500 mt-16">
                          Software as a Service
                        </h1>
                        <p className="text-lg py-2 text-gray-200 mt-5">
                          Access software via the cloud, covering CRM, HR, and
                          more, with subscription-based pricing for
                          cost-effectiveness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Card 2 */}
                <div className="w-full h-[150px] lg:w-[400px] lg:h-[300px] bg-transparent cursor-pointer group perspective lg:border lg:border-greenCustomColor2">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    {/* Front side with image */}
                    <div className="absolute backface-hidden w-full h-full">
                      <img
                        src={comu}
                        alt="Collaboration and Communication"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-semibold bg-black bg-opacity-40">
                        <p className="text-center mt-10">Collaboration</p>
                      </div>
                    </div>
                    {/* Back side with content */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blueCustomColor overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-24 text-gray-300">
                        <h1 className="text-4xl font-semibold underline decoration-gray-500 mt-16">
                          Collaboration and Communication
                        </h1>
                        <p className="text-lg py-2 text-gray-200 mt-5">
                          Leverage cloud-based software for business needs,
                          ensuring accessible and cost-effective solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="bg-blueCustomColor p-10 lg:mt-0 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Product Offering Details
                </h2>
                <div className="security-services mt-2">
                  <p className="text-gray-300">
                    We understand SMBs' challenges in competing with larger
                    organizations, so we provide scalable, usage-based solutions
                    that keep up with current technology. Below are some of our
                    offerings:
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
                      Amazon Web Services
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
                      Call Center Solutions
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
                      Microsoft Products for the Office
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
                      Microsoft Advanced Services
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
                      Network Attached Infrastructure
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
                      Titan GX On-Site Storage
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
                      Customer Service | Helpdesk
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
                      Desktop Software and Hardware
                    </li>
                  </ul>
                </div>
              </div>
              {/* Video Section */}
              <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                <img
                  className="w-full rounded-lg"
                  src={v1}
                  alt="A man working on a laptop in a server room."
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto  justify-center flex mt-16">
            <div className="text-center  mx-10">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                AWS – Small Medium Business Applications
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Multi-Cloud Solutions involve using multiple cloud service
                providers to manage different aspects of an organization's IT
                infrastructure. This approach offers greater flexibility,
                redundancy, and risk management by leveraging the strengths of
                various cloud platforms for storage, computing, and services.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto relative overflow-hidden mt-5">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${(currentSlide * 100) / 3}%)` }}
            >
              {allSlides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 lg:w-1/3 p-4"
                  onClick={() => handleSlideClick(slide.link)}
                >
                  <div className="flex flex-col border cursor-pointer justify-between items-center bg-white h-full border-greenCustomColor2">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-48   object-cover"
                    />
                    <div className="text-center p-5">
                      <h3 className="text-xl font-bold text-green-800">
                        {slide.title}
                      </h3>
                      <p className="text-gray-600 mt-3">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Buttons */}
            <div className=" max-w-7xl mx-auto absolute inset-y-1/2 left-0 transform -translate-y-1/2 px-4">
              <button
                onClick={prevSlide}
                className="bg-transparent text-gray-400 p-3 rounded-full hover:bg-gray-600 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-1/2 right-0 transform -translate-y-1/2 px-4">
              <button
                onClick={nextSlide}
                className="bg-transparent text-gray-400 p-3 rounded-full hover:bg-gray-600 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto container  px-4 py-16">
            <h1 className="text-3xl font-bold  mb-8">FAQs</h1>
            <p className="text-lg  mb-12">
              Dive into FAQs related to Cyber Security.
            </p>
            <div className="flex  mb-16">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4">
                Solve this type Problem
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                See All FAQs
                <span className="ml-2">→</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" className="text-blue-500">
                    Do you want to secure your data from cyber threats?
                  </a>
                </h2>
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" className="text-blue-500">
                    Can you detect and respond to a ransomware attack
                    confidently?
                  </a>
                </h2>
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" className="text-blue-500">
                    Are you protected against phishing and social engineering
                    attacks?
                  </a>
                </h2>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" className="text-blue-500">
                    Is your organization ready to prevent and handle a data
                    breach?
                  </a>
                </h2>
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" className="text-blue-500">
                    Is your cloud infrastructure secure and properly monitored?
                  </a>
                </h2>
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" className="text-blue-500">
                    Are your employees trained on the latest cybersecurity
                    threats?
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactCard />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SmallandMediumBusiness;
