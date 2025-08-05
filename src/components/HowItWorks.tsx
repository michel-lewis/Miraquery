import React from 'react';
import { useTranslation } from 'react-i18next';
import type { sectionProps } from '../types/common';

interface Feature {
  number: string;
  key: string;
  icon: string;
}

const features: Feature[] = [
  {
    number: '1',
    key: 'input_query',
    icon: 'chat'
  },
  {
    number: '2',
    key: 'analyze_schema',
    icon: 'database'
  },
  {
    number: '3',
    key: 'generate_queries',
    icon: 'shield'
  },
  {
    number: '4',
    key: 'deliver_results',
    icon: 'api'
  }
];

const HowItWorks: React.FC<sectionProps> = ({id}) => {
  const { t } = useTranslation();
  return (
    <section id={id} className="wrapper bg-light-bg">
      <div className="container pb-14 ">
        <div className="row text-center">
          <div className="col-md-10 col-lg-7 mx-auto position-relative">
            <img src="/assets/img/svg/doodle5.svg" className="w-15 position-absolute d-none d-lg-block" style={{ right: '10%' }} alt="Doodle" />
            <img src="/assets/img/svg/doodle6.svg" className="h-15 position-absolute d-none d-lg-block" style={{ top: '-40%', left: '-5%' }} alt="Doodle" />
            <h2 className="fs-16 text-uppercase text-muted mb-3 mt-5">{t('how_it_works.subtitle')}</h2>
            <h3
              className="display-3 mb-8 px-xl-6"
              dangerouslySetInnerHTML={{ __html: t('how_it_works.heading') }}
            />
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
                      <h4 className="fs-20">{t(`how_it_works.${step.key}.title`)}</h4>
                      <p className="mb-0 px-xl-7">{t(`how_it_works.${step.key}.description`)}</p>
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
                      <h4 className="fs-20">{t(`how_it_works.${step.key}.title`)}</h4>
                      <p className="mb-0 px-xl-7">{t(`how_it_works.${step.key}.description`)}</p>
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