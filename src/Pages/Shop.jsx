import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import NewCollection from "../Components/NewCollection/NewCollection";
import Blog from "../Components/BlogSection/Blog";
import Video from "../Components/PricingVideoSection/PricingVideoSection";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import InstaSection from "../Components/InstaSection/InstaSection";
import Testimonials from "../Components/Testimonials/Testimonials";
import Gallery from "../Components/Gallery/Gallery";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Popular />
      <Video />
      <NewCollection />
      <Gallery />
      <Testimonials />
      <Blog />
      <InstaSection />
    </div>
  );
};

export default Shop;
