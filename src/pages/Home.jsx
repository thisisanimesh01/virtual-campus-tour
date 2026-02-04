import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DepartmentsSection from "../components/DepartmentsSection";
import FacilitiesSection from "../components/FacilitiesSection";
import Preview360 from "../components/Preview360";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>

      <div id="blocks">
        <DepartmentsSection />
      </div>

      <div id="facilities">
        <FacilitiesSection />
      </div>

      <div id="hostels">
        <Preview360 />
      </div>

      <div id="gallery">
        <Testimonials />
      </div>

      <Footer />
    </>
  );
};

export default Home;
