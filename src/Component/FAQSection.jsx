import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";

const FAQSection = () => {
  return (
    <div className="bg-white p-6 flex-1">
      <h2 className="text-3xl font-semibold text-center mb-2">
        If you have <span className="italic">questions</span>, we have answers
      </h2>
      <div className="space-y-4">
        {[
          {
            question: "What does GlobalXperts do?",
            answer:
              "GlobalXperts helps businesses transform digitally through strategy, consulting, and technology services.",
          },
          {
            question: "What is digital business transformation (DBT)",
            answer:
              "DBT refers to the process of using digital technologies to create new or modify existing business processes, culture, and customer experiences.",
          },
          {
            question: "What is SPEED?",
            answer:
              "SPEED is a framework that helps organizations accelerate their digital transformation by focusing on Strategy, Product, Experience, Engineering, and Data.",
          },
          {
            question:
              "Does GlobalXperts partner with other industry-leading enterprises?",
            answer:
              "Yes, GlobalXperts partners with leading technology companies to deliver cutting-edge digital solutions.",
          },
        ].map((item, index) => (
          <details key={index} className="group border-t border-gray-300 mt-8">
            <summary className="flex justify-between items-center p-4 cursor-pointer group-hover:bg-gray-100 mt-6">
              <span className="font-medium text-left w-full">{item.question}</span>
              <FaChevronCircleDown />
            </summary>
            <div className="p-4">{item.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
};

const ImpactFilmCard = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex-1  ">
      <img
        src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/ld10.jpg"
        alt="Impact Film"
        className="w-full rounded-lg mb-2"
      />
      <h3 className="text-xl font-semibold mb-2">
        How the AI Digital Tools Can Change Lives
      </h3>
      {/* <a href="#" className="text-blue-600 hover:underline">
        Learn more &rarr;
      </a> */}
    </div>
  );
};

const FAQWithImpactFilm = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 mt-4 h-full  mb-8 lg:mb-0">
      <div className="flex-1 md:w-1/3 ">
        <FAQSection />
      </div>
      <div className="flex-1 md:w-1/3">
        <ImpactFilmCard />
      </div>
    </div>
  );
};

export default FAQWithImpactFilm;
