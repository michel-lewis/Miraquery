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
    key: 'ai_powered',
    icon: 'brain'
  },
  {
    number: '2',
    key: 'multi_database',
    icon: 'database'
  },
  {
    number: '3',
    key: 'developer_friendly',
    icon: 'code'
  },
  {
    number: '4',
    key: 'robust_monitoring',
    icon: 'log'
  }
];

const KeyFeatures: React.FC<sectionProps> = ({id}) => {
  const { t } = useTranslation();
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
            <h2 className="fs-16 text-uppercase text-muted mb-3">{t('key_features.subtitle')}</h2>
            <h3
              className="display-3 mb-8 px-xl-6"
              dangerouslySetInnerHTML={{ __html: t('key_features.heading') }}
            />
            <p className="lead mb-7">
              {t('key_features.lead')}
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
                        alt={t(`key_features.${feature.key}.title`)}
                      />
                    </div>
                    <div>
                      <span className="badge bg-pale-primary text-primary rounded-pill mb-2">0{feature.number}</span>
                      <h3 className="fs-22 mb-3">{t(`key_features.${feature.key}.title`)}</h3>
                    </div>
                  </div>
                  
                  <p className="mb-4">{t(`key_features.${feature.key}.description`)}</p>
                  
                  <div className="card bg-soft-primary mb-4">
                    <div className="card-body p-4">
                      <h6 className="fs-16 mb-2">{t('key_features.example')}</h6>
                      <p className="mb-1"><strong>{t('key_features.case')}</strong> {t(`key_features.${feature.key}.case_example`)}</p>
                      <p className="mb-0"><strong>{t('key_features.result')}</strong> <code>{t(`key_features.${feature.key}.result`)}</code></p>
                    </div>
                  </div>
                  
                  <ul className="icon-list bullet-bg bullet-soft-primary">
                    <li><span className="bullet"></span><span>{t(`key_features.${feature.key}.additional_point`)}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <a href="#" className="btn btn-primary rounded-pill">{t('key_features.button_test_now')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;