import React from 'react';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className="wrapper bg-dark text-white">
      <div className="container py-16 py-md-18">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="fs-24 mb-3">Ready to revolutionize your data?</h3>
            <ul className="list-unstyled">
              <li><a href="#faq" className="text-white">FAQ</a></li>
              <li><a href="#" className="text-white">Terms</a></li>
            </ul>
            <div className="mt-4">
              <a href="#" className="btn btn-primary rounded">Get Started</a>
              <a href="#" className="btn btn-outline-white rounded ms-2">Contact</a>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="fs-20 mb-3">Contact</h4>
            <p>
              Email: <a href="mailto:contact@korva.com" className="text-white">contact@korva.com</a><br />
              X: <a href="https://x.com/KorvaMira" className="text-white">@KorvaMira</a>
            </p>
            <img src="/assets/img/miraquery-logo.png" alt="MiraQuery Logo" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;