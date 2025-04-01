import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Component/Home";
import Cloud from "./Component/Solutions/Cloud";
import CollaborationTechnologies from "./Component/Solutions/CollaborationTechnologies";
import DataCenterDesign from "./Component/Solutions/DataCenterDesign";
import MultiCloud from "./Component/Solutions/Cloud/MultiCloud";
import CyberSecurity from "./Component/Solutions/CyberSecurity";
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
import CompaniesLogos from "./Component/CompaniesLogos";
import AImlSoluion from "./Component/Solutions/AI&MlSolutions";

import ProfessionalServices from "./Component/Services/ProfessionalServices";
import ManagedServices from "./Component/Services/ManagedService";

import ServicesHockey from "./Component/ServicesHockey";
import GXconnect from "./Component/Solutions/Cloud Solutions/GxCustomer";
// import TitanGx from "./Component/Solutions/SmallMediumBusiness/TitanGx";
// import AWSMigration from "./Component/Solutions/SmallMediumBusiness/AWSMigration";
// import VirtualWorks from "./Component/Solutions/SmallMediumBusiness/VirtualWork";

import Blog from "./Component/Insights/Blog";
import Partner from "./Component/Insights/Partner";
import BlogPost1 from "./Component/Insights/BlogPage/BlogPost1";
// import BlogPost2 from "./Component/Insights/BlogPage/BlogPost2";
// import BlogPost3 from "./Component/Insights/BlogPage/Blogpost3";
import BlogPost4 from "./Component/Insights/BlogPage/BlogPost4";
import CaseStudies from "./Component/Insights/CaseStudies";

import CaseStudies1 from "./Component/Insights/CaseStdies/CaseStudies1";
import CaseStudies2 from "./Component/Insights/CaseStdies/CaseStudies2";
import CaseStudies3 from "./Component/Insights/CaseStdies/CaseStudies3";
import CaseStudies4 from "./Component/Insights/CaseStdies/CaseStudies4";
import CaseStudies5 from "./Component/Insights/CaseStdies/CaseStudies5";
import CaseStudies6 from "./Component/Insights/CaseStdies/CaseStudies6";
import CaseStudies7 from "./Component/Insights/CaseStdies/CaseStudies7";
import CaseStudies8 from "./Component/Insights/CaseStdies/CaseStudies8";
import CaseStudies9 from "./Component/Insights/CaseStdies/CaseStudies9";

import MediaLib from "./Component/Insights/MediaLib";
import PartnerInfo from "./Component/Insights/CaseStdies/PartnerInfo";
import Networking from "./Component/Solutions/Networking";

import AcloudVision from "./Component/Solutions/Networking/AcloudVision";
import AristaEdge from "./Component/Solutions/Networking/AristaEdge";
import ArtistaSwitches from "./Component/Solutions/Networking/AristaSwiches";
import AristaWAN from "./Component/Solutions/Networking/AristaWAN";
import AristaWifi from "./Component/Solutions/Networking/AristaWifi";
import Mkcamera from "./Component/Solutions/Networking/MkCamers";
import MkWireless from "./Component/Solutions/Networking/MkWireless";
import MkSwitches from "./Component/Solutions/Networking/MkSwitches";
import MkFirewall from "./Component/Solutions/Networking/MkFirewall";

import AWSPartner from "./Component/Insights/Partners/AWSPartner";
import AristaPartner from "./Component/Insights/Partners/AristaPartner";
import CisMKPartner from "./Component/Insights/Partners/CisMKPartner";
import CiscoPartner from "./Component/Insights/Partners/CiscoPartner";
import VMWarePartner from "./Component/Insights/Partners/VMWarePartner";
import HewlettPackPartner from "./Component/Insights/Partners/HewlettPackPartner";
import MSAzurePartner from "./Component/Insights/Partners/MSAzurePartner";
import VeeamPartner from "./Component/Insights/Partners/VeeamPartner";
import MicrosoftPartner from "./Component/Insights/Partners/MicrosoftPartner";
import TruenasPartner from "./Component/Insights/Partners/TruenasPartner";
import SeceonPartner from "./Component/Insights/Partners/SeceonPartner";

