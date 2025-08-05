import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { sectionProps } from '../types/common';

interface Benefit {
  key: string;
}

const benefits: Benefit[] = [
  { key: 'versatile' },
  { key: 'fast' },
  { key: 'intuitive' },
];

const ProblemSolution: React.FC<sectionProps> = ({ id }) => {
  const { t } = useTranslation();
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
            <h2 className="fs-16 text-uppercase text-muted mb-3">{t('problem_solution.subtitle')}</h2>
            <h3
              className="display-4 mb-5"
              dangerouslySetInnerHTML={{ __html: t('problem_solution.heading') }}
            />
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
              <div className="card-body p-10 p-xl-12 d-flex flex-column">
                <h3 className="fs-22 mb-3">{t('problem_solution.problem_title')}</h3>
                <div className="" style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                  <img 
                    src="/assets/img/subquery_2b.svg" 
                    alt={t('problem_solution.problem_title')} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                    }} 
                  />
                </div>
                <p
                  className="mb-6"
                  dangerouslySetInnerHTML={{ __html: t('problem_solution.problem_description') }}
                />
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
              <div className="card-body p-10 p-xl-12 d-flex flex-column">
           
                <h3 className="fs-22 mb-3">{t('problem_solution.solution_title')}</h3>
                <p
                  className="mb-6"
                  dangerouslySetInnerHTML={{ __html: t('problem_solution.solution_description') }}
                />
                <ul className="icon-list bullet-bg bullet-soft-primary">
                  {benefits.map((benefit, index) => (
                    <li key={index}><span className="bullet"></span><span>{t(`problem_solution.${benefit.key}`)}</span></li>
                  ))}
                </ul>
                <a href="#key-features" className="btn btn-primary rounded-pill mt-6 btn-behavior">{t('problem_solution.button_discover_features')}</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;