import React from 'react';
import cloudSerive from "../../../Assets/gcpIMG.png";
import Navbar from '../../Navbar'
import aws1 from "../../../Assets/1aws.png";
import aws2 from "../../../Assets/2aws.png";
import aws3 from "../../../Assets/3aws.png";
import aws4 from "../../../Assets/4aws.png";
const GCP = () => {
  return (
    <div>
      <Navbar />
      <div className="  py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              GCP Cloud Solutions
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              GlobalXperts leverages its extensive cloud expertise to support clients worldwide at every stage of their cloud journey. From consulting and migration to 24/7 managed services, DevOps, and cost optimization, we provide comprehensive solutions tailored to your unique needs.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src={cloudSerive}
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
              {/* You can add additional content here if needed */}
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
      <div className=" text-center mb-10" >
        <h1 className="text-3xl font-bold text-green-900 mb-4">
          Cloud consulting and design
        </h1>
        <p className="text-gray-700">
          Explore our cloud consulting & design services designed to architect tailored cloud solutions that align with your business goals.
        </p>
      </div>

      {/* Service Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Service 1 - Holistic assessment */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img src={aws1} alt="Holistic Assessment Icon" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-900">Holistic assessment</h3>
            <p className="text-gray-600">
              Our cloud consulting & design services begin with a holistic assessment of your current IT landscape, business objectives, and technology needs. We analyze your existing infrastructure, applications, and processes to develop a comprehensive understanding of your organization's requirements.
            </p>
          </div>
        </div>

        {/* Service 2 - Tailored cloud solutions */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img src={aws2} alt="Tailored Cloud Solutions Icon" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-900">Tailored cloud solutions</h3>
            <p className="text-gray-600">
              Based on the assessment insights, we craft customized cloud solutions that align with your business goals. Our expert team designs a robust cloud architecture focused on scalability, security, and cost-efficiency, ensuring optimal performance in the cloud environment.
            </p>
          </div>
        </div>

        {/* Service 3 - Seamless integration */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img src={aws3} alt="Seamless Integration Icon" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-900">Seamless integration</h3>
            <p className="text-gray-600">
              We facilitate a seamless integration of cloud technologies into your existing infrastructure, ensuring uninterrupted workflows and minimizing downtime. Our team ensures compatibility and smooth integration for enhanced efficiency.
            </p>
          </div>
        </div>

        {/* Service 4 - Future-ready vision */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img src={aws4} alt="Future Ready Vision Icon" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-900">Future-ready vision</h3>
            <p className="text-gray-600">
              Our cloud consulting & design approach is future-focused, anticipating your organization’s evolving needs and positioning you for long-term success. We design scalable cloud architectures that can adapt to emerging technologies.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GCP;

 