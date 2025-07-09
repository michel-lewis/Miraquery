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

const KeyFeatures: React.FC<sectionProps> = ({id}) => {
  return (
    <section id={id} className="wrapper bg-light-bg">
      <div className="container py-14 py-md-16">
        <div className="row text-center">
          <div className="col-md-10 col-lg-8 mx-auto position-relative">
            <img
              src="/assets/img/svg/doodle3.svg"
              className="h-11 position-absolute d-none d-lg-block"
              style={{ top: '-15%', left: '5%' }}
              alt="Doodle"
            />
            <img
              src="/assets/img/svg/doodle4.svg"
              className="h-8 position-absolute d-none d-lg-block"
              style={{ top: '10%', right: '5%' }}
              alt="Doodle"
            />
            <h2 className="fs-16 text-uppercase text-secondary mb-3">Key Features</h2>
            <h3 className="display-3 mb-8 px-xl-6">
              MiraQuery combines powerful AI with a robust, developer-friendly architecture to make data access <span className="text-accent1">effortless</span> and <span className="text-accent1">universal</span>.
            </h3>
            <p className="lead mb-7">
              Discover how it transforms your daily data interactions!
            </p>
          </div>
        </div>

        <div className="row gx-lg-8 gy-8 mb-14 mb-md-16">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-6" key={index}>
              <div className="card shadow-lg h-100">
                <div className="card-body p-6 p-lg-8">
                  <div className="d-flex flex-row">
                    <div className="svg-bg svg-bg-lg bg-soft-primary rounded-xl mb-4 me-4">
                      <img
                        src={`/assets/img/icons/solid/${feature.icon === 'brain' ? 'bulb' : feature.icon === 'database' ? 'cloud-network' : feature.icon}.svg`}
                        className="icon-svg solid text-primary"
                        alt={feature.title}
                      />
                    </div>
                    <div>
                      <span className="badge bg-pale-primary text-primary rounded-pill mb-2">0{feature.number}</span>
                      <h3 className="fs-22 mb-3">{feature.title}</h3>
                    </div>
                  </div>
                  
                  <p className="mb-4">{feature.description}</p>
                  
                  <div className="card bg-soft-primary mb-4">
                    <div className="card-body p-4">
                      <h6 className="fs-16 mb-2">Example:</h6>
                      <p className="mb-1"><strong>Case:</strong> {feature.caseExample}</p>
                      <p className="mb-0"><strong>Result:</strong> <code>{feature.result}</code></p>
                    </div>
                  </div>
                  
                  <ul className="icon-list bullet-bg bullet-soft-primary">
                    <li><span className="bullet"></span><span>{feature.additionalPoint}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <a href="#" className="btn btn-primary rounded-pill">Tester Maintenant</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;