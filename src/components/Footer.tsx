import React from 'react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  const { t } = useTranslation();
  return (
    <footer id={id} className="bg-slate-gray text-inverse">
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div className="d-lg-flex flex-row align-items-lg-center">
          <h3 className="display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white">
            {t('footer.join_community')}
          </h3>
          <a href="#" className="btn btn-primary rounded-pill mb-0 text-nowrap">
            {t('footer.try_free')}
          </a>
        </div>
        <hr className="mt-11 mb-12" />
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img
                className="mb-4"
                src="/assets/img/miraquery.png"
                srcSet="/assets/img/miraquery.png 2x"
                alt={t('footer.logo_alt')}
              />
              <p className="mb-4">
                {t('footer.copyright')}
                <br className="d-none d-lg-block" />
                {t('footer.all_rights_reserved')}
              </p>
              {/* <nav className="nav social social-white">
                <a href="#">
                  <i className="uil uil-twitter"></i>
                </a>
                <a href="#">
                  <i className="uil uil-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="uil uil-dribbble"></i>
                </a>
                <a href="#">
                  <i className="uil uil-instagram"></i>
                </a>
                <a href="#">
                  <i className="uil uil-youtube"></i>
                </a>
              </nav> */}
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">{t('footer.get_in_touch')}</h4>
              <address className="pe-xl-15 pe-xxl-17">{t('footer.address')}</address>
              <a href="mailto:#">{t('footer.email')}</a>
              <br /> {t('footer.phone')}
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">{t('footer.learn_more')}</h4>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#">{t('footer.about_us')}</a>
                </li>
                <li>
                  <a href="#">{t('footer.our_story')}</a>
                </li>
                <li>
                  <a href="#">{t('footer.projects')}</a>
                </li>
                <li>
                  <a href="#">{t('footer.terms_of_use')}</a>
                </li>
                <li>
                  <a href="#">{t('footer.privacy_policy')}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">{t('footer.our_newsletter')}</h4>
              <p className="mb-5">{t('footer.subscribe_newsletter')}</p>
              <div className="newsletter-wrapper">
                <div id="mc_embed_signup2">
                  <form
                    action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                    method="post"
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    className="validate dark-fields"
                    target="_blank"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll2">
                      <div className="mc-field-group input-group form-floating">
                        <input
                          type="email"
                          value=""
                          name="EMAIL"
                          className="required email form-control"
                          placeholder={t('footer.email_address')}
                          id="mce-EMAIL2"
                        />
                        <label htmlFor="mce-EMAIL2">{t('footer.email_address')}</label>
                        <input
                          type="submit"
                          value={t('footer.join')}
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="btn btn-primary"
                        />
                      </div>
                      <div id="mce-responses2" className="clear">
                        <div className="response" id="mce-error-response2" style={{ display: 'none' }}></div>
                        <div className="response" id="mce-success-response2" style={{ display: 'none' }}></div>
                      </div>
                      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                        <input
                          type="text"
                          name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                          tabIndex={-1}
                          value=""
                        />
                      </div>
                      <div className="clear"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;