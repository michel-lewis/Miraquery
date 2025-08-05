import React from 'react';
import { useTranslation } from 'react-i18next';

interface PricingProps {
  id?: string;
}

const plans = [
  {
    key: 'free',
    color: 'bg-light-bg',
    amount: 30,
    duration: 'month',
    ctaLink: '#signup',
    ctaClass: 'btn btn-secondary rounded-pill',
    backgroundColor: 'var(--bs-soft-accent1)',
    textColor: 'var(--bs-primary)',
  },
  {
    key: 'freemium',
    color: 'bg-light-bg',
    amount: 30,
    duration: 'month',
    ctaLink: '#signup',
    ctaClass: 'btn btn-secondary rounded-pill',
    backgroundColor: 'var(--bs-soft-accent2)',
    textColor: 'var(--bs-primary)',
  },
  {
    key: 'enterprise',
    color: 'bg-light-bg',
    amount: 30,
    duration: 'month',
    ctaLink: '#contact',
    ctaClass: 'btn btn-outline-secondary rounded-pill',
    backgroundColor: 'var(--bs-soft-secondary)',
    textColor: 'var(--bs-primary)',
  },
  {
    key: 'custom',
    color: 'bg-light-bg',
    amount: 30,
    duration: 'month',
    ctaLink: '#contact',
    ctaClass: 'btn btn-outline-secondary rounded-pill',
    backgroundColor: 'var(--bs-soft-accent1)',
    textColor: 'var(--bs-primary)',
  },
];

const Pricing: React.FC<PricingProps> = ({ id }) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="wrapper bg-light-bg">
      <div className="container py-16 py-md-18">
        <div className="row text-center">
          <div className="col-lg-10 mx-auto">
            <h2 className="fs-16 text-uppercase text-muted mb-3">{t('pricing.subtitle')}</h2>
            <h3 className="display-3 mb-10 text-primary">{t('pricing.heading')}</h3>
            <div className="row gx-md-4 gy-6">
              {plans.map((plan, index) => (
                <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                  <div className={`card shadow-lg ${plan.color} h-100`} style={{ minWidth: '250px' }}>
                    <div className="card-body d-flex flex-column">
                      <h4
                        className="fs-15 fw-bold text-dark mb-3 font-space"
                        style={{
                          display: "flex-start",
                          padding: 5,
                          backgroundColor: plan.backgroundColor,
                          color: plan.textColor,
                          borderRadius: 10
                        }}
                      >
                        {t(`pricing.${plan.key}.title`)}
                      </h4>
                      {plan.amount && (
                        <div className="text-center mb-3">
                          <span className="display-4 fw-bold text-dark">
                            ${plan.amount}
                            <span className="fs-16 text-muted">
                              /{t(`pricing.duration_${plan.duration}`)}
                            </span>
                          </span>
                        </div>
                      )}
                      <ul className="icon-list bullet-bg bullet-soft-secondary mt-7 mb-8 text-start">
                        {(t(`pricing.${plan.key}.features`, { returnObjects: true }) as string[]).map((feature: string, i: number) => (
                          <li key={i} className={`mb-2 fs-16 font-space`}>
                            <i className="uil uil-check"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={plan.ctaLink}
                        className={`btn btn-soft-secondary rounded-pill ${plan.ctaClass}`}
                      >
                        {t(`pricing.${plan.key}.cta_text`)}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;