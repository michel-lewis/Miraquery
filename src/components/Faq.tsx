import React from 'react';
import bgImage from '/assets/img/photos/bg23.png'; 
import type { sectionProps } from '../types/common';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: '1-1',
    question: 'Qu\'est-ce que MiraQuery ?',
    answer: 'MiraQuery est un moteur backend TypeScript qui transforme vos requêtes en langage naturel en commandes SQL ou MongoDB exécutables. Il utilise l\'API Grok de xAI pour comprendre et générer ces requêtes, simplifiant l\'accès et l\'analyse de vos données pour tous.'
  },
  {
    id: '1-2',
    question: 'Quelles bases de données MiraQuery prend-il en charge ?',
    answer: 'Actuellement, MiraQuery prend en charge PostgreSQL et MongoDB. Nous utilisons les drivers officiels et légers pour ces deux bases de données, avec une introspection du schéma pour s\'assurer que les requêtes générées sont précises et adaptées à votre structure de données.'
  },
  {
    id: '1-3',
    question: 'Quelle technologie d\'IA MiraQuery utilise-t-il ?',
    answer: 'MiraQuery s\'appuie exclusivement sur l\'API Grok de xAI pour l\'intelligence artificielle. Cela nous permet de déléguer la charge de calcul et de bénéficier des capacités avancées de Grok pour une conversion précise du langage naturel en requêtes.'
  },
  {
    id: '2-1',
    question: 'MiraQuery est-il rapide ?',
    answer: 'Oui, MiraQuery est conçu pour la performance. Grâce à un cache Redis (ioredis), les résultats des requêtes fréquentes sont servis en moins de 50 ms. De plus, les pools de connexions gérés par les drivers Node.js sous-jacents contribuent à réduire la latence.'
  },
  {
    id: '2-2',
    question: 'Comment MiraQuery assure-t-il la sécurité et la robustesse ?',
    answer: 'MiraQuery est construit sur une stack 100% TypeScript, garantissant robustesse et typage strict. Nous utilisons Zod pour la validation des inputs de manière typée et sécurisée, et NeverThrow pour une gestion des erreurs robuste et prévisible.'
  },
  {
    id: '2-3',
    question: 'Comment puis-je intégrer MiraQuery à mon application ?',
    answer: 'MiraQuery offre plusieurs options d\'intégration : une API REST puissante (route POST /query), un package npm @korva/mira (SDK client-side) pour simplifier les appels API, et une documentation Swagger/OpenAPI avec une interface UI interactive (/docs) pour faciliter les tests et l\'exploration de l\'API.'
  },
  {
    id: '2-4',
    question: 'Puis-je déployer MiraQuery sur mes propres serveurs (On-Premise) ?',
    answer: 'Absolument ! En plus de la plateforme SaaS et du service API, MiraQuery propose une version conteneurisée via Docker (avec des charts Helm) pour les entreprises ayant des exigences strictes en matière de sécurité et de conformité.'
  },
  {
    id: '2-5',
    question: 'Existe-t-il une version gratuite de MiraQuery ?',
    answer: 'Oui, nous proposons un niveau Freemium qui vous permet d\'effectuer jusqu\'à 50 requêtes par mois gratuitement. Cela vous donne l\'opportunité de tester MiraQuery et de découvrir sa puissance avant de passer à un plan payant.'
  },
  {
    id: '2-6',
    question: 'Quelles sont les fonctionnalités futures prévues pour MiraQuery ?',
    answer: 'Nous prévoyons un entrepôt de données pour les requêtes analytiques, un chatbot intégré (Slack, Teams, WhatsApp), l\'intégration de bases de données vectorielles (ex. Milvus), un Model Context Protocol (MCP), des prompts personnalisés, des pipelines de requêtes, et des outils de monitoring avec recommandations intelligentes.'
  },
  {
    id: '2-7',
    question: 'Comment MiraQuery se différencie-t-il des autres outils Text2SQL ?',
    answer: 'MiraQuery se distingue par sa polyvalence (SQL et NoSQL), son approche orientée développeur (stack TypeScript, SDK npm, Swagger), ses performances supérieures grâce au cache Redis, et son architecture robuste. Notre vision écosystème avec des plans futurs ambitieux (DW, chatbot, bases vectorielles) en fait une solution complète et évolutive.'
  }
];

const FAQ: React.FC<sectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="wrapper image-wrapper bg-full bg-overlay bg-overlay-light-600"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'var(--bs-light-bg)',
      }}
    >
      <div className="container py-14 pt-md-16 pb-md-17 position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-xl-11 col-xxl-10 mx-auto">
            <h2 className="fs-16 text-uppercase text-secondary mb-3 text-center">Foire Aux Questions</h2>
            <h3 className="display-3 mb-11 px-lg-8 px-xl-11 text-center">
              Vous avez des questions sur <span className="text-accent1">MiraQuery</span> ? Nous avons les réponses !
            </h3>
            <div className="row">
              <div className="col-lg-6 mb-0">
                <div id="accordion-1" className="accordion-wrapper">
                  {faqs.slice(0, 5).map((faq) => (
                    <div className="card accordion-item shadow-lg" key={faq.id}>
                      <div className="card-header" id={`accordion-heading-${faq.id}`}>
                        <button
                          className="collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#accordion-collapse-${faq.id}`}
                          aria-expanded="false"
                          aria-controls={`accordion-collapse-${faq.id}`}
                        >
                          {faq.question}
                        </button>
                      </div>
                      <div
                        id={`accordion-collapse-${faq.id}`}
                        className="collapse"
                        aria-labelledby={`accordion-heading-${faq.id}`}
                        data-bs-parent="#accordion-1"
                      >
                        <div className="card-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div id="accordion-2" className="accordion-wrapper">
                  {faqs.slice(5).map((faq) => (
                    <div className="card accordion-item shadow-lg" key={faq.id}>
                      <div className="card-header" id={`accordion-heading-${faq.id}`}>
                        <button
                          className="collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#accordion-collapse-${faq.id}`}
                          aria-expanded="false"
                          aria-controls={`accordion-collapse-${faq.id}`}
                        >
                          {faq.question}
                        </button>
                      </div>
                      <div
                        id={`accordion-collapse-${faq.id}`}
                        className="collapse"
                        aria-labelledby={`accordion-heading-${faq.id}`}
                        data-bs-parent="#accordion-2"
                      >
                        <div className="card-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;