import React from 'react';
import { useTranslation } from 'react-i18next';

interface Reason {
  key: string;
  icon: string;
  bg: string;
}

const reasons: Reason[] = [
  { key: 'ai_precision', icon: 'brain', bg: '#00C4CC' },
  { key: 'versatility', icon: 'database', bg: '#FFC107' },
  { key: 'performance', icon: 'rocket', bg: '#76FF03' },
  { key: 'developer_friendly', icon: 'code', bg: '#424242' },
  { key: 'deployment', icon: 'cloud', bg: '#00C4CC' },
  { key: 'vision', icon: 'vision', bg: '#FFC107' },
];

const WhyChoose: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="wrapper bg-light">
      <div className="container py-16 py-md-18">
        <div className="row text-center">
          <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto position-relative">
            <img
              src="/assets/img/svg/doodle3.svg"
              className="h-11 position-absolute d-none d-lg-block"
              style={{ right: '-12%' }}
              alt="Doodle 3"
            />
            <img
              src="/assets/img/svg/doodle9.svg"
              className="h-17 position-absolute d-none d-lg-block"
              style={{ left: '-17%' }}
              alt="Doodle 9"
            />
            <h2 className="fs-16 text-uppercase text-muted mb-3 text-center">{t('why_choose.subtitle')}</h2>
            <h3
              className="display-3 mb-12 text-center"
              dangerouslySetInnerHTML={{ __html: t('why_choose.heading') }}
            />
          </div>
        </div>
        <div className="row d-flex align-items-start">
          <div className="col-lg-6 position-lg-sticky" style={{ top: '8rem' }}>
            <figure>
              <img src="/assets/img/why3.png" srcSet="/assets/img/why3.png 2x" alt="Devices" />
            </figure> 
          </div>
          <div className="col-lg-6 ms-auto">
            {reasons.map((reason, index) => (
              <div className="d-flex flex-row mb-8" key={index}>
                <div>
                  <div
                    className={`svg-bg svg-bg-lg rounded-xl me-5`}
                    style={{ backgroundColor: reason.bg, width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <img
                      src={`/assets/img/icons/solid/${reason.icon}.svg`}
                      className="icon-svg solid"
                      style={{ width: '30px', height: '30px', filter: 'brightness(0) invert(1)' }}
                      alt={t(`why_choose.${reason.key}.title`)}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="fs-20" style={{ color: '#000000' }}>{t(`why_choose.${reason.key}.title`)}</h4>
                  <p style={{ color: '#424242' }}>{t(`why_choose.${reason.key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;