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
    title: 'Advanced Schema and Query Optimization',
    description: 'MiraQuery offers multi-database versatility with seamless support for PostgreSQL and MongoDB, combined with AI-driven query optimization. It introspects, caches schemas in JSON, and generates lightweight, high-performance queries to ensure efficiency across diverse data environments.',
    caseExample: 'A user runs frequent analytical queries like "Sales by region" on a complex schema.',
    result: 'MiraQuery introspects the schema and optimizes: SELECT region, SUM(sales) FROM orders GROUP BY region; caching results for instant access without re-scans.',
    additionalPoint: 'Intelligent Efficiency: Automatic schema introspection and Redis caching reduce latency and costs, enabling surpuissant queries that are both powerful and lightweight.',
    icon: 'database'
  },
  {
    number: '3',
    title: 'Streamlined Developer Experience',
    description: 'Built on a robust, 100% TypeScript backend, MiraQuery offers a smooth and secure integration experience, functioning as an API and ORM-like tool for developers to easily incorporate natural language querying into applications.',
    caseExample: 'A developer integrates MiraQuery into a Node.js app as an API or ORM substitute.',
    result: 'Code: const mira = require(\'@korva/mira\'); mira.query(\'List products in stock\');',
    additionalPoint: 'Developer-Friendly API: Access via a clean REST API (POST /query) with Zod validation and NeverThrow error handling, simplifying ORM-style interactions without full ORM overhead.',
    icon: 'code'
  },
  {
    number: '4',
    title: 'Comprehensive Logging and Monitoring',
    description: 'MiraQuery provides built-in logging and monitoring to track queries, performance, and optimizations, with integrated caching for efficiency. Logs are stored in MongoDB for easy auditing and insights.',
    caseExample: 'A team reviews query performance and caching after a high-traffic day.',
    result: 'MiraQuery logs reveal: Query ID: 123, Execution Time: 45ms, Status: Success, Cached: Yes, with optimization suggestions.',
    additionalPoint: 'Actionable Insights: Analyze logs to identify bottlenecks, improve efficiency, and leverage caching, with future dashboards for real-time monitoring.',
    icon: 'chart-bar'
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