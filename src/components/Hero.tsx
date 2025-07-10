import React from 'react';
import { motion } from 'framer-motion';
// import bgImage from '/assets/img/photos/bg23.png'; // Adjust path based on your project structure
import doodle1 from '/assets/img/svg/doodle1.svg';
import doodle2 from '/assets/img/svg/doodle2.svg';
import appStoreButton from '/assets/img/photos/button-appstore.svg';
import googlePlayButton from '/assets/img/photos/button-google-play.svg';
// import devicesImage from '/assets/img/photos/devices3.png';
// import devicesImage2x from '/assets/img/photos/devices3@2x.png';
import type { sectionProps } from '../types/common';

const Hero: React.FC<sectionProps> = ({id}) => {
  // Animation variants for fade-in
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  // Animation variants for slide-in-down
  const slideInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
  };

  // Animation variants for buttons
  const buttonsSlideIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.8 } },
  };

  return (
    <section
      id={id}
      className="wrapper image-wrapper bg-full bg-overlay bg-overlay-light-600"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container pt-16 pt-md-18 pb-9">
        <div className="row gx-0 gy-10 align-items-center text-center text-lg-start">
          <div className="col-lg-6 col-xxl-5 position-relative">
            <motion.img
              src={doodle1}
              className="h-9 position-absolute d-none d-lg-block"
              style={{ top: '-9%', left: '-6%' }}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3 }} // Replaces data-cue="fadeIn" data-delay="3000"
            />
            <motion.img
              src={doodle2}
              className="h-15 position-absolute d-none d-lg-block"
              style={{ bottom: '9%', right: '-22%' }}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3 }} // Replaces data-cue="fadeIn" data-delay="3000"
            />
            <motion.h1
              className="display-1 fs-50 mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Transformez vos données avec{' '}
              <span className="text-gradient gradient-7">Mira AI</span>
            </motion.h1>
            <motion.p
              className="lead fs-24 lh-sm mb-7"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Mira convertit vos requêtes en langage naturel en commandes SQL ou MongoDB instantanément.
            </motion.p>
            <motion.div
              className="d-flex justify-content-center justify-content-lg-start"
              variants={buttonsSlideIn}
              initial="hidden"
              animate="visible"
            >
              <span>
                <a href="#" className="me-2">
                  <img src={appStoreButton} className="h-11 rounded-xl" alt="" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={googlePlayButton} className="h-11 rounded-xl" alt="" />
                </a>
              </span>
            </motion.div>
          </div>
          <motion.div
            className="col-lg-6 ms-auto mb-n20 mb-xxl-n22"
            variants={slideInDown}
            initial="hidden"
            animate="visible"
          >
        
          </motion.div>
        </div>
      </div>
      <div className="overflow-hidden" style={{ zIndex: 1 }}>
        <div className="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <g fill="currentColor">
              <polygon points="1440 100 0 100 0 85 1440 0 1440 100" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
