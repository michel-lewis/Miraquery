import React from 'react';

interface PricingProps {
  id?: string;
}

const Pricing: React.FC<PricingProps> = ({ id }) => {
const plans = [
    {
      title: 'Free',
      color: 'bg-light-bg',
      amount: 30,
      duration: 'month',
      features: [
        '10 queries/month',
        'Basic API access',
        'Community support',
        'Single user',
      ],
      ctaText: 'Start Free',
      ctaClass: 'btn btn-secondary rounded-pill',
      ctaLink: '#signup',
      backgroundColor: 'var(--bs-soft-accent1)',
      textColor: 'var(--bs-primary)',
    },
    {
      title: 'Freemium',
      color: 'bg-light-bg',
      amount: 30,
      duration: 'month',
      features: [
        '50 queries/month',
        'Basic API access',
        'Email support',
        'Up to 2 users',
      ],
      ctaText: 'Start Free',
      ctaClass: 'btn btn-secondary rounded-pill',
      ctaLink: '#signup',
      backgroundColor: 'var(--bs-soft-accent2)',
      textColor: 'var(--bs-primary)',
    },

    {
      title: 'Enterprise',
      color: 'bg-light-bg',
      amount: 30,
      duration: 'month',
      features: [
        'Unlimited queries',
        'On-premise deployment',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
      ],
      ctaText: 'Contact Us',
      ctaClass: 'btn btn-outline-secondary rounded-pill',
      ctaLink: '#contact',
      backgroundColor: 'var(--bs-soft-secondary)',
      textColor: 'var(--bs-primary)',
    },
    {
      title: 'Custom',
      color: 'bg-light-bg',
      amount: 30,
      duration: 'month',
      features: [
        'Tailored query limits',
        'Custom deployment options',
        'Dedicated account manager',
        'Custom feature development',
        'SLA guarantees',
      ],
      ctaText: 'Contact Us',
      ctaClass: 'btn btn-outline-secondary rounded-pill',
      ctaLink: '#contact',
      backgroundColor: 'var(--bs-soft-accent1)',
      textColor: 'var(--bs-primary)',
    },
  ];


  return (
    <section id={id} className="wrapper bg-light-bg">
      <div className="container py-16 py-md-18">
        <div className="row text-center">
          <div className="col-lg-10 mx-auto">
            <h2 className="fs-16 text-uppercase text-secondary mb-3">Pricing</h2>
            <h3 className="display-3 mb-10 text-primary">A plan for every need</h3>
            <div className="row gx-md-4 gy-6">
              {plans.map((plan, index) => (
                <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                  <div className={`card shadow-lg ${plan.color} h-100`} style={{ minWidth: '250px' }}>
                    <div className="card-body d-flex flex-column">
                      <h4 className="fs-15 fw-bold text-dark mb-3 font-space" style={{
                        display: "flex-start",
                        padding: 5,
                        backgroundColor: plan.backgroundColor,
                        color: plan.textColor,
                        borderRadius: 10
                      }}>
                        {plan.title}
                      </h4>
                      {plan.amount && (
                        <div className="text-center mb-3">
                          <span className="display-4 fw-bold text-dark">
                            ${plan.amount}
                            <span className="fs-16 text-muted">
                              /{plan.duration}
                            </span>
                          </span>
                        </div>
                      )}
                      <ul className="icon-list bullet-bg bullet-soft-secondary mt-7 mb-8 text-start">
                        {plan.features.map((feature, i) => (
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
                        {plan.ctaText}
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