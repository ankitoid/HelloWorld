import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

// Import images


const Partners = () => {
  const partners = [
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p1.png", alt: "AWS", link: "/Partners/AWSPartner" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p2.png", alt: "Arista", link: "/Partners/AristaPartner" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p3.png", alt: "Hewlett Packard", link: "/Partners/HewlettPackPartner" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p4.png", alt: "Microsoft partner", link: "/Partners/MicrosoftPartner" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p5.png", alt: "Cisco", link: "/Partners/CiscoPartner" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p6.png", alt: "MSazure", link: "/Partners/MSAzurePartner" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p7.png", alt: "TrueNAS", link: "/Partners/TruenasPartner" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p8.png", alt: "truenas", link: "#" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p9.png", alt: "gcp", link: "#" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p10.png", alt: "calabrio", link: "#" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p11.png", alt: "cisco meraki", link: "#" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p12.png", alt: "service nao", link: "#" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p13.png", alt: "Veeam", link: "#" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p14.png", alt: "Seceon", link: "#" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p15.png", alt: "Partner 15", link: "#" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p16.png", alt: "Veeam", link: "/Partners/VeeamPartner" },
    { src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p17.png", alt: "Seceon", link: "/Partners/SeceonPartner" },
  ];

  // Custom arrow components
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl z-50  p-1  "
    >
      <MdNavigateNext />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl z-50  p-1  "
    >
      <GrFormPrevious />
    </button>
  );

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-10 text-center relative">
      {/* Header Section */}
      <h2 className="text-3xl font-bold mb-2">Technology Partners</h2>
      <div className="flex justify-center gap-2 mb-4">
        <div className="w-80 rounded-lg h-1 bg-blue-500"></div>
      </div>
      <p className="text-gray-600 mb-6">
        We partner with the most innovative technology creators available.
      </p>

      {/* Slider */}
      <div className="relative px-6">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="p-4">
              <Link to={partner.link}>
                <div className="border rounded-lg shadow-sm flex justify-center p-4 hover:shadow-md transition">
                  <img src={partner.src} alt={partner.alt} className="h-16" />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* View More Button */}
      <div className="mt-6">
        <Link to="/Insights/Partners" className="bg-blue-600 text-white px-6 py-2 rounded-full">
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};

export default Partners;