// Solutions => Cloud => Devops
import Devops from "./Component/Solutions/Cloud/Devops";
import AWS from "./Component/Solutions/Cloud/AWS";
// import Azure from "./Component/Solutions/Cloud/Azure";
// import GCP from "./Component/Solutions/Cloud/GCP";

// Careers => JobPosting
import JobPosting from "./Component/Company/jobPost/JobPosting";

// Cloud & Devopa => Migration
import MOM from "./Component/Solutions/Cloud Solutions/Migration";
import IOSA from "./Component/Solutions/Cloud Solutions/iosa";
import AccelatorMigration from "./Component/Solutions/Cloud Solutions/migrationAccelator";
import VMwareCloud from "./Component/Solutions/Cloud Solutions/VMwareCloud";
// import Blockchain from "./Component/Solutions/Cloud Solutions/Blockchain";

// Solutions => SoftwareDevelopment
// import SoftwareDevopment from "./Component/Solutions/SoftwareDevopment";

import TechnologyRefresh from "./Component/Services/Field Service/TechnologyRefresh";
import FieldServiceEng from "./Component/Services/Field Service/FieldServiceEng";
import FieldServices from "./Component/Services/FieldServicesPage";
import FieldServiceOnsite from "./Component/Services/Field Service/FieldServiceOnsite";

import LoginSignup from "./Component/LoginSignup/LoginSignup";

import ManagedCollaborationTech from "./Component/Services/Managed Services/ManagedCollaborationTech";
import ManagedCyberSecurity from "./Component/Services/Managed Services/ManagedCyberSecurity";
import ManagedNetworking from "./Component/Services/Managed Services/ManagedNetworking";
import ManagedOpsisStream from "./Component/Services/Managed Services/ManagedOpsis";
import ManagedHelpDesk from "./Component/Services/Managed Services/ManageHelpDesk";
import ManagedCloud from "./Component/Services/Managed Services/ManagedCloud";

import TitanX from "./Component/Solutions/Cloud Solutions/TitanX";
import OmniBot from "./Component/Solutions/Cloud Solutions/OmniBot";
import HybridCloud from "./Component/Solutions/Cloud/HybridCloud";
import AIMLonAWS from "./Component/Solutions/Cloud Solutions/AIMLonAWS";
import AWSMigrationService from "./Component/Solutions/Cloud Solutions/AWSMigrationService";

import StaffAugmentation from "./Component/Services/Professional Service/StaffAugmentation";
import ConsultingAndAdvisory from "./Component/Services/Professional Service/ConsultingAndAdvisory";
import Implementation from "./Component/Services/Professional Service/Implementation";
import CloudMigration from "./Component/Services/Professional Service/CloudMigration";
import ScrollToTop from "./Component/ScrollToTop";
import SiteSurveys from "./Component/Services/Professional Service/SiteSurveys";
import DataCenterMigration from "./Component/Services/Professional Service/DataCenterMigration";
import TechStaffAug from "./Component/Services/Professional Service/TechStaffAug";
import CloudSolutions from "./Component/Solutions/CloudSolutions";

