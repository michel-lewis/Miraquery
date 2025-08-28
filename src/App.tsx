import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import KeyFeatures from "./components/KeyFeatures";
import HowItWorks from "./components/HowItWorks";
import Faq from "./components/Faq";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonial";
// import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import ProblemSolution from "./components/Problem&Solution";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/colors/custom-palette.css" />
        <link
          rel="preload"
          href="/assets/css/fonts/space.css"
          as="style"
          onLoad={() => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "/assets/css/fonts/space.css";
            document.head.appendChild(link);
          }}
        />
      </Helmet>
      <div className="content-wrapper">
        <Header />
        <Hero id="hero" />
        <ProblemSolution id={"problem-solution"} />
        <KeyFeatures id="key-features" />
        <HowItWorks id="how-it-works" />
        <WhyChoose />
        <Testimonials />
        <Pricing id="pricing" />
        <Contact id="contact" />

        <Faq id="faq" />
        <Footer />

        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default App;
