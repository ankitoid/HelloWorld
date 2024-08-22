import React from 'react';
import { FaChevronCircleDown } from "react-icons/fa";

const FAQSection = () => {
  return (
    <div className="bg-white p-6 mt-8">
      <h2 className="text-3xl font-semibold text-center mb-8 ">
        If you have <span className="italic">questions</span>, we have answers
      </h2>
      <div className="space-y-4">
        {[
          {
            question: "What does GlobalXperts do?",
            answer: "GlobalXperts helps businesses transform digitally through strategy, consulting, and technology services."
          },
          {
            question: "What is digital business transformation (DBT)?",
            answer: "DBT refers to the process of using digital technologies to create new or modify existing business processes, culture, and customer experiences."
          },
          {
            question: "What is SPEED?",
            answer: "SPEED is a framework that helps organizations accelerate their digital transformation by focusing on Strategy, Product, Experience, Engineering, and Data."
          },
          {
            question: "Does the GlobalXperts team partner with Presidio, Adobe and others?",
            answer: "Yes, GlobalXperts partners with leading technology companies like Presidio, Adobe, and others to deliver cutting-edge digital solutions."
          }
        ].map((item, index) => (
          <details key={index} className="group border-t border-gray-300">
            <summary className="flex justify-between items-center p-4 cursor-pointer group-hover:bg-gray-100">
              <span className="font-medium text-center w-full">{item.question}</span>
              <FaChevronCircleDown />

            </summary>
            <div className="p-4">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

const ImpactFilmCard = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <img
        src="https://picsum.photos/600/400" 
        alt="Impact Film"
        className="w-full rounded-lg mb-0"
      />
     
      <h3 className="text-xl font-semibold mb-2">
        How the Right Digital Tools Can Change Lives
      </h3>
      <a href="#" className="text-blue-600 hover:underline">
        Stream our film &rarr;
      </a>
    </div>
  );
};

const FAQWithImpactFilm = () => {
  return (
    <div className="container mx-auto p-6 grid md:grid-cols-2 gap-8 mt-8">
      <FAQSection />
      <ImpactFilmCard />
    </div>
  );
};

export default FAQWithImpactFilm;
