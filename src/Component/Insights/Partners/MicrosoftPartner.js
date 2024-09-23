import React from 'react';
import microAzure from '../../../Assets/mz.png';
import mPowerPoint from '../../../Assets/mpowerp.png';
import sharepoint from '../../../Assets/spharepoint.png';
import d365 from '../../../Assets/d362.png';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';
import Navbar from '../../Navbar';

const MicrosoftPartner = () => {
  return (
    <>
    <Navbar/>
      <div className="max-w-7xl mx-auto px-4 py-10 mt-8">
        {/* About Microsoft Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black mb-4">About Microsoft</h2>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Microsoft is a Fortune 500 company that is world-famous for its Windows line of software products. 
            They have also gained much recognition for their Office 365 products, considered a form of Software as a Service. 
            Additionally, Microsoft offers other cloud services through their Azure platform. Explore what GX can do for you using Microsoft software.
          </p>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Microsoft Power Platform */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={mPowerPoint} 
              alt="Microsoft Power Platform" 
              className="h-24 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Microsoft Power Platform</h3>
            <p className="text-gray-600">
              Microsoft Power Platform accelerates innovation and reduces costs compared to other low-code development platforms.
            </p>
          </div>

          {/* Microsoft Azure */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={microAzure} 
              alt="Microsoft Azure" 
              className="h-24 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Microsoft Azure</h3>
            <p className="text-gray-600">
              Microsoft Azure enables optimization across workloads and environments with a comprehensive cloud platform, offering pay-as-you-go pricing to help you accomplish more.
            </p>
          </div>

          {/* SharePoint */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={sharepoint} 
              alt="SharePoint" 
              className="h-24 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">SharePoint</h3>
            <p className="text-gray-600">
              SharePoint enhances teamwork by providing dynamic, customizable team sites for every project, department, and division, streamlining team workflows.
            </p>
          </div>

          {/* Dynamics 365 */}
          <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
            <img 
              src={d365} 
              alt="Dynamics 365" 
              className="h-24 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Dynamics 365</h3>
            <p className="text-gray-600">
              Launched in 2016, Microsoft Dynamics 365 combines Dynamics AX (ERP) and Dynamics CRM into an all-in-one suite of comprehensive services, eliminating the need to pick from multiple options.
            </p>
          </div>
        </div>

        {/* Microsoft Content Service Provider Title */}
        <div className="text-center mb-10 mt-16">
          <h2 className="text-4xl font-bold text-black">Microsoft Content Service Provider</h2>
        </div>

        {/* Centered Sections */}
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* License Purchases Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-black mb-4">License Purchases</h3>
            <p className="text-gray-700 mb-4">
              Through our partnership with Microsoft we can provide licensing for the following products:
            </p>
            <ul className="list-disc mx-auto max-w-md text-left text-gray-700">
              <li>Office 365 – Government and Commercial</li>
              <li>SharePoint</li>
              <li>Dynamics</li>
            </ul>
          </div>

          {/* Professional Services Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Professional Services</h3>
            <ul className="list-disc mx-auto max-w-md text-left text-gray-700">
              <li>Azure</li>
              <li>SharePoint</li>
              <li>Dynamics</li>
            </ul>
          </div>
        </div>
      </div>

      <ContactCard />
      <Footer />
    </>
  );
};

export default MicrosoftPartner;
