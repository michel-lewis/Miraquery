import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import bgImage from '/assets/img/backhero.png'; // Adjust path
// import doodle1 from '/assets/img/svg/doodle1.svg';
// import doodle2 from '/assets/img/svg/doodle2.svg';
import appStoreButton from '/assets/img/photos/button-appstore.svg';
import googlePlayButton from '/assets/img/photos/button-google-play.svg';
import type { sectionProps } from '../types/common';

// Enregistrer le plugin GSAP
gsap.registerPlugin(TextPlugin);

const Hero: React.FC<sectionProps> = ({ id }) => {
  // Références pour les éléments animés avec GSAP
  const queryTextRef = useRef<HTMLDivElement>(null);
  const sqlCodeRef = useRef<HTMLDivElement>(null);
  const jsonResultRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const connectionLineRef = useRef<SVGPathElement>(null);
  const animationContainerRef = useRef<HTMLDivElement>(null);

  // Animation variants pour Framer Motion
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  const slideInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
  };

  const buttonsSlideIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.8 } },
  };

  // Animation GSAP
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Étape 1 : Effet typewriter pour la requête
    tl.to(queryTextRef.current, {
      opacity: 1,
      duration: 2,
      text: "Montre-moi les ventes par région",
      ease: "none",
    });

    // Étape 2 : Transformation en SQL
    tl.to(queryTextRef.current, { opacity: 0, duration: 0.5 }).to(sqlCodeRef.current, {
      opacity: 1,
      duration: 2,
      text: "SELECT region, SUM(sales) FROM orders GROUP BY region;",
      ease: "none",
    });

    // Étape 3 : Ligne de connexion
    tl.to(connectionLineRef.current, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.inOut",
    }, "-=1");

    // Étape 4 : Particules
    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      animationContainerRef.current?.appendChild(particle);
      particles.push(particle);
      tl.to(particle, {
        x: () => Math.random() * 200 - 100,
        y: () => Math.random() * 200 - 100,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, "-=0.5");
    }

    // Étape 5 : Résultats JSON
    tl.to(particles, { opacity: 0, duration: 0.5 })
      .to(sqlCodeRef.current, { opacity: 0, duration: 0.5 })
      .to(jsonResultRef.current, {
        opacity: 1,
        duration: 4,
        text: JSON.stringify(
          [
            { region: "Nord", sales: 5000 },
            { region: "Sud", sales: 3500 },
            { region: "Est", sales: 4000 },
          ],
          null,
          2
        ),
        ease: "none",
      });

    // Étape 6 : Résumé (prolongé à 3 secondes)
    tl.to(jsonResultRef.current, { opacity: 0, duration: 0.5 }).to(summaryRef.current, {
      opacity: 1,
      duration: 4,
      text: "Total des ventes : 12,500 €",
      ease: "none",
    });

    // Étape 7 : Apparition du logo
    tl.to(summaryRef.current, { opacity: 0, duration: 0.5 })
      .to(logoRef.current, { opacity: 1, duration: 1, y: -20 })
      .to(logoRef.current, { opacity: 0, duration: 1, delay: 1 });

    // Nettoyage au démontage
    return () => {
      tl.kill();
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <section
      id={id}
      className="wrapper bg-full bg-overlay bg-overlay-light-600"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container pt-16 pt-md-18 pb-9">
        <div className="row gx-0 gy-10 align-items-start text-center text-lg-start">
          <div className="col-lg-6 col-xxl-5 position-relative">
            <motion.h1
              className="display-1 fs-50 mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Transformez vos données avec{' '}
              <span className="text-gradient gradient-7">Mira AI.</span>
            </motion.h1>
            <motion.p
              className="lead fs-24 lh-sm mb-7"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Mira convertit vos requêtes en langage naturel en commandes SQL ou MongoDB instantanément.
            </motion.p>
            <motion.div
              className="d-flex justify-content-center justify-content-lg-start"
              variants={buttonsSlideIn}
              initial="hidden"
              animate="visible"
            >
              <span>
                <a href="#" className="me-2">
                  <img src={appStoreButton} className="h-11 rounded-xl" alt="" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={googlePlayButton} className="h-11 rounded-xl" alt="" />
                </a>
              </span>
            </motion.div>
          </div>
          <motion.div
            className="col-lg-6 ms-auto mb-n20 mb-xxl-n22"
            variants={slideInDown}
            initial="hidden"
            animate="visible"
          >
            <div
              ref={animationContainerRef}
              className="animation-container"
              style={{ position: 'relative', height: '200px', paddingTop: '20px' }}
            >
              <div
                ref={queryTextRef}
                className="query-text"
                style={{
                  fontSize: '1.5rem',
                  opacity: 0,
                  color: 'var(--bs-secondary)',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 'bold',
                }}
              ></div>
              <div
                ref={sqlCodeRef}
                className="sql-code"
                style={{
                  fontSize: '1.2rem',
                  background: 'var(--bs-neutral)',
                  padding: '10px',
                  borderRadius: '5px',
                  opacity: 0,
                  color: 'var(--bs-accent2)',
                  marginTop: '10px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 'bold',
                }}
              ></div>
              <div
                ref={jsonResultRef}
                className="json-result"
                style={{
                  fontSize: '1.1rem',
                  background: 'var(--bs-neutral)',
                  padding: '10px',
                  borderRadius: '5px',
                  opacity: 0,
                  color: 'var(--bs-accent1)',
                  marginTop: '10px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 'bold',
                  whiteSpace: 'pre-wrap',
                }}
              ></div>
              <div
                ref={summaryRef}
                className="summary"
                style={{
                  fontSize: '1.3rem',
                  opacity: 0,
                  color: 'var(--bs-secondary)',
                  marginTop: '10px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 'bold',
                }}
              ></div>
              <div
                ref={logoRef}
                className="logo"
                style={{
                  fontSize: '2.5rem',
                  opacity: 0,
                  color: 'var(--bs-primary)',
                  marginTop: '10px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 'bold',
                }}
              >
                Mira
              </div>
              <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
                <path
                  ref={connectionLineRef}
                  d="M100,200 Q200,100 300,200"
                  stroke="var(--bs-accent2)"
                  strokeWidth="2"
                  fill="none"
                  className="connection-line"
                  style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="overflow-hidden" style={{ zIndex: 1 }}>
        <div className="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <g fill="currentColor">
              <polygon points="1440 100 0 100 0 85 1440 0 1440 100" />
            </g>
          </svg>
        </div>
      </div>

      {/* Styles intégrés */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
        .animation-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }
        .particle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: var(--bs-accent2);
          border-radius: 50%;
          opacity: 0;
        }
        @media (max-width: 768px) {
          .query-text {
            font-size: 1.2rem !important;
          }
          .sql-code {
            font-size: 1rem !important;
          }
          .json-result {
            font-size: 0.9rem !important;
          }
          .summary {
            font-size: 1.1rem !important;
          }
          .logo {
            font-size: 2rem !important;
          }
          .animation-container {
            height: 150px !important;
            padding-top: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;