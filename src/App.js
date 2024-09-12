import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Cloud from "./Component/Solutions/Cloud";
import CollaborationTechnologies from "./Component/Solutions/CollaborationTechnologies";
import DataCenterDesign from "./Component/Solutions/DataCenterDesign";
import MultiCloud from "./Component/Solutions/MultiCloud";
import CyberSecurity from "./Component/Solutions/CyberSecurity";
import FieldServices from "./Component/Services/FieldServices";
import Education from "./Component/Industries/Education";
import NotFound from "./Component/NotFound";
import Energy from "./Component/Industries/Energy";
import Goverment from "./Component/Industries/Goverment";
import Financial from "./Component/Industries/Financial";
import Retail from "./Component/Industries/Retail";
import Healthcare from "./Component/Industries/Healthcare";
import ServiceProvider from "./Component/Industries/ServiceProvider";
import MediaEnter from "./Component/Industries/MediaEnter";
import SmallandMediumBusiness from "./Component/Solutions/SmallandMediumBusiness";
import About from "./Component/Company/About";
import ContactUs from "./Component/ContactUs";
import Careers from "./Component/Company/Careers";
import ContentVideo from "./Component/ContentVideo";
import CompaniesLogos from "./Component/CompaniesLogos";
import GenAI from "./Component/Solutions/GenAi";
import ProfessionalServices from "./Component/Services/ProfessionalServices";
import ManagedServices from "./Component/Services/ManagedService";
import ServicesHockey from "./Component/ServicesHockey";
import AWSmallmediumBusiness from './Component/Solutions/SmallMediumBusiness/AWSmallMedium'
import GXconnect from './Component/Solutions/SmallMediumBusiness/GxCustomer'
import TitanGx from './Component/Solutions/SmallMediumBusiness/TitanGx'
import AWSMigration from './Component/Solutions/SmallMediumBusiness/AWSMigration';
import VirtualWorks from './Component/Solutions/SmallMediumBusiness/VirtualWork'
import ContactCard from './Component/Contact/ContactCard'
import Blog from "./Component/Insights/Blog";
import BlogPost1 from "./Component/Insights/BlogPage/BlogPost1";
import BlogPost2 from "./Component/Insights/BlogPage/BlogPost2";
import BlogPost3 from "./Component/Insights/BlogPage/Blogpost3";
import BlogPost4 from "./Component/Insights/BlogPage/BlogPost4";
import CaseStudies from './Component/Insights/CaseStudies'
import CaseStudies1 from "./Component/Insights/CaseStdies/CaseStudies1";
import CaseStudies2 from "./Component/Insights/CaseStdies/CaseStudies2";
import MediaLib from './Component/Insights/MediaLib'
export default function App() {
  return (
    <Router>
      <div className="flex-grow">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ContentVideo" element={<ContentVideo />} />
          <Route exact path="/CompaniesLogos" element={<CompaniesLogos />} />
          <Route exact path="/cdWorkflow" element={<cdWorkflow />} />
          <Route path="/hockey" element={<ServicesHockey />} />

          <Route path="/solutions/cloud" element={<Cloud />} />
          <Route path="/solutions/collaboration-technologies" element={<CollaborationTechnologies />} />
          <Route path="/solutions/data-center-design" element={<DataCenterDesign />} />
          <Route path="/solutions/multi-cloud" element={<MultiCloud />} />
          <Route path="/solutions/cyber-security" element={<CyberSecurity />} />
          <Route path="/solutions/small-medium-business" element={<SmallandMediumBusiness />} />
          <Route path="/solutions/GenAI" element={<GenAI />} />

          {/* Industries */}
          <Route path="/Industries/Education" element={<Education />} />
          <Route path="/Industries/Energy" element={<Energy />} />
          <Route path="/Industries/Goverment" element={<Goverment />} />
          <Route path="/Industries/Financial" element={<Financial />} />
          <Route path="/Industries/Retail" element={<Retail />} />
          <Route path="/Industries/Healthcare" element={<Healthcare />} />
          <Route path="/Industries/ServiceProvider" element={<ServiceProvider />} />
          <Route path="/Industries/MediaEnter" element={<MediaEnter />} />

          {/* Services */}
          <Route path="/service/Field-Services" element={<FieldServices />} />
          <Route path="/service/Managed-Services" element={<ManagedServices />} />
          <Route path="/service/Professional-Services" element={<ProfessionalServices />} />

          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/ContactCard" element={<ContactCard />} /> */}


          {/* small medium business inside routes */}
          <Route path="/AWSmall-medium" element={<AWSmallmediumBusiness />} />
          <Route path="/GX-Connect" element={<GXconnect />} />
          <Route path="/TitanGX" element={<TitanGx />} />
          <Route path="/Virtual-Work" element={<VirtualWorks />} />
          <Route path="/AWS-Migration" element={<AWSMigration />} />

          {/* Insights */}
          <Route path="/Insights/Blog" element={<Blog/>} />
          <Route path="/Insights/CaseStudies" element={<CaseStudies/>} />
          <Route path="/Insights/Media" element={<MediaLib/>} />

          {/* BlogPost */}
          <Route path="/Blog-post1" element={<BlogPost1/>} />
          <Route path="/Blog-post2" element={<BlogPost2/>} />
          <Route path="/Blog-post3" element={<BlogPost3/>} />
          <Route path="/Blog-post4" element={<BlogPost4/>} />


          {/* CaseS Study */}
          <Route path="/CaseStudies1" element={<CaseStudies1/>} />
          <Route path="/CaseStudies2" element={<CaseStudies2/>} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />

          
        </Routes>
      </div>
    </Router>
  );
}
