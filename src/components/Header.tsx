import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface SocialItem {
  icon: string;
  url: string;
}

interface LanguageItem {
  code: string;
  url: string;
}

const socialItems: SocialItem[] = [
  "twitter",
  "facebook-f",
  "dribbble",
  "instagram",
  "youtube",
].map((icon) => ({
  icon,
  url: "#",
}));

const languages: LanguageItem[] = [
  { code: "en", url: "#" },
  { code: "fr", url: "#" },
];

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState(i18next.language);
  const { i18n } = useTranslation();

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    i18next.changeLanguage(code);
    const offcanvas = document.querySelector(".offcanvas.show");
    if (offcanvas) {
      // @ts-ignore
      window.bootstrap.Offcanvas.getInstance(offcanvas)?.hide();
    }
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <li className="nav-item dropdown language-select text-uppercase">
      <a
        className="nav-link dropdown-item dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {language.toUpperCase()}
      </a>
      <ul className="dropdown-menu">
        {languages.map(({ code }, index) => (
          <li className="nav-item" key={index}>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLanguageChange(code);
              }}
              data-bs-dismiss="offcanvas"
            >
              {code.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const Header: React.FC = () => {
  const { t } = useTranslation();
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      const offcanvas = document.querySelector(".offcanvas.show");
      if (offcanvas) {
        // @ts-ignore
        window.bootstrap.Offcanvas.getInstance(offcanvas)?.hide();
      }
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-light caret-none">
        <div className="container flex-lg-row flex-nowrap align-items-center menucontainer">
          <div className="navbar-brand w-100">
            <a href="./index.html">
              <img
                src="/assets/img/miraquery.png"
                srcSet="/assets/img/miraquery.png 2x"
                alt="Logo"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-black fs-30 mb-0">{t("offcanvas.title")}</h3>
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 text-black">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#hero"
                    onClick={(e) => handleNavClick(e, "hero")}
                    data-bs-dismiss="offcanvas"
                  >
                    {t("navbar.home")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#problem-solution"
                    onClick={(e) => handleNavClick(e, "problem-solution")}
                    data-bs-dismiss="offcanvas"
                  >
                    {t("navbar.problem_solution")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#key-features"
                    onClick={(e) => handleNavClick(e, "key-features")}
                    data-bs-dismiss="offcanvas"
                  >
                    {t("navbar.key_features")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, "pricing")}
                    data-bs-dismiss="offcanvas"
                  >
                    {t("navbar.pricing")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                    data-bs-dismiss="offcanvas"
                  >
                    {t("navbar.contact")}
                  </a>
                </li>
              </ul>
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <a href="mailto:contact@korva.com" className="link-inverse">
                    {t("offcanvas.contact_info.email")}
                  </a>
                  <br /> {t("offcanvas.contact_info.phone")} <br />
                  <nav className="nav social social-black mt-4">
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
              <LanguageSelector />
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-info"
                >
                  <i className="uil uil-info-circle"></i>
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <button className="hamburger offcanvas-nav-btn">
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end text-black"
        id="offcanvas-info"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header">
          <h3 className="text-black fs-30 mb-0">{t("offcanvas.title")}</h3>
          <button
            type="button"
            className="btn-close btn-close-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body pb-6">
          <div className="widget mb-8">
            <p className="text-black">{t("offcanvas.description")}</p>
          </div>
          <div className="widget mb-8">
            <h4 className="widget-title text-black mb-3">
              {t("offcanvas.contact_info.title")}
            </h4>
            <address>
              {t("offcanvas.contact_info.address_line1")} <br />
              {t("offcanvas.contact_info.address_line2")}
            </address>
            <a href="mailto:contact@korva.com" className="link-inverse">
              {t("offcanvas.contact_info.email")}
            </a>
            <br /> {t("offcanvas.contact_info.phone")}
          </div>
          <div className="widget mb-8">
            <h4 className="widget-title text-black mb-3">
              {t("offcanvas.learn_more.title")}
            </h4>
            <ul className="list-unstyled">
              <li>
                <a href="#problem-solution">
                  {t("offcanvas.learn_more.problem_solution")}
                </a>
              </li>
              <li>
                <a href="#key-features">{t("offcanvas.learn_more.key_features")}</a>
              </li>
              <li>
                <a href="#pricing">{t("offcanvas.learn_more.pricing")}</a>
              </li>
              <li>
                <a href="#footer">{t("offcanvas.learn_more.contact_us")}</a>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h4 className="widget-title text-black mb-3">
              {t("offcanvas.follow_us.title")}
            </h4>
            <nav className="nav social social-black">
              {socialItems.map((social, index) => (
                <a href={social.url} key={index}>
                  <i className={`uil uil-${social.icon}`}></i>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <style>{`
        .nav-link,
        .dropdown-item,
        .link-inverse {
          color: black !important;
        }
        .social-black a i {
          color: black !important;
        }
        .btn-close-dark::before {
          color: black !important;
        }
        .hamburger span,
        .hamburger span::before,
        .hamburger span::after {
          background-color: black !important;
        }
        .menucontainer {
          background-color: white;
          margin: 2rem auto;
          max-width: 90%;
          border-radius: 3rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
        }
        .navbar-brand img {
          max-height: 2.5rem;
        }
        .navbar-nav .nav-link,
        .navbar-other .nav-link {
          font-size: 0.9rem;
          padding: 0.25rem 0.5rem;
        }
        .navbar-nav .nav-link:hover,
        .navbar-other .nav-link:hover,
        .dropdown-item:hover {
          color: #3b82f6 !important;
          background-color: transparent !important;
        }
        .dropdown-menu {
          background-color: white;
          border: none;
          border-radius: 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
        }
        .dropdown-item {
          font-size: 0.9rem;
          padding: 0.25rem 1rem;
        }
        @media (max-width: 991.98px) {
          .menucontainer {
            height: auto;
            padding: 0.5rem;
          }
          .navbar-brand img {
            max-height: 2rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;