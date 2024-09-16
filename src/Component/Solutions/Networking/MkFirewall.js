import React from 'react';
import firewallImage from '../../../Assets/mkFirewall.avif'
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';

const MkFirewall = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full py-10 bg-gray-100 flex justify-center mt-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
        {/* Left Side Image */}
        <div className="w-full sm:w-1/2">
          <img
            src={firewallImage} 
            alt="Meraki Firewall"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right Side Description */}
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Cisco Meraki MX Firewall & SD-WAN</h3>
          <p className="text-gray-700 mb-4">
            The Cisco Meraki MX is a multifunctional security and SD-WAN enterprise appliance offering a broad set of capabilities to address various use cases—all from a single device. It is relied on by organizations across industries to deliver secure connectivity to hub locations or multi-cloud environments, while ensuring application quality of experience (QoE) through advanced analytics powered by machine learning.
          </p>
          <p className="text-gray-700 mb-4">
            Being 100% cloud-managed, the MX allows for zero-touch installation and remote management, making it perfect for distributed branches, campuses, and data center locations. It is natively integrated with a comprehensive suite of secure network and assurance capabilities, eliminating the need for multiple appliances.
          </p>
          <p className="text-gray-700 mb-4">
            These capabilities include application-based firewalling, content filtering, web search filtering, SNORT®-based intrusion detection and prevention, Cisco Advanced Malware Protection (AMP), site-to-site Auto VPN, client VPN, WAN and cellular failover, dynamic path selection, web application health monitoring, VoIP health monitoring, and much more.
          </p>
          <p className="text-gray-700 mb-4">
            SD-WAN capabilities extend to deliver optimized access to resources in public and private cloud environments via virtual MX appliances (vMX). Supported public clouds include Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform, and Alibaba Cloud, while private cloud support is offered through Cisco NFVIS.
          </p>
        </div>
      </div>
    </div>
    <ContactCard/>
    <Footer/>
    </>
  );
};

export default MkFirewall;
