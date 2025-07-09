
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
          <div className="lg:w-7/12 order-last lg:order-first relative">
            <figure>
              <img
                className="w-auto"
                src="./assets/img/illustrations/i14.png"
                srcSet="./assets/img/illustrations/i14@2x.png 2x"
                alt=""
              />
            </figure>
          </div>
          <div className="lg:w-5/12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Let’s Talk</h2>
            <p className="text-lg md:text-xl mb-4">
              Let's make something great together. We are{' '}
              <span className="underline text-purple-600">trusted by</span> over 5000+ clients. Join them by using our services and grow your business.
            </p>
            <p className="text-gray-600">
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <a
              href="#"
              className="inline-block mt-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
