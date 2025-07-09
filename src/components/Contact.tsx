
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-light-bg py-0">
      <div className="content-wrapper flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
        <div className="lg:w-7/12 order-last lg:order-first relative">
          <figure>
            <img
              className="w-auto max-w-full"
              src="/assets/img/illustrations/i14.png"
              srcSet="/assets/img/illustrations/i14@2x.png 2x"
              alt="Illustration contact"
            />
          </figure>
        </div>
        <div className="lg:w-5/12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Parlons-en
          </h2>
          <p className="text-lg md:text-xl mb-4 text-neutral">
            Créons quelque chose de grand ensemble. Nous sommes <span className="underline text-accent">de confiance pour plus de 5000 clients</span>. Rejoignez-les en utilisant nos services et développez votre activité.
          </p>
          <p className="text-neutral mb-4">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
          <a
            href="#"
            className="inline-block mt-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-soft transition font-semibold shadow-sm"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