import Privatepolicy from "./Component/Company/PrivatePolicy";
import CaseStudies10 from "./Component/Insights/CaseStdies/CaseStudies10";
import AviationCloud from "./Component/Solutions/Cloud Solutions/AviationCloud";
import SmartTransit from "./Component/Solutions/SmartTransit";
import AmazonEVS from "./Component/Solutions/Cloud Solutions/AmazonEVS";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex-grow">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/ContentVideo" element={<ContentVideo />} /> */}
          <Route exact path="/CompaniesLogos" element={<CompaniesLogos />} />
          <Route path="/hockey" element={<ServicesHockey />} />

          <Route path="/solutions/cloud" element={<Cloud />} />
          <Route
            path="/solutions/collaboration-technologies"
            element={<CollaborationTechnologies />}
          />
          <Route
            path="/solutions/data-center-design"
            element={<DataCenterDesign />}
          />
          <Route path="/solutions/cyber-security" element={<CyberSecurity />} />
          <Route
            path="/solutions/small-medium-business"
            element={<SmallandMediumBusiness />}
          />
          <Route path="/solutions/AI&MlSolutions" element={<AImlSoluion />} />
          <Route path="/AI-Machine-Learning-on-AWS" element={<AIMLonAWS />} />
          <Route path="/solutions/smart-transit" element={<SmartTransit />} />
          <Route path="/solutions/Networking" element={<Networking />} />
          <Route path="/solutions/AWSMigrationService" element={<AWSMigrationService />} />
          <Route path="/solutions/cloud/Amazon-EVS" element={< AmazonEVS/>} />
          {/* <Route
         path="/solutions/SoftwareDevelopment"
         element={<SoftwareDevopment />}
       /> */}

          {/*  Cloud and Devops */}
          <Route path="/solutions/cloud/devops" element={<Devops />} />
          <Route path="/solutions/cloud/aws" element={<AWS />} />
          {/* <Route path="/solutions/cloud/azure" element={<Azure />} /> */}
          {/* <Route path="/solutions/cloud/GCP" element={<GCP />} /> */}
          <Route path="/solutions/cloud/multi-cloud" element={<MultiCloud />} />

          {/* Cloud Solutions */}
          <Route path="/solutions/cloud/TitanX" element={<TitanX />} />
          <Route path="/solutions/cloud/MOM" element={<MOM />} />
          <Route path="/solutions/cloud/iosa" element={<IOSA />} />
          <Route
            path="migration-acceleration-program-map"
            element={<AccelatorMigration />}
          />
          <Route path="/GX-Connect" element={<GXconnect />} />

          {/* <Route
            path="/solutions/cloud/VMwareCloud"
            element={<VMwareCloud />}
          /> */}
          {/* <Route path="/solutions/cloud/Aviation-Cloud" element={<Blockchain />} /> */}

          <Route
            path="/solutions/cloud/Aviation-Cloud"
            element={<AviationCloud />}
          />

          {/* Industries */}
          <Route path="/Industries/Education" element={<Education />} />
          <Route path="/Industries/Energy" element={<Energy />} />
          <Route path="/Industries/Goverment" element={<Goverment />} />
          <Route path="/Industries/Financial" element={<Financial />} />
          <Route path="/Industries/Retail" element={<Retail />} />
          <Route path="/Industries/Healthcare" element={<Healthcare />} />
          <Route
            path="/Industries/ServiceProvider"
            element={<ServiceProvider />}
          />
          <Route path="/Industries/MediaEnter" element={<MediaEnter />} />

          {/* Services */}
          {/* <Route path="/service/Field-Services" element={<FieldServices />} /> */}
          <Route path="/service/Field-Services" element={<FieldServices />} />

          <Route
            path="/service/Managed-Services"
            element={<ManagedServices />}
          />
          <Route
            path="/service/Professional-Services"
            element={<ProfessionalServices />}
          />

          {/* Company */}
          <Route path="/Company/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers/JobPosting" element={<JobPosting />} />

          {/* small medium business inside routes */}
          {/* <Route path="/TitanGX" element={<TitanGx />} />
       <Route path="/Virtual-Work" element={<VirtualWorks />} />
       <Route path="/AWS-Migration" element={<AWSMigration />} /> */}

          {/* Insights */}
          <Route path="/Insights/Blog" element={<Blog />} />
          <Route path="/Insights/CaseStudies" element={<CaseStudies />} />
          <Route path="/Insights/Media-Library" element={<MediaLib />} />
          <Route path="/Insights/Partners" element={<Partner />} />

          {/* BlogPost */}
          <Route path="/Blog-post1" element={<BlogPost1 />} />
          {/* <Route path="/Blog-post2" element={<BlogPost2 />} />
          <Route path="/Blog-post3" element={<BlogPost3 />} /> */}
          <Route path="/Blog-post4" element={<BlogPost4 />} />

          {/* CaseS Study */}
          <Route path="/CaseStudies1" element={<CaseStudies1 />} />
          <Route path="/CaseStudies2" element={<CaseStudies2 />} />
          <Route path="/CaseStudies3" element={<CaseStudies3 />} />
          <Route path="/CaseStudies4" element={<CaseStudies4 />} />
          <Route path="/CaseStudies5" element={<CaseStudies5 />} />
          <Route path="/CaseStudies6" element={<CaseStudies6 />} />
          <Route path="/CaseStudies7" element={<CaseStudies7 />} />
          <Route path="/CaseStudies8" element={<CaseStudies8 />} />
          <Route path="/CaseStudies9" element={<CaseStudies9 />} />
          <Route path="/CaseStudies10" element={<CaseStudies10 />} />

          <Route path="/CaseStudies2/partner-info" element={<PartnerInfo />} />

          {/* Networking Pages */}
          <Route path="/Networking/AcloudVision" element={<AcloudVision />} />
          <Route path="/Networking/AristaEdge" element={<AristaEdge />} />
          <Route
            path="/Networking/ArtistaSwitches"
            element={<ArtistaSwitches />}
          />
          <Route path="/Networking/aristaWAN" element={<AristaWAN />} />
          <Route path="/Networking/AristaWifi" element={<AristaWifi />} />
          <Route path="/Networking/Mkcamera" element={<Mkcamera />} />
          <Route path="/Networking/mkFirewall" element={<MkFirewall />} />
          <Route path="/Networking/mkswitches" element={<MkSwitches />} />
          <Route path="/Networking/mkwireless" element={<MkWireless />} />

          {/* Partners Pages */}
          <Route path="/Partners/AWSPartner" element={<AWSPartner />} />
          <Route path="/Partners/AristaPartner" element={<AristaPartner />} />
          <Route path="/Partners/VMWarePartner" element={<VMWarePartner />} />
          <Route
            path="/Partners/HewlettPackPartner"
            element={<HewlettPackPartner />}
          />
          <Route
            path="/Partners/MicrosoftPartner"
            element={<MicrosoftPartner />}
          />
          <Route path="/Partners/MSAzurePartner" element={<MSAzurePartner />} />
          <Route path="/Partners/CiscoPartner" element={<CiscoPartner />} />
          <Route path="/Partners/TruenasPartner" element={<TruenasPartner />} />
          <Route path="/Partners/CisMKPartner" element={<CisMKPartner />} />
          <Route path="/Partners/VeeamPartner" element={<VeeamPartner />} />
          <Route path="/Partners/SeceonPartner" element={<SeceonPartner />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />

          {/* Field Service Page */}
          <Route
            path="/service/Field-Services-Onsite"
            element={<FieldServiceOnsite />}
          />
          <Route
            path="/service/Field-Engineering-Services"
            element={<FieldServiceEng />}
          />
          <Route
            path="/service/Technology-Refresh"
            element={<TechnologyRefresh />}
          />

          <Route path="/LoginSignup" element={<LoginSignup />} />

          {/* Managed Services Pages */}
          <Route
            path="/service/Managed-Collaboration-Technologies"
            element={<ManagedCollaborationTech />}
          />
          <Route
            path="/service/Managed-Cyber-Security"
            element={<ManagedCyberSecurity />}
          />
          <Route
            path="/service/Managed-Networking"
            element={<ManagedNetworking />}
          />
          <Route
            path="/service/Managed-Opsis-Streaming"
            element={<ManagedOpsisStream />}
          />
          <Route
            path="/service/Managed-Help-Desk"
            element={<ManagedHelpDesk />}
          />
          <Route path="/service/Managed-Cloud" element={<ManagedCloud />} />

          {/* professional services */}
          <Route
            path="/service/Staff-Augmentation"
            element={<StaffAugmentation />}
          />
          <Route
            path="/service/Consulting-Advisory"
            element={<ConsultingAndAdvisory />}
          />
          <Route path="/service/Implementation" element={<Implementation />} />
          <Route path="/service/Cloud-Migration" element={<CloudMigration />} />
          <Route path="/service/Site-Surveys" element={<SiteSurveys />} />
          <Route
            path="/service/Data-Center-Migration"
            element={<DataCenterMigration />}
          />
          <Route
            path="/service/Technical-Staff-Augmentation"
            element={<TechStaffAug />}
          />
          {/* Solutions -> Cloud Solutions */}
          <Route
            path="/solution/Cloud-Solutions"
            element={<CloudSolutions />}
          />
          <Route
            path="/solution/Cloud-Solutions/OmniBot"
            element={<OmniBot />}
          />
          <Route
            path="/solutions/Cloud/Hybrid-Cloud"
            element={<HybridCloud />}
          />
          <Route path="/Private-policy" element={<Privatepolicy />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
