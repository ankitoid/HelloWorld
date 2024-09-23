import React from 'react';
import microAzure from '../../../Assets/mz.png';
import mPowerPoint from '../../../Assets/mpowerp.png';
import sharepoint from '../../../Assets/spharepoint.png';
import d365 from '../../../Assets/d362.png';

const MicrosoftPartner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
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
          <a href="https://dynamics.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer">
            <img 
              src={d365} 
              alt="Dynamics 365" 
              className="h-24 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Dynamics 365</h3>
            <p className="text-gray-600">
              Launched in 2016, Microsoft Dynamics 365 combines Dynamics AX (ERP) and Dynamics CRM into an all-in-one suite of comprehensive services, eliminating the need to pick from multiple options.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftPartner;
