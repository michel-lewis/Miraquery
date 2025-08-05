import React from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '/assets/img/photos/bg23.png';
import type { sectionProps } from '../types/common';

const FAQ: React.FC<sectionProps> = ({ id }) => {
  const { t } = useTranslation();

  // Access the FAQ items from the translation file
  const faqs = t('faq.items', { returnObjects: true }) as { id: string; question: string; answer: string }[];

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
            <h2 className="fs-16 text-uppercase text-secondary mb-3 text-center">
              {t('faq.subtitle')}
            </h2>
            <h3
              className="display-3 mb-11 px-lg-8 px-xl-11 text-center"
              dangerouslySetInnerHTML={{ __html: t('faq.heading') }}
            />
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