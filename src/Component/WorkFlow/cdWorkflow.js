import React from 'react'

const cdWorkflow = () => {
    const services = [
        { icon: "🔒", title: "Data security assessment" },
        { icon: "📊", title: "Capacity planning & sizing" },
        { icon: "☁️", title: "Existing Cloud Infrastructure audit" },
        { icon: "✅", title: "Regulatory & compliance readiness" },
        { icon: "🔍", title: "Identify Cloud platform & DevOps tools" },
        { icon: "🚀", title: "Cloud Migration business case preparation" },
        { icon: "🔄", title: "On-Prem vs Cloud Operating model mapping" },
        { icon: "📌", title: "Workloads classification & migration prioritization" },
      ];
  
  
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Cloud Strategy & Consulting
        </h2>
        <p className="mb-6">
          Our team of professionals implements the ideal Cloud approach to satisfy your company's requirements. To improve your current cloud architecture and infrastructure designs, we assist in choosing the best cloud platform, appropriate infrastructure, and appropriate tools.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border rounded shadow hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl">{service.icon}</span>
              <span className="font-semibold">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
    
export default cdWorkflow