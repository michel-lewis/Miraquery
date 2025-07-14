import React, { useState, useEffect, type CSSProperties } from 'react';
import { motion } from 'framer-motion';
// import bgImage from '/assets/img/photos/bg23.png'; // Adjust path based on your project structure
import doodle1 from '/assets/img/svg/doodle1.svg';
import doodle2 from '/assets/img/svg/doodle2.svg';
// import devicesImage from '/assets/img/photos/devices3.png';
// import devicesImage2x from '/assets/img/photos/devices3@2x.png';
import type { sectionProps } from '../types/common';

interface CustomCSSProperties extends CSSProperties {
  '--n'?: number;
  '--l'?: string;
  '--t'?: string;
  '--i'?: number;
  '--j'?: number;
}

const Hero: React.FC<sectionProps> = ({id}) => {
  // Animation variants for fade-in
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  // Animation variants for slide-in-down
  const slideInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
  };

  // Animation variants for buttons
  const buttonsSlideIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.8 } },
  };

  const n = 5;
  const cubeCount = n * n;
  const terms = ['SQL', 'PostgreSQL', 'NoSQL', 'MongoDB', 'MySQL', 'Redis', 'MariaDB', 'Oracle', 'SQLite', 'Cassandra', 'Neo4j', 'Elasticsearch', 'Firebase', 'DynamoDB', 'CouchDB', 'Realm', 'InfluxDB', 'HBase', 'ArangoDB', 'RavenDB', 'Couchbase', 'OrientDB', 'Aerospike', 'BoltDB', 'LevelDB'];

  const [animatedCubes, setAnimatedCubes] = useState<number[]>([]);

  useEffect(() => {
    const selectRandom = () => {
      let indices = Array.from({ length: cubeCount }, (_, i) => i);
      indices = indices.sort(() => Math.random() - 0.5);
      setAnimatedCubes(indices.slice(0, 3));
    };

    selectRandom();
    const interval = setInterval(selectRandom, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id={id}
      className="wrapper image-wrapper bg-full bg-overlay bg-overlay-light-600"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container pt-16 pt-md-18 pb-9">
        <div className="row gx-0 gy-10 align-items-center text-center text-lg-start">
          <div className="col-lg-6 col-xxl-5 position-relative">
            <motion.img
              src={doodle1}
              className="h-9 position-absolute d-none d-lg-block"
              style={{ top: '-9%', left: '-6%' }}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3 }} // Replaces data-cue="fadeIn" data-delay="3000"
            />
            <motion.img
              src={doodle2}
              className="h-15 position-absolute d-none d-lg-block"
              style={{ bottom: '9%', right: '-22%' }}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3 }} // Replaces data-cue="fadeIn" data-delay="3000"
            />
            <motion.h1
              className="display-1 fs-50 mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Transformez vos données avec{' '}
              <span className="text-gradient gradient-7">Mira AI</span>
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
              <a href="#" className="btn btn-primary me-2">Tester Mira</a>
              <a href="#" className="btn btn-secondary">Parler à un expert</a>
            </motion.div>
          </div>
          <motion.div
            className="col-lg-6 ms-auto mb-n20 mb-xxl-n22"
            style={{ marginTop: '-10rem' }}
            variants={slideInDown}
            initial="hidden"
            animate="visible"
          >
            <div className="d-flex align-items-center justify-content-center">
              <div className="hero-animation">
                <style>{`
                  .hero-animation .grid {
                    display: grid;
                    grid-template-columns: repeat(var(--n), var(--l));
                    grid-gap: .5em;
                    place-self: center;
                    transform: rotateX(55deg) rotate(45deg);
                    transform-style: preserve-3d;
                  }
                  .hero-animation .cube {
                    aspect-ratio: 1;
                    transform-origin: 50% 50% calc(-1 * var(--l));
                    background: #f0f0f0;
                    position: relative;
                    transform-style: preserve-3d;
                    transform: scale3d(1, 1, 0);
                    border: 1px solid #ddd;
                  }
                  .hero-animation .cube.animated {
                    background: #f0f8ff;
                    border-radius: 10;
                    animation: ani 6s ease-in-out forwards;
                  }
                  .hero-animation .cube::before,
                  .hero-animation .cube::after {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    content: attr(data-text);
                    --ii: 0;
                    --jj: calc(1 - var(--ii));
                    transform-origin: calc(var(--jj) * 50%) calc(var(--ii) * 50%);
                    transform: translate(calc(var(--ii) * 100%), calc(var(--jj) * 100%)) rotate3d(var(--jj), var(--ii), 0, calc((2 * var(--ii) - 1) * 90deg));
                    background: #e0e0e0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #333;
                    font-size: 0.6em;
                    font-weight: bold;
                  }
                  .hero-animation .cube.animated::before,
                  .hero-animation .cube.animated::after {
                    background: color-mix(in hsl, #007bff calc(var(--ii) * 100%), #add8e6);
                    color: #fff;
                  }
                  .hero-animation .cube::after {
                    --ii: 1;
                  }
                  @keyframes ani {
                    0% {
                      transform: scale3d(1, 1, 0);
                    }
                    10% {
                      transform: scale3d(1, 1, 1.2);
                    }
                    80% {
                      transform: scale3d(1, 1, 1.2);
                    }
                    100% {
                      transform: scale3d(1, 1, 0);
                    }
                  }
                `}</style>
                <div className="grid" style={{ '--n': n, '--l': '4.5em', '--t': '6s' } as CustomCSSProperties}>
                  {Array.from({ length: cubeCount }).map((_, index) => {
                    const i = index % n;
                    const j = Math.floor(index / n);
                    const isAnimated = animatedCubes.includes(index);
                    const order = isAnimated ? animatedCubes.indexOf(index) : -1;
                    const delay = order * 2;
                    const animationStyle = isAnimated ? { animationDelay: `${delay}s` } : {};
                    const className = `cube ${isAnimated ? 'animated' : ''}`;
                    const term = terms[index % terms.length];
                    return <div key={index} className={className} style={{ '--i': i, '--j': j, ...animationStyle } as CustomCSSProperties} data-text={term} />;
                  })}
                </div>
              </div>
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
    </section>
  );
};

export default Hero;