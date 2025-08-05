import React from 'react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  const { t } = useTranslation();
  return (
    <footer id={id} className="wrapper bg-dark text-white">
      <div className="container py-16 py-md-18">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="fs-24 mb-3">{t('footer.heading')}</h3>
            <ul className="list-unstyled">
              <li><a href="#faq" className="text-white">{t('footer.faq')}</a></li>
              <li><a href="#" className="text-white">{t('footer.terms')}</a></li>
            </ul>
            <div className="mt-4">
              <a href="#" className="btn btn-primary rounded">{t('footer.get_started')}</a>
              <a href="#" className="btn btn-outline-white rounded ms-2">{t('footer.contact')}</a>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="fs-20 mb-3">{t('footer.contact_header')}</h4>
            <p>
              {t('footer.email_label')}: <a href="mailto:contact@korva.com" className="text-white">contact@korva.com</a><br />
              {t('footer.x_label')}: <a href="https://x.com/KorvaMira" className="text-white">@KorvaMira</a>
            </p>
            <img src="/assets/img/miraquery.png" alt={t('footer.logo_alt')} className="h-16" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;