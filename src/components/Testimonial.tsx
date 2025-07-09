import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  bg: string;
}

const testimonials: Testimonial[] = [
  { name: 'Coriss Ambady', role: 'Financial Analyst', quote: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.', bg: 'bg-soft-grape' },
  { name: 'Cory Zamora', role: 'Marketing Specialist', quote: 'Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.', bg: 'bg-soft-green' },
  { name: 'Nikolas Brooten', role: 'Sales Manager', quote: 'Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui consectetur adipiscing elit.', bg: 'bg-soft-orange' },
  { name: 'Coriss Ambady', role: 'Financial Analyst', quote: 'Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum ac laoreet vitae.', bg: 'bg-soft-pink' },
  { name: 'Jackie Sanders', role: 'Investment Planner', quote: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero a pharetra.', bg: 'bg-soft-blue' },
  { name: 'Laura Widerski', role: 'Sales Specialist', quote: 'Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', bg: 'bg-soft-yellow' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center position-relative">
            <img src="./src/assets/img/svg/doodle1.svg" className="h-9 position-absolute d-none d-lg-block" style={{ top: '2%', left: '9%' }} alt="" />
            <img src="./src/assets/img/svg/doodle10.svg" className="h-7 position-absolute d-none d-lg-block" style={{ top: '-45%', left: '-17%' }} alt="" />
            <img src="./src/assets/img/svg/doodle11.svg" className="h-13 position-absolute d-none d-lg-block" style={{ top: '-40%', right: '-15%' }} alt="" />
            <h2 className="fs-16 text-uppercase text-muted mb-3">Happy Customers</h2>
            <h3 className="display-3 mb-11 px-xl-10 px-xxl-13">Don't take our word for it. See what <span className="text-gradient gradient-7">customers</span> are saying about us.</h3>
          </div>
        </div>
        <div className="grid mb-12">
          <div className="row isotope gy-6">
            {testimonials.map((testimonial, index) => (
              <div className="item col-md-6 col-xl-4" key={index}>
                <div className={`card shadow-none rounded-xl ${testimonial.bg}`}>
                  <div className="card-body">
                    <blockquote className="icon mb-0">
                      <p>“{testimonial.quote}”</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">{testimonial.name}</h5>
                          <p className="mb-0">{testimonial.role}</p>
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