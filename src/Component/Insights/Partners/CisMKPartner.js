import React from "react";
import ciscoimg from '../../../Assets/cisco.jpg';
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import certification1 from '../../../Assets/ciscoSecurity.png'
import certification2 from '../../../Assets/ciscoDATA.png'
import certification3 from '../../../Assets/ciscoLife.png'
import Networking from "../../Solutions/Networking";

const CisMKPartner = () => {
  return (
    <>
      <Navbar />
 <Networking/>

      
      <ContactCard />
      <Footer />
    </>
  );
};

export default CisMKPartner;
