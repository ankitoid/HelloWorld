import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const CloudDevOps = () => {
  const services = [
    {
      title: "Cloud Strategy & Consulting",
      description: "Add value to your business with the right Cloud strategy to cut down costs and deliver a differentiated customer experience.",
      icon: "🗂️",
      link: "/service/cloud-strategy",
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration of your data, applications & workloads from data centers & on-premise to Cloud.",
      icon: "⚙️",
      link: "/service/cloud-migration",
    },
    {
      title: "DevOps as a Service",
      description: "Automation of end-to-end delivery pipeline across Cloud platforms for faster go-to-market, increased efficiency & reduced cost.",
      icon: "🛠️",
      link: "/service/devops-service",
    },
  ];

  return (
    <div className="p-8">
      <Navbar />
      <h2 className="text-3xl font-bold text-center mt-14">What we Offer</h2>
      <p className="text-center text-gray-600 mt-10">
        Globalxperts leverages its deep expertise in Cloud to help clients across the globe in their different stages of
        <br /> Cloud journey including consulting, migration, 24x7 managed services, DevOps, and cost optimization.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="group p-6 border-2 bg-white text-gray-700 border-gray-200 rounded-lg shadow transition-transform transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">{service.icon}</span>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="hidden group-hover:block">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CloudDevOps;
