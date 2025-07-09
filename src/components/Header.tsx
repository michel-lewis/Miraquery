import React from 'react';

interface SocialItem {
  icon: string;
  url: string;
}

interface LanguageItem {
  code: string;
  url: string;
}

const socialItems: SocialItem[] = [
  'twitter', 'facebook-f', 'dribbble', 'instagram', 'youtube'
].map(icon => ({
  icon,
  url: '#'
}));

const languages: LanguageItem[] = [
  { code: 'En', url: '#' },
  { code: 'De', url: '#' },
  { code: 'Es', url: '#' }
];

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Close offcanvas on mobile
      const offcanvas = document.querySelector('.offcanvas.show');
      if (offcanvas) {
        // @ts-ignore
        window.bootstrap.Offcanvas.getInstance(offcanvas)?.hide();
      }
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <a href="./index.html">
              <img 
                src="/assets/img/miraquery.png" 
                srcSet="/assets/img/miraquery.png 2x" 
                alt="Logo" 
                style={{ maxWidth: '150px' }} // Reduced logo size
              />
            </a>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-secondary fs-30 mb-0">MiraQuery</h3>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#hero"
                    onClick={(e) => handleNavClick(e, 'hero')}
                    data-bs-dismiss="offcanvas"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#problem-solution"
                    onClick={(e) => handleNavClick(e, 'problem-solution')}
                    data-bs-dismiss="offcanvas"
                  >
                    Problem & Solution
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#key-features"
                    onClick={(e) => handleNavClick(e, 'key-features')}
                    data-bs-dismiss="offcanvas"
                  >
                    Key Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, 'pricing')}
                    data-bs-dismiss="offcanvas"
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#footer"
                    onClick={(e) => handleNavClick(e, 'footer')}
                    data-bs-dismiss="offcanvas"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <a href="mailto:contact@korva.com" className="link-inverse">contact@korva.com</a>
                  <br /> 00 (123) 456 78 90 <br />
                  <nav className="nav social social-white mt-4">
                    {socialItems.map((social, index) => (
                      <a href={social.url} key={index}>
                        <i className={`uil uil-${social.icon}`}></i>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item dropdown language-select text-uppercase">
                <a className="nav-link dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">En</a>
                <ul className="dropdown-menu">
                  {languages.map((lang, index) => (
                    <li className="nav-item" key={index}>
                      <a className="dropdown-item" href={lang.url}>{lang.code}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                  <i className="uil uil-info-circle"></i>
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <button className="hamburger offcanvas-nav-btn"><span></span></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-end text-inverse" id="offcanvas-info" data-bs-scroll="true">
        <div className="offcanvas-header">
          <h3 className="text-secondary fs-30 mb-0">MiraQuery</h3>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body pb-6">
          <div className="widget mb-8">
            <p className="text-primary">MiraQuery transforms natural language into SQL and MongoDB queries using Grok's AI, making data access simple and fast for everyone.</p>
          </div>
          <div className="widget mb-8">
            <h4 className="widget-title text-secondary mb-3">Contact Info</h4>
            <address> Moonshine St. 14/05 <br /> Light City, London </address>
            <a href="mailto:contact@korva.com">contact@korva.com</a><br /> 00 (123) 456 78 90
          </div>
          <div className="widget mb-8">
            <h4 className="widget-title text-secondary mb-3">Learn More</h4>
            <ul className="list-unstyled">
              <li><a href="#problem-solution">Problem & Solution</a></li>
              <li><a href="#key-features">Key Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#footer">Contact Us</a></li>
            </ul>
          </div>
          <div className="widget">
            <h4 className="widget-title text-secondary mb-3">Follow Us</h4>
            <nav className="nav social">
              {socialItems.map((social, index) => (
                <a href={social.url} key={index}>
                  <i className={`uil uil-${social.icon}`}></i>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;