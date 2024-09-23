import React from 'react'
import Navbar from '../../Navbar'
import hpe from '../../../Assets/azureIMG.png'
const MSAzurePartner = () => {
  return (
    <>
    <Navbar/>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Hewlett Packard
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              HPE provides technology solutions as a service to enhance business
              models and operational performance.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src={hpe}
              alt="Hewlett Packard Solutions"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Overview Text */}
        <div className="lg:w-3/4">
            <span className="border-l-4 font-bold pl-2">Overview</span>
          <p className="mt-2 text-lg text-gray-700">
            Microsoft Azure – Optimize across workloads and environments and
            accomplish more with a comprehensive cloud platform. Get started now
            with pay-as-you-go pricing. There’s no upfront commitment—cancel
            anytime.
          </p>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/4 mt-4 lg:mt-0 lg:ml-6">
          <img
            src={hpe}
            alt="Azure Logo"
            className="w-32 mx-auto lg:mx-0"
          />
        </div>
      </div>

      {/* Azure Cloud Information Section */}
      <div className="mt-12">
        <h2 className="text-blue-600 text-2xl font-semibold">
            Azure Cloud Information
        
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Microsoft Azure is a cloud computing platform offered by Microsoft.
          Azure offers a wide range of services, including computing, storage,
          databases, networking, and more. Azure is known for its security and
          compliance features, as well as its integration with other Microsoft
          products.
        </p>

        <ul className="list-disc pl-5 mt-4 space-y-3 text-gray-700">
          <li>
            <strong>Integration with other Microsoft products:</strong> If your
            organization already uses Microsoft products, Azure can integrate
            seamlessly with them.
          </li>
          <li>
            <strong>Strong security and compliance:</strong> Azure offers a
            range of security and compliance features, including encryption,
            identity, and access management.
          </li>
          <li>
            <strong>Hybrid cloud capabilities:</strong> Azure offers hybrid
            cloud capabilities, allowing you to easily integrate your
            on-premises infrastructure with the cloud.
          </li>
          <li>
            <strong>Scalability:</strong> With Azure, you can easily scale your
            resources up or down to meet changing demands.
          </li>
        </ul>
      </div>
</>
  )
}

export default MSAzurePartner