import React from 'react';
import { useTranslation } from 'react-i18next';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="wrapper bg-light-bg">
      <div className="container pt-18 pt-md-20 pb-14 pb-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center justify-content-center">
          <div className="col-lg-5 position-relative">
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
            <h2 className="fs-16 text-uppercase text-muted mb-3">{t('contact.subtitle')}</h2>
            <h3 className="display-3 mb-4 text-primary">{t('contact.heading')}</h3>
            <p
              className="lead mb-4 text-neutral"
              dangerouslySetInnerHTML={{ __html: t('contact.lead') }}
            />
            <p className="mb-4 text-neutral">{t('contact.description')}</p>
            <a href="#" className="btn btn-primary rounded-pill shadow-sm">
              {t('contact.button_contact_us')}
            </a>
          </div>
          <div className="col-lg-7 order-lg-4 text-center">
            <figure>
              <img
                className="w-100 d-block mx-auto"
                src="/assets/img/contact.png"
                srcSet="/assets/img/contact.png 2x"
                alt={t('contact.image_alt', 'Contact Illustration')}
                style={{ maxWidth: '600px' }}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;