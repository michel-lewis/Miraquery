import React from 'react';
import { useTranslation } from 'react-i18next';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="wrapper bg-light">
      <div className="container py-14 pt-lg-16 pb-lg-0">
        <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center">
          <div className="col-lg-6 col-xl-5 position-relative d-none d-lg-block">
            <div
              className="shape rounded-circle bg-soft-primary rellax w-21 h-21"
              data-rellax-speed="1"
              style={{ top: '8rem', left: '2rem' }}
            ></div>
            <figure className="ps-xxl-10">
              <img
                className="w-100 d-block mx-auto"
                src="/assets/img/contact.png"
                srcSet="/assets/img/contact.png 2x"
                alt={t('contact.image_alt', 'Illustration de contact')}
                style={{ maxWidth: '600px' }}
              />
            </figure>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <h2 className="display-4 mb-3">{t('contact.heading', 'Prenez contact')}</h2>
            <p className="lead mb-8 pe-xl-10">
              {t('contact.lead', 'Vous avez des questions ? Contactez-nous via notre formulaire et nous vous répondrons rapidement.')}
              <span className="text-decoration-underline text-accent">
                {' '}
                {t('contact.trusted', 'Fait confiance par plus de 5 000 clients')}{' '}
              </span>
              {t('contact.over', 'Rejoignez-les en utilisant nos services et développez votre entreprise.')}
            </p>
            <form
              className="contact-form needs-validation"
              method="post"
              action="#"
              noValidate
            >
              <div className="messages"></div>
              <div className="form-floating mb-4">
                <input
                  id="form_name2"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder={t('contact.form.name_placeholder', 'Jane')}
                  required
                  data-error={t('contact.form.name_error', 'Le nom est requis.')}
                />
                <label htmlFor="form_name2">{t('contact.form.name_label', 'Nom *')}</label>
                <div className="valid-feedback">{t('contact.form.valid_feedback', 'C\'est parfait !')}</div>
                <div className="invalid-feedback">{t('contact.form.name_invalid', 'Veuillez entrer votre nom.')}</div>
              </div>
              <div className="form-floating mb-4">
                <input
                  id="form_email2"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder={t('contact.form.email_placeholder', 'jane.doe@exemple.com')}
                  required
                  data-error={t('contact.form.email_error', 'Un email valide est requis.')}
                />
                <label htmlFor="form_email2">{t('contact.form.email_label', 'Email *')}</label>
                <div className="valid-feedback">{t('contact.form.valid_feedback', 'C\'est parfait !')}</div>
                <div className="invalid-feedback">{t('contact.form.email_invalid', 'Veuillez fournir une adresse email valide.')}</div>
              </div>
              <div className="form-floating mb-4">
                <textarea
                  id="form_message2"
                  name="message"
                  className="form-control"
                  placeholder={t('contact.form.message_placeholder', 'Votre message')}
                  style={{ height: '150px' }}
                  required
                ></textarea>
                <label htmlFor="form_message2">{t('contact.form.message_label', 'Message *')}</label>
                <div className="valid-feedback">{t('contact.form.valid_feedback', 'C\'est parfait !')}</div>
                <div className="invalid-feedback">{t('contact.form.message_invalid', 'Veuillez entrer votre message.')}</div>
              </div>
              <input
                type="submit"
                className="btn btn-primary rounded-pill btn-send mb-3"
                value={t('contact.form.submit_button', 'Envoyer le message')}
              />
              <p className="text-muted">
                <strong>*</strong> {t('contact.form.required_fields', 'Ces champs sont requis.')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;