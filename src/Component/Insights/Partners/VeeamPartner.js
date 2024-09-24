import React from 'react';
import p16 from '../../../Assets/logos/p16.png';
import Navbar from '../../Navbar';

const VeeamPartner = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Veeam Partner Information</h1>

        <div className="reseller-type mt-4">
          <span className="text-gray-600">Value Added Reseller</span>
        </div>

        <div className="logo mt-4 flex justify-center">
          <img src={p16} alt="Veeam Logo" className='h-32 w-44' />
        </div>

        <div className="overview mt-8">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-2">
            Veeam is a software company that provides data protection and management
            solutions. They help companies to keep their data secure. They also
            provide data recovery and disaster recovery services with a focus on
            eliminating the cause of the data breach. Additionally, Veeam provides
            related services, such as data backups, threat mitigation, testing, dynamic
            reporting, and tailored orchestration.
          </p>
        </div>

        <div className="partners mt-8">
          <h3 className="text-lg font-medium">AWS Storage Partners</h3>
        </div>

        <div className="market-leader mt-8">
          <p>
            Veeam is the #1 Market Leader used by:
            <ul className="list-disc ml-6">
              <li>81 percent of Fortune 500 companies</li>
              <li>72 percent of the Global 2000</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default VeeamPartner;
