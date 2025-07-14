import React from 'react';

interface ContactProps {
  id?: string;
}
const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="wrapper bg-light-bg">
      <div className="container pt-18 pt-md-20 pb-14 pb-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center justify-content-center"> {/* Ajout de justify-content-center ici */}
          <div className="col-lg-5 position-relative ">
            {/* Les doodls peuvent être ajustés si leur position absolue semble désalignée avec les changements */}
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
            <h2 className="fs-16 text-uppercase text-secondary mb-3">Contactez-nous</h2>
            <h3 className="display-3 mb-4 text-primary">Parlons-en</h3>
            <p className="lead mb-4 text-neutral">
              Créons quelque chose de grand ensemble. Nous sommes <span className="text-decoration-underline text-accent">de confiance pour plus de 5000 clients</span>. Rejoignez-les en utilisant nos services et développez votre activité.
            </p>
            <p className="mb-4 text-neutral">
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <a
              href="#"
              className="btn btn-primary rounded-pill shadow-sm"
            >
              Nous contacter
            </a>
          </div>
          {/* La colonne image devrait rester col-lg-7 ou même être augmentée si l'image est très grande */}
          <div className="col-lg-7 order-lg-4 text-center">
            <figure>
              <img
                className="w-100 d-block mx-auto" // Remplacé w-auto par w-100 pour prendre toute la largeur de la colonne
                // Vous pouvez aussi essayer w-75 ou w-80 si w-100 est trop grand
                src="/assets/img/contact.png"
                srcSet="/assets/img/contact.png 2x"
                alt="Illustration contact"
                style={{ maxWidth: '600px' }} // Optionnel: Limiter la taille maximale sur très grands écrans
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;