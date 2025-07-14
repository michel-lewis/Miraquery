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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="An impressive and flawless site template that includes various UI elements and countless features, attractive ready-made blocks and rich pages, basically everything you need to create a unique and professional website."
        />
        <meta
          name="keywords"
          content="bootstrap 5, business, corporate, creative, gulp, marketing, minimal, modern, multipurpose, one page, responsive, saas, sass, seo, startup, html5 template, site template"
        />
        <meta name="author" content="elemis" />
        <title>Sandbox - Modern & Multipurpose Bootstrap 5 Template</title>
        <link rel="shortcut icon" href="/assets/img/miraquery.png" />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
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
        <Contact />
        <Pricing id="pricing" />
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
