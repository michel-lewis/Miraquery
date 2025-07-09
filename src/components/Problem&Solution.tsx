import React from 'react';
import { motion } from 'framer-motion';
import type { sectionProps } from '../types/common';

const ProblemSolution: React.FC<sectionProps> = ({ id }) => {
  // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
//   };

  const slideInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <section className="wrapper bg-light" id={id}>
      <div className="container py-14 py-md-16">
        <div className="row text-center mb-8">
          <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative">
            <h2 className="fs-16 text-uppercase text-muted mb-3">Des données accessibles à tous</h2>
            <h3 className="display-4 mb-5">De la <span className="text-gradient gradient-7">complexité</span> à la <span className="text-gradient gradient-7">simplicité</span></h3>
          </div>
        </div>
        
        <div className="row gx-md-8 gy-8 mb-10 mb-md-12">
          <motion.div 
            className="col-md-6 position-relative" 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="card shadow-lg h-100">
              <div className="card-body p-10 p-xl-12">
                <div className="svg-bg svg-bg-lg bg-soft-accent1 rounded-xl mb-4">
                  <img src="/assets/img/icons/solid/alert.svg" className="icon-svg solid text-accent1" alt="Problème" />
                </div>
                <h3 className="fs-22 mb-3">Problème</h3>
                <p className="mb-6">
                  Les requêtes SQL et MongoDB sont complexes, réservées aux experts, et freinent vos analyses.
                  <span className="fw-bold"> Simplifiez votre processus dès maintenant.</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-md-6 position-relative"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="card shadow-lg h-100">
              <div className="card-body p-10 p-xl-12">
                <div className="svg-bg svg-bg-lg bg-soft-accent2 rounded-xl mb-4">
                  <img src="/assets/img/icons/solid/bulb.svg" className="icon-svg solid text-accent2" alt="Solution" />
                </div>
                <h3 className="fs-22 mb-3">Solution</h3>
                <p className="mb-6">
                  MiraQuery traduit vos phrases en requêtes précises grâce à l'IA, sans besoin de compétences techniques.
                  <span className="fw-bold"> Accédez à vos données en un clic.</span>
                </p>
                <ul className="icon-list bullet-bg bullet-soft-primary">
                   <li><span className="bullet"></span><span>Polyvalent : SQL et NoSQL.</span></li>
                   <li><span className="bullet"></span><span>Rapide : Résultats en 50 ms.</span></li>
                   <li><span className="bullet"></span><span>Intuitif : API et SDK pour développeurs.</span></li>
                 </ul>
                <a href="#features" className="btn btn-primary rounded-pill mt-6">Découvrir les fonctionnalités</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;