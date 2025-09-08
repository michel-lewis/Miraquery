import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  key: string;
  bg: string;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    key: "coriss_ambady_1",
    bg: "bg-soft-grape",
    photo: "https://i.pravatar.cc/150?img=1",
  },
  {
    key: "cory_zamora",
    bg: "bg-soft-green",
    photo: "https://i.pravatar.cc/150?img=2",
  },
  {
    key: "nikolas_brooten",
    bg: "bg-soft-orange",
    photo: "https://i.pravatar.cc/150?img=3",
  },
  {
    key: "coriss_ambady_2",
    bg: "bg-soft-pink",
    photo: "https://i.pravatar.cc/150?img=4",
  },
  {
    key: "jackie_sanders",
    bg: "bg-soft-blue",
    photo: "https://i.pravatar.cc/150?img=5",
  },
  {
    key: "laura_widerski",
    bg: "bg-soft-yellow",
    photo: "https://i.pravatar.cc/150?img=6",
  },
];

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="wrapper bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center position-relative">
            <img
              src="./src/assets/img/svg/doodle1.svg"
              className="h-9 position-absolute d-none d-lg-block"
              style={{ top: "2%", left: "9%" }}
              alt=""
            />
            <img
              src="./src/assets/img/svg/doodle10.svg"
              className="h-7 position-absolute d-none d-lg-block"
              style={{ top: "-45%", left: "-17%" }}
              alt=""
            />
            <img
              src="./src/assets/img/svg/doodle11.svg"
              className="h-13 position-absolute d-none d-lg-block"
              style={{ top: "-40%", right: "-15%" }}
              alt=""
            />
            <h2 className="fs-16 text-uppercase text-muted mb-3">
              {t("testimonials.subtitle")}
            </h2>
            <h3
              className="display-3 mb-11 px-xl-10 px-xxl-13"
              dangerouslySetInnerHTML={{ __html: t("testimonials.heading") }}
            />
          </div>
        </div>
        <div className="grid mb-12">
          <div className="row isotope gy-6">
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              centeredSlides={true}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
              className="pb-5"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="card h-[800px] shadow-sm border max-md:mx-4 rounded-4 hover-card">
                    <div className="card-body d-flex flex-column">
                      <p className="mb-4">
                        “{t(`testimonials.${testimonial.key}.quote`)}”
                      </p>
                      <div className="d-flex align-items-center border-top pt-3 mt-auto">
                        <img
                          className="rounded-circle me-3"
                          src={testimonial.photo}
                          alt={`${t(
                            `testimonials.${testimonial.key}.name`
                          )}'s avatar`}
                          width="48"
                          height="48"
                        />
                        <div>
                          <h6 className="mb-0 fw-semibold">
                            {t(`testimonials.${testimonial.key}.name`)}
                          </h6>
                          <small className="text-muted">
                            {t(`testimonials.${testimonial.key}.role`)}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
