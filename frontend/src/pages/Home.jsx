import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import ProjectsGallery from '../components/ProjectsGallery';
import ServiceArea from '../components/ServiceArea';
import OffersCTA from '../components/OffersCTA';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="homepage-wrapper">
      {/* 01. Navbar */}
      <Navbar />

      {/* 02. Hero Section */}
      <Hero />

      {/* 03. Moving Headline / Marquee */}
      <Marquee />

      {/* 04. About AS Solar */}
      <About />

      {/* 05. Services (01 to 07) */}
      <Services />

      {/* 06. Why Choose Us */}
      <WhyUs />

      {/* 07. Process / How We Work */}
      <Process />

      {/* 08. Projects / Solar Gallery Slider */}
      <ProjectsGallery />

      {/* 09. Service Area (Punjab reach & graphic) */}
      <ServiceArea />

      {/* 10. Offers / Free Consultation CTA */}
      {/* <OffersCTA /> */}

      {/* 11. Testimonials / Reviews Slider */}
      <Testimonials />

      {/* 12. Contact Section (Details + Form) */}
      <Contact />

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
