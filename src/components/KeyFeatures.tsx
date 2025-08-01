
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
    title: 'AI-Powered Natural Language Querying',
    description: 'Mira transforms natural language into precise SQL or MongoDB queries using xAI\'s Grok API. Its interpreter simplifies complex database interactions, making data access intuitive for all users, from beginners to experts.',
    caseExample: 'A manager asks: "Show me all orders from 2025."',
    result: 'Mira generates: SELECT * FROM orders WHERE order_date >= \'2025-01-01\';',
    additionalPoint: 'Contextual Accuracy: Mira understands query intent with high precision, ensuring reliable results without manual query crafting.',
    icon: 'brain'
  },
  {
    number: '2',
    title: 'Multi-Database Support & Optimization',
    description: 'Mira supports PostgreSQL and MongoDB with AI-driven schema creation, query optimization, and caching. It introspects schemas, optimizes database structures, and caches results in Redis for sub-50ms latency.',
    caseExample: 'A retailer queries: "Sales by product category this year."',
    result: 'Mira optimizes: SELECT category, SUM(sales) FROM orders GROUP BY category; with cached results for instant access.',
    additionalPoint: 'Performance Boost: Automatic schema generation and query optimization reduce database load and improve response times.',
    icon: 'database'
  },
  {
    number: '3',
    title: 'Developer-Friendly APIs & ORM Integration',
    description: 'Mira offers simple and enriched REST APIs (internal/external) and an ORM-like SDK (@korva/mira) for seamless integration. Developers can query databases in natural language or use structured APIs with Zod validation and NeverThrow error handling.',
    caseExample: 'A developer integrates Mira into a web app.',
    result: 'Code: import mira from \'@korva/mira\'; mira.query(\'List active users\');',
    additionalPoint: 'Flexibility: Public database support and ORM-like APIs simplify integration while maintaining security and scalability.',
    icon: 'code'
  },
  {
    number: '4',
    title: 'Robust Monitoring, Security & Caching',
    description: 'Mira provides comprehensive logging, monitoring, and caching with MongoDB logs and Redis cache. It ensures secure query execution with validated inputs and offers insights into performance and usage patterns.',
    caseExample: 'An admin checks query performance after a peak usage period.',
    result: 'Logs show: Query ID: 456, Time: 42ms, Status: Cached, Security: Validated.',
    additionalPoint: 'Proactive Insights: Real-time monitoring and security features protect data while optimizing performance with intelligent caching.',
    icon: 'log'
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
