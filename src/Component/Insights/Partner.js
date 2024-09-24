import React from 'react';
import p1 from '../../Assets/logos/p1.png';
import p2 from '../../Assets/logos/p2.png';
import p3 from '../../Assets/logos/p3.png';
import p4 from '../../Assets/logos/p4.png';
import p5 from '../../Assets/logos/p5.png';
import p6 from '../../Assets/logos/p6.png';
import p7 from '../../Assets/logos/p7.png';
import p8 from '../../Assets/logos/p8.png';
import p9 from '../../Assets/logos/p9.png';
import p10 from '../../Assets/logos/p10.png';
import p11 from '../../Assets/logos/p11.png';
import p12 from '../../Assets/logos/p12.png';
import p13 from '../../Assets/logos/p13.png';
import p14 from '../../Assets/logos/p14.png';
import p15 from '../../Assets/logos/p15.png';
import p16 from '../../Assets/logos/p16.png';
import p17 from '../../Assets/logos/p17.png';
import Navbar from '../Navbar';
import ContactCard from '../Contact/ContactCard';
import Footer from '../Footer';

const partners = [
  { name: 'AWS Partner Network', img: p1, link: '/Partners/AWSPartner' },
  { name: 'Arista', img: p2, link: '/Partners/AristaPartner' },
  { name: 'VMware', img: p3, link: '/Partners/VMWarePartner' },
  { name: 'Hewlett Packard Enterprise', img: p4, link: '/Partners/HewlettPackPartner' },
  { name: 'Microsoft', img: p5, link: '/Partners/MicrosoftPartner' },
  { name: 'Microsoft Azure', img: p6, link: '/Partners/MSAzurePartner' },
  { name: 'Cisco', img: p7, link: '/Partners/CiscoPartner' },
  { name: 'TrueNAS', img: p8, link: '/Partners/TruenasPartner' },
  { name: 'Google Cloud', img: p9,  },
  { name: 'Calabrio', img: p10 },
  { name: 'Cisco Meraki', img: p11, link: '/Partners/CisMKPartner' },
  { name: 'ServiceNow', img: p12 },
  { name: 'Arush', img: p13 },
  { name: 'Nokia', img: p14 },
  { name: 'Citrix', img: p15 },
  { name: 'Veeam', img: p16, link: '/Partners/VeeamPartner' },
  { name: 'Seceon', img: p17, link: '/Partners/SeceonPartner' },
];

const Partners = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mt-16 mb-8">Our Partners</h1>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" items-center justify-center border rounded-lg p-4 text-center block hover:bg-gray-100 transition-colors duration-300"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="w-full h-auto max-h-24 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
      <ContactCard />
      <Footer />
    </>
  );
};

export default Partners;
