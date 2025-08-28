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
  const [openItemId, setOpenItemId] = useState<string | null>(null);
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
  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <li className="nav-item dropdown language-select text-uppercase">
      <button className="faq-question" onClick={() => toggleItem(language)}>
        <span>{language.toUpperCase()}</span>
        <svg
          className={`arrow-icon ${openItemId === language ? "rotated" : ""}`}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul
        className={`dropdown-menu ${openItemId === language ? "show" : ""}`}
        data-bs-display="static"
      >
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
                src="/assets/img/miraquery-icon.png"
                srcSet="/assets/img/miraquery-icon.png 2x"
                alt="Logo"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <a href="./index.html" className="navbar-brand">
                <img
                  src="/assets/img/miraquery-icon.png"
                  srcSet="/assets/img/miraquery-icon.png 2x"
                  alt="Logo"
                  style={{ maxHeight: "3rem" }}
                />
              </a>
              <button
                type="button"
                className="btn-close btn-close-dark"
                style={{ marginTop: "-1rem" }}
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
              <div
                className="offcanvas-footer d-lg-none"
                style={{ color: "var(--bs-gray-300)" }}
              >
                <div>
                  <a href="mailto:contact@korva.com" className="link-inverse">
                    {t("offcanvas.contact_info.email")}
                  </a>
                  <br /> {t("offcanvas.contact_info.phone")} <br />
                  <nav className="nav social social-white mt-4">
                    {/* {socialItems.map((social, index) => (
                      <a href={social.url} key={index}>
                        <i className={`uil uil-${social.icon}`}></i>
                      </a>
                    ))} */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <LanguageSelector />

              <li className="nav-item d-lg-none">
                <button
                  className="hamburger offcanvas-nav-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target=".offcanvas-nav"
                  aria-controls="offcanvasNav"
                >
                  <span></span>
                </button>

                {/* <button
                  className="hamburger offcanvas-nav-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-info"
                  aria-controls="offcanvas-info"
                  onClick={() => {
                    alert("clicked");
                  }}
                >
                  <span></span>
                </button> */}
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
                <a href="#key-features">
                  {t("offcanvas.learn_more.key_features")}
                </a>
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
        .offcanvas-footer .link-inverse{
          color: var(--bs-gray-300) !important;
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
          color: #00C4CC !important;
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
            height:3rem;
            padding: 1rem;
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
