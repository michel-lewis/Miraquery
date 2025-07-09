import React from 'react';

interface FeaturesProps {
  id?: string;
}

interface Feature {
  icon: string;
  title: string;
  bg: string;
}

const features: Feature[] = [
  { icon: 'cloud-network-2', title: 'Always up to Date', bg: 'bg-soft-accent1' },
  { icon: 'touchscreen', title: 'Easy Usage', bg: 'bg-soft-accent2' },
  { icon: 'lock', title: 'Secure Payments', bg: 'bg-soft-secondary' },
  { icon: 'rocket', title: 'Fast Transactions', bg: 'bg-soft-accent1' },
  { icon: 'bar-chart', title: 'Reports & Forecasting', bg: 'bg-soft-secondary' },
  { icon: 'safe', title: 'Online Banking', bg: 'bg-soft-accent2' },
  { icon: 'controls', title: 'Configurable Fields', bg: 'bg-soft-accent1' },
  { icon: 'checked', title: 'List of Transactions', bg: 'bg-soft-accent2' },
];

const Features: React.FC<FeaturesProps> = ({ id }) => {
  return (
    <section id={id} className="wrapper bg-light-bg">
      <div className="container pt-18 pt-md-20 pb-14 pb-md-16">
        <div className="row text-center">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto position-relative">
            <img
              src="/assets/img/svg/doodle3.svg"
              className="h-11 position-absolute d-none d-lg-block"
              style={{ top: '-45%', left: '23%' }}
              alt="Doodle 3"
            />
            <img
              src="/assets/img/svg/doodle4.svg"
              className="h-8 position-absolute d-none d-lg-block"
              style={{ top: '6%', right: '2%' }}
              alt="Doodle 4"
            />
            <h2 className="fs-16 text-uppercase text-secondary mb-3">App Features</h2>
            <h3 className="display-3 mb-11 px-lg-5 px-xl-0 px-xxl-6">
              Sandbox makes your spending <span className="text-secondary">stress-free</span> for you to have the perfect control.
            </h3>
          </div>
        </div>
        <div className="row mb-20">
          <div className="col-xxl-11 mx-auto">
            <div className="row gx-md-8 gy-10 text-center">
              {features.map((feature, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className={`svg-bg svg-bg-lg ${feature.bg} rounded-xl mb-4`}>
                    <img
                      src={`/assets/img/icons/solid/${feature.icon}.svg`}
                      className="icon-svg solid text-primary"
                      alt={feature.title}
                    />
                  </div>
                  <h4 className="fs-20">{feature.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;