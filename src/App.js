import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import SliderSection from "./Component/SliderSection";
import Product from "./Component/Product";
import Service from "./Component/Service";
import Insights from "./Component/Insights";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs";
import Footer from "./Component/Footer";
import Benefit from "./Component/Benefit";
import Home from "./Component/Home";
import CloudDevOps from "./Component/Contents/CloudDevOps";
import CdWorkflow from './Component/WorkFlow/cdWorkflow';
export default function App() {
  return (
    <Router>
       
        <div className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            {/* <Route exact path="/product" element={<Product />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/insights" element={<Insights />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/about" element={<AboutUs />} /> */}
            <Route exact path="/CloudDevOps" element={<CloudDevOps />} />
            
            <Route exact path="/workflow/cloud-dev" element={<CdWorkflow />} />

          </Routes>
         
        </div>
        {/* <Benefit/>
        <AboutUs />
        <ContactUs />
        <Insights />
                <Footer /> */}

    </Router>
  );
}
