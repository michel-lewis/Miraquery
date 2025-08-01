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
    title: 'Input Your Query in Plain Language',
    description: 'Start by typing a natural language request. Mira’s AI, powered by xAI’s Grok API, interprets your intent, capturing context to prepare for query generation.',
    caseExample: 'A user types: "Find all customers who bought in 2025."',
    result: 'Mira parses: Intent = select customers, condition = purchase year 2025.',
    additionalPoint: 'Effortless Start: No need for technical query knowledge—just describe what you want.',
    icon: 'chat'
  },
  {
    number: '2',
    title: 'Analyze and Optimize Database Schema',
    description: 'Mira introspects your database (PostgreSQL or MongoDB), creates or caches an optimized schema in JSON, and prepares an efficient query plan tailored to your data structure.',
    caseExample: 'Mira processes the request on a sales database.',
    result: 'Mira caches: { table: "customers", columns: ["id", "purchase_date"] } and optimizes query structure.',
    additionalPoint: 'Smart Setup: Schema creation and optimization ensure fast, accurate query generation.',
    icon: 'database'
  },
  {
    number: '3',
    title: 'Generate and Execute Secure Queries',
    description: 'Mira converts the request into a secure SQL or MongoDB query, validates inputs, executes it, and caches results in Redis for instant future access, with logs stored in MongoDB.',
    caseExample: 'Mira executes the customer query.',
    result: 'Mira runs: SELECT * FROM customers WHERE purchase_date >= \'2025-01-01\'; caches result, logs: Query ID: 101, Time: 45ms.',
    additionalPoint: 'Safe & Fast: Security checks and caching deliver reliable results with sub-50ms latency.',
    icon: 'shield'
  },
  {
    number: '4',
    title: 'Deliver Results via API or App',
    description: 'Mira returns query results through a REST API (POST /query) or ORM-like SDK (@korva/mira), enabling seamless integration into apps or direct access via the SaaS platform.',
    caseExample: 'A developer retrieves results in a web app.',
    result: 'Code: import mira from \'@korva/mira\'; const data = await mira.query(\'Find all customers who bought in 2025\');',
    additionalPoint: 'Flexible Output: Supports internal/external APIs and public databases for versatile use.',
    icon: 'api'
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
            <h3 className="display-3 mb-8 px-xl-6">Découvrez comment Mira transforme vos mots en <span className="text-accent1">données actionnables</span>.</h3>
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