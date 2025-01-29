import { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import c1 from "../../Assets/laas.avif";
import c2 from "../../Assets/backup.avif";
import c3 from "../../Assets/saas.avif";
import s1 from "../../Assets/gxConnect.png";
import s3 from "../../Assets/cloud.avif";
import comu from "../../Assets/comunication.jpg";
import s5 from "../../Assets/virtualbox.jpg";

import ContactCard from "../Contact/ContactCard";
import { Link } from "react-router-dom";

function SmallandMediumBusiness() {
  const [isMobile, setIsMobile] = useState(false);
  const faqSectionRef = useRef(null); // Reference to the FAQ section

  const scrollToFAQs = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Scroll to the start of the section
      });
    }
  };

  const faqs = [
    {
      question:
        "Are you a Small and Medium Business looking to streamline operations?",
      answer:
        "SMBs are embracing cloud computing to streamline operations, cut costs, and scale IT resources, allowing them to focus on innovation and growth.",
    },
    {
      question: "What are the benefits of Infrastructure as a Service (IaaS)?",
      answer:
        "IaaS allows you to outsource infrastructure management by renting virtual resources like machines and storage, enabling scalability and cost reduction.",
    },
    {
      question: "How can data backup and recovery help protect my business?",
      answer:
        "Securely protect critical data with cloud storage, simplifying recovery and eliminating physical backup needs.",
    },
    {
      question: "What is Software as a Service (SaaS)?",
      answer:
        "SaaS allows you to access software via the cloud, covering CRM, HR, and more, with subscription-based pricing for cost-effectiveness.",
    },
    {
      question:
        "How can cloud collaboration and communication solutions benefit my business?",
      answer:
        "Leverage cloud-based software for business needs, ensuring accessible and cost-effective solutions.",
    },
    {
      question: "What is GX Customer Connect?",
      answer:
        "GX Customer Connect is a cloud-based contact center solution that boosts efficiency and scales with AI-powered features to transform customer interactions.",
    },
    {
      question: "How does AWS support Small and Medium Businesses?",
      answer:
        "GlobalXperts, in partnership with AWS, offers scalable cloud services for SMBs, including virtual servers and analytics, enhancing operational efficiency.",
    },
    {
      question: "What are AWS Migration Services?",
      answer:
        "AWS Migration Services streamline your cloud journey with AWS Migration Hub, a central platform for planning and tracking data center migrations.",
    },
    {
      question: "How does Amazon WorkSpaces empower remote work?",
      answer:
        "Empower remote work with Amazon WorkSpaces, a managed cloud desktop service offering secure, high-performance virtual desktops accessible from anywhere.",
    },
    {
      question: "What is Titan GX On-site Storage?",
      answer:
        "Titan GX On-site Storage optimizes data storage with secure, scalable cloud solutions tailored to your needs, using Hyperconverged Storage and TrueNAS for hybrid environments.",
    },
  ];

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
      title: "AWS Migration Services",
      description:
        "Streamline your cloud journey with AWS Migration Hub, a central platform for planning and tracking data center migrations.",
      image: s3,
      link: "/AWS-Migration",
    },
    {
      id: 3,
      title: "VirtualWorkx",
      description:
        "Empower remote work with Amazon WorkSpaces, a managed cloud desktop service offering secure, high-performance virtual desktops accessible from anywhere.",
      image: s5,
      link: "/Virtual-Work",
    },
    // {
    //   id: 4,
    //   title: "Titan GX On-site Storage",
    //   description:
    //     "Optimize data storage with secure, scalable cloud solutions tailored to your needs, using Hyperconverged Storage and TrueNAS for hybrid environments.",
    //   image: s6,
    //   link: "/TitanGX",
    // },
    // {
    //   id: 5,
    //   title: "AWS Small Medium Business Applications",
    //   description:
    //     "GlobalXperts, in partnership with AWS, offers scalable cloud services for SMBs, including virtual servers and analytics, enhancing operational efficiency.",
    //   image: sm,
    //   link: "/AWSmall-medium",
    // },
  ];

  const allSlides = [...slides, ...slides, ...slides]; // Tripled slides for infinite loop
  const [currentSlide, setCurrentSlide] = useState(slides.length); // Start in the middle

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust threshold for mobile detection
    };

    checkMobile(); // Initial check on mount

    window.addEventListener("resize", checkMobile); // Listen for screen size changes
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = prevSlide + 1;
        if (nextSlide >= slides.length * 2) {
          setTimeout(() => setCurrentSlide(slides.length), 0); // Reset to middle
          return slides.length;
        }
        return nextSlide;
      });
    }, 6000); // Slide changes every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const handleSlideClick = (link) => {
    window.location.href = link; // Redirect to clicked slide's link
  };

  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Small and Medium Business
              </h1>
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

            <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                “SMBs are embracing cloud computing to streamline operations,
                cut costs, and scale IT resources, allowing them to focus on
                innovation and growth.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-center mt-8">
          {" "}
          Empowering Your Business with Expert IT Solutions
        </h2>
      </div>

      <div className="md:mt-8 sm:mt-16">
        <section className=" flex flex-col justify-center items-center  text-white">
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
                    <h1 className="text-xl md:text-3xl font-semibold underline decoration-gray-500 mt-5">
                      Infrastructure as a Service
                    </h1>
                    <p className="text-lg py-2 text-gray-200 mt-5">
                      Outsource infrastructure management by renting virtual
                      resources like machines and storage, enabling scalability
                      and cost reduction.
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
                    <h1 className="text-xl md:text-3xl font-semibold underline decoration-gray-500 mt-24">
                      Data Backup and Recovery
                    </h1>
                    <p className="text-md py-2 text-gray-200 mt-5">
                      Securely protect critical data with cloud storage,
                      simplifying recovery and eliminating physical backup
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* New Card 3 */}
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
                    <h1 className="text-xl md:text-3xl font-semibold underline decoration-gray-500 mt-24">
                      Software as a Service
                    </h1>
                    <p className="text-md py-2 text-gray-200 mt-5">
                      Access software via the cloud, covering CRM, HR, and more,
                      with subscription-based pricing for cost-effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* New Card 4 */}
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
                    <h1 className="text-xl md:text-3xl font-semibold underline decoration-gray-500 mt-24">
                      Collaboration and Communication
                    </h1>
                    <p className="text-md py-2 text-gray-200 mt-5">
                      Leverage cloud-based software for business needs, ensuring
                      accessible and cost-effective solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto  justify-center flex mt-16">
        <div className="text-center  mx-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AWS – Small Medium Business Applications
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Multi-Cloud Solutions use multiple providers to enhance flexibility,
            redundancy, and risk management across storage, computing, and
            services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allSlides.slice(0, 3).map((slide, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md cursor-pointer justify-between items-center bg-white h-full border-greenCustomColor2 p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
            onClick={() => handleSlideClick(slide.link)}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-48 object-cover"
            />
            <div className="text-center p-5">
              <h3 className="text-xl font-bold text-green-800">
                {slide.title}
              </h3>
              <p className="text-gray-600 mt-3">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16">
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

      <div>
        <div className="mt-0">
          <ContactCard />
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SmallandMediumBusiness;
