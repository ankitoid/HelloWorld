import React from 'react';
import AWS1 from '../../../Assets/awspartner2.png'
import AWS2 from '../../../Assets/awspartner2.png'

const AWSPartner = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            <span className="border-l-4 border-blue-500 pl-2">
              Staff Members - AWS Technology Competencies
            </span>
          </h2>
          <p className="text-gray-600">
            AWS Technology Competencies are a way for AWS Partners to
            demonstrate their deep technical expertise and proven customer
            success in specialized areas across industry, use case, and
            workload. AWS Partners are vetted and validated against a high bar
            to achieve the AWS Competency designation.
          </p>
        </div>

        {/* Badge Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Block Storage Badge */}
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
              {/* Placeholder for image (can replace with actual image src) */}
              <img
                src={AWS1}
                alt="block-storage-1"
                className="object-contain h-full"
              />
            </div>
            <h3 className="text-gray-800 font-bold mb-2">block-storage-1</h3>
            <p className="text-gray-500">
              Earners of this badge have developed the technical skills and
              knowledge of AWS storage services with a focus on Amazon Elastic
              Block Store (EBS).
            </p>
          </div>

          {/* Data Protection Badge */}
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
              {/* Placeholder for image */}
              <img
                src={AWS2}
                alt="AWS Technology Badge"
                className="object-contain h-full"
              />
            </div>
            <h3 className="text-gray-800 font-bold mb-2">
              AWS Data Protection Badge
            </h3>
            <p className="text-gray-500">
              Earners of this badge have developed technical skills and
              knowledge of AWS storage services with a focus on data protection
              and disaster recovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSPartner;
 