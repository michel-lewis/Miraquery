import React from 'react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  key: string;
  bg: string;
}

const testimonials: Testimonial[] = [
  { key: 'coriss_ambady_1', bg: 'bg-soft-grape' },
  { key: 'cory_zamora', bg: 'bg-soft-green' },
  { key: 'nikolas_brooten', bg: 'bg-soft-orange' },
  { key: 'coriss_ambady_2', bg: 'bg-soft-pink' },
  { key: 'jackie_sanders', bg: 'bg-soft-blue' },
  { key: 'laura_widerski', bg: 'bg-soft-yellow' },
];

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="wrapper bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center position-relative">
            <img src="./src/assets/img/svg/doodle1.svg" className="h-9 position-absolute d-none d-lg-block" style={{ top: '2%', left: '9%' }} alt="" />
            <img src="./src/assets/img/svg/doodle10.svg" className="h-7 position-absolute d-none d-lg-block" style={{ top: '-45%', left: '-17%' }} alt="" />
            <img src="./src/assets/img/svg/doodle11.svg" className="h-13 position-absolute d-none d-lg-block" style={{ top: '-40%', right: '-15%' }} alt="" />
            <h2 className="fs-16 text-uppercase text-muted mb-3">{t('testimonials.subtitle')}</h2>
            <h3
              className="display-3 mb-11 px-xl-10 px-xxl-13"
              dangerouslySetInnerHTML={{ __html: t('testimonials.heading') }}
            />
          </div>
        </div>
        <div className="grid mb-12">
          <div className="row isotope gy-6">
            {testimonials.map((testimonial, index) => (
              <div className="item col-md-6 col-xl-4" key={index}>
                <div className={`card shadow-none rounded-xl ${testimonial.bg}`}>
                  <div className="card-body">
                    <blockquote className="icon mb-0">
                      <p>“{t(`testimonials.${testimonial.key}.quote`)}”</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">{t(`testimonials.${testimonial.key}.name`)}</h5>
                          <p className="mb-0">{t(`testimonials.${testimonial.key}.role`)}</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;