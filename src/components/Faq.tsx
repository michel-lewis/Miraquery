import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import bgImage from "/assets/img/photos/bg23.png";
import type { sectionProps } from "../types/common";

const FAQ: React.FC<sectionProps> = ({ id }) => {
  const { t } = useTranslation();
  const rawFaqs = t("faq.items", { returnObjects: true }) as {
    question: string;
    answer: string;
  }[];

  const faqs = rawFaqs.map((item, index) => ({
    id: `faq-${index}`,
    ...item,
  }));

  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  const renderFaqCard = (faq: {
    id: string;
    question: string;
    answer: string;
  }) => {
    const isOpen = openItemId === faq.id;

    return (
      <div className={`faq-card ${isOpen ? "active" : ""}`} key={faq.id}>
        <button className="faq-question" onClick={() => toggleItem(faq.id)}>
          <span>{faq.question}</span>
          <svg
            className={`arrow-icon ${isOpen ? "rotated" : ""}`}
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
        <div
          className="faq-answer"
          style={{ maxHeight: isOpen ? "200px" : "0" }}
        >
          <p>{faq.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <section
      id={id}
      className="wrapper image-wrapper bg-full bg-overlay bg-overlay-light-600"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "var(--bs-light-bg)",
      }}
    >
      <div
        className="container py-14 pt-md-16 pb-md-17 position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="row">
          <div className="col-xl-11 col-xxl-10 mx-auto">
            <h2 className="fs-16 text-uppercase text-secondary mb-3 text-center">
              {t("faq.subtitle")}
            </h2>
            <h3
              className="display-3 mb-11 px-lg-8 px-xl-11 text-center"
              dangerouslySetInnerHTML={{ __html: t("faq.heading") }}
            />
            <div className="row">
              <div className="col-lg-6 mb-0">
                {faqs.slice(0, 5).map(renderFaqCard)}
              </div>
              <div className="col-lg-6">{faqs.slice(5).map(renderFaqCard)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
