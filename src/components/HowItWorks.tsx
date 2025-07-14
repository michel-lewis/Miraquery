import React from 'react';
import type { sectionProps } from '../types/common';

interface Feature {
  number: string;
  title: string;
  description: string;
  caseExample: string;
  result: string;
  additionalPoint: string;
  icon: string;
}

const features: Feature[] = [
  {
    number: '1',
    title: 'Intuitive AI-Powered Conversion',
    description: 'MiraQuery uses advanced AI to transform natural language into precise SQL or MongoDB queries. Our exclusive integration with xAI\'s Grok API ensures high accuracy and contextual understanding, making complex database interactions as simple as typing a sentence.',
    caseExample: 'A small business asks: "Which clients purchased in 2025?"',
    result: 'MiraQuery generates: SELECT * FROM clients WHERE purchase_date >= \'2025-01-01\';',
    additionalPoint: 'Contextual Understanding: MiraQuery captures the full context of your request, going far beyond basic keyword matching to deliver highly relevant results.',
    icon: 'brain'
  },
  {
    number: '2',
    title: 'Multi-Database Versatility',
    description: 'Unlike tools that focus on a single database type, MiraQuery seamlessly supports both PostgreSQL and MongoDB. This unified approach means you can manage diverse data environments without switching tools.',
    caseExample: 'A developer asks: "List active users."',
    result: 'MiraQuery produces: db.users.find({ status: \'active\' });',
    additionalPoint: 'Intelligent Schema Introspection: MiraQuery automatically introspects and caches your database schema in JSON, ensuring accurate and efficient query generation without costly re-scans.',
    icon: 'database'
  },
  {
    number: '3',
    title: 'Extreme Performance',
    description: 'Experience lightning-fast data access with MiraQuery\'s optimized architecture, designed for minimal latency and maximum efficiency.',
    caseExample: 'An enterprise executes 1,000 identical queries daily.',
    result: 'MiraQuery serves 95% of these via cache, saving significant time and API costs.',
    additionalPoint: 'Sub-50ms Latency: Our integrated Redis cache (ioredis) dramatically reduces query response times, serving frequent requests in less than 50 milliseconds.',
    icon: 'rocket'
  },
  {
    number: '4',
    title: 'Streamlined Developer Experience',
    description: 'Built on a robust, 100% TypeScript backend, MiraQuery offers a smooth and secure integration experience for developers.',
    caseExample: 'A developer integrates MiraQuery into a Node.js app.',
    result: 'Code: const mira = require(\'@korva/mira\'); mira.query(\'List products in stock\');',
    additionalPoint: 'Developer-Friendly API: Access MiraQuery\'s power via a clean REST API (POST /query), featuring Zod for robust input validation and NeverThrow for typed error handling.',
    icon: 'code'
  }
];

const HowItWorks: React.FC<sectionProps> = ({id}) => {
  return (
    <section id={id} className="wrapper bg-light-bg">
      <div className="container pb-14 pb-md-16">
        <div className="row text-center">
          <div className="col-md-10 col-lg-7 mx-auto position-relative">
            <img src="/assets/img/svg/doodle5.svg" className="w-15 position-absolute d-none d-lg-block" style={{ right: '10%' }} alt="Doodle" />
            <img src="/assets/img/svg/doodle6.svg" className="h-15 position-absolute d-none d-lg-block" style={{ top: '-40%', left: '-5%' }} alt="Doodle" />
            <h2 className="fs-16 text-uppercase text-secondary mb-3 mt-5">How It Works</h2>
+           <h3 className="display-3 mb-8 px-xl-6">Découvrez comment Mira transforme vos mots en <span className="text-accent1">données actionnables</span>.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-11 mx-auto">
            <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center">
              <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
                <figure className="mx-auto"><img src="/assets/img/howitwork.png" srcSet="/assets/img/howitwork.png 2x" alt="Devices" /></figure>
              </div>
              <div className="w-100 d-lg-none"></div>
              <div className="col-md-6 col-lg-4 order-lg-first">
                {[1, 2].map((num) => {
                  const step = features[num - 1];
                  return (
                    <div key={num}>
                      <span className="fs-60 lh-1 mb-3 fw-normal text-secondary">{num < 10 ? `0${num}` : num}</span>
                      <h4 className="fs-20">{step.title}</h4>
                      <p className="mb-0 px-xl-7">{step.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="col-md-6 col-lg-4">
                {[3, 4].map((num) => {
                  const step = features[num - 1];
                  return (
                    <div key={num}>
                      <span className="fs-60 lh-1 mb-3 fw-normal text-secondary">{num < 10 ? `0${num}` : num}</span>
                      <h4 className="fs-20">{step.title}</h4>
                      <p className="mb-0 px-xl-7">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;