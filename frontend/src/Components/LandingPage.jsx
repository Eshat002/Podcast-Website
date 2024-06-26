import React from "react";
import "./LandingPage.css";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import Sponsor from "./Sponsor/Sponsor";
import About from "./About/About";
import Testimonial from "./Testimonial/Testimonial";

const LandingPage = () => {
  const headline = (
    <h1 className="headline-for-hero">
      Your Daily <span style={{ color: "#CD4631" }}>Podcast</span>
    </h1>
  );
  return (
    <div id="landing-page">
      <Hero
        headline={headline}
        subHeadline="We cover all kinds of categories and a weekly special guest."
      />
      <Categories />
      <div className="sponsor-container">
        <Sponsor />
      </div>

      <div className="about-container">
        <About />
      </div>

      <div className="testimonial-container">
        <Testimonial />
      </div>
    </div>
  );
};

export default LandingPage;
