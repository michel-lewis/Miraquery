import React from 'react';

interface Reason {
  icon: string;
  title: string;
  description: string;
  bg: string;
}

const reasons: Reason[] = [
  { icon: 'brain', title: 'AI-Powered Precision with Grok', description: 'Mira harnesses xAI\'s Grok API for unparalleled accuracy in query generation, intelligently interpreting natural language for precise SQL or MongoDB queries.', bg: '#00C4CC' },
  { icon: 'database', title: 'Unmatched Versatility: SQL & NoSQL', description: 'Seamlessly handle PostgreSQL and MongoDB with Mira\'s multi-database support, featuring schema introspection for accurate query generation.', bg: '#FFC107' },
  { icon: 'bolt', title: 'Blazing Fast Performance & Cost Efficiency', description: 'Enjoy sub-50ms latency with Redis caching and optimized Grok API usage, plus efficient connection pooling for resource optimization.', bg: '#76FF03' },
  { icon: 'code', title: 'Built for Developers (TypeScript Stack)', description: 'Leverage a 100% TypeScript stack with Fastify, Zod, and NeverThrow for robust, developer-friendly integration via the @korva/mira SDK.', bg: '#424242' },
  { icon: 'cloud', title: 'Flexible Deployment & Scalability', description: 'Choose SaaS, API, or on-premise Docker deployment with a modular DDD architecture that scales from SMEs to enterprises.', bg: '#00C4CC' },
  { icon: 'vision', title: 'A Vision for the Future', description: 'Future-proof with Data Warehouse integration, a supercharged chatbot, vector databases, and monitoring features planned on our roadmap.', bg: '#FFC107' },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-16 py-md-18">
        <div className="row text-center">
          <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative">
            <img
              src="/assets/img/svg/doodle3.svg"
              className="h-11 position-absolute d-none d-lg-block"
              style={{ right: '-12%' }} // Retrait de top: '-20%'
              alt="Doodle 3"
            />
            <img
              src="/assets/img/svg/doodle9.svg"
              className="h-17 position-absolute d-none d-lg-block"
              style={{ left: '-17%' }} // Retrait de bottom: '5%'
              alt="Doodle 9"
            />
            <h2 className="fs-16 text-uppercase text-secondary mb-3 text-center">Why Choose Us?</h2>
            <h3 className="display-3 mb-12 text-center">
              Here are a few <span className="text-secondary">reasons why</span> Mira is your top choice for data solutions.
            </h3>
          </div>
        </div>
        <div className="row d-flex align-items-start">
          <div className="col-lg-6 position-lg-sticky" style={{ top: '8rem' }}>
             <figure>
              <img src="/assets/img/why3.png" srcSet="/assets/img/why3.png 2x" alt="Devices" />
            </figure> 
          </div>
          <div className="col-lg-6 ms-auto">
            {reasons.map((reason, index) => (
              <div className="d-flex flex-row mb-8" key={index}>
                <div>
                  <div
                    className={`svg-bg svg-bg-lg rounded-xl me-5`}
                    style={{ backgroundColor: reason.bg, width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <img
                      src={`/assets/img/icons/solid/${reason.icon}.svg`}
                      className="icon-svg solid"
                      style={{ width: '30px', height: '30px', filter: 'brightness(0) invert(1)' }} // Inversion pour contraste sur fond coloré
                      alt={reason.title}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="fs-20" style={{ color: '#000000' }}>{reason.title}</h4>
                  <p style={{ color: '#424242' }}>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;