import React, { useEffect, useRef } from 'react';
import doodle1 from '/assets/img/svg/doodle1.svg';
import doodle2 from '/assets/img/svg/doodle2.svg';
import type { sectionProps } from '../types/common';

// Declare VANTA on Window interface to resolve TypeScript error
interface VantaGlobeConfig {
  el: HTMLElement;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  color: number;
  color2: number;
  backgroundColor?: number;
  size?: number;
  spacing?: number;
}

interface VantaEffect {
  destroy: () => void;
}

declare global {
  interface Window {
    VANTA: {
      GLOBE: (config: VantaGlobeConfig) => VantaEffect;
    };
  }
}

const Hero: React.FC<sectionProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Dynamically load three.js and vanta.globe.js scripts
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Initialize Vanta effect after scripts are loaded
    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'),
      loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.globe.min.js'),
    ])
      .then(() => {
        if (sectionRef.current && window.VANTA && window.VANTA.GLOBE) {
          const vantaEffect = window.VANTA.GLOBE({
            el: sectionRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 160.0,
            minWidth: 160.0,
            scale: 1.0, 
            scaleMobile: 1.0,
            color: 0x0056d2, // Deeper blue for high-contrast particles
            color2: 0x00d4b4, // Brighter teal for globe surface
            backgroundColor: 0xf5f6f5, // Soft off-white to match bg-overlay-light-600
            size: 1.3, // Larger particles for visibility
            spacing: 18.0, // Denser particle arrangement
          });
          // Cleanup Vanta effect on unmount
          return () => {
            if (vantaEffect) vantaEffect.destroy();
          };
        }
      })
      .catch((error) => console.error('Failed to load Vanta scripts:', error));

    // Cleanup scripts on unmount
    return () => {
      const scripts = document.querySelectorAll('script[src*="three.min.js"], script[src*="vanta.globe.min.js"]');
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="wrapper image-wrapper bg-full bg-overlay bg-overlay-light-600"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container pt-16 pt-md-18 pb-9">
        <div className="row gx-0 gy-10 align-items-center text-center text-lg-start">
          <div className="col-lg-6 col-xxl-5 position-relative">
            <img
              src={doodle1}
              className="h-9 position-absolute d-none d-lg-block"
              style={{ top: '-9%', left: '-6%' }}
              alt=""
            />
            <img
              src={doodle2}
              className="h-15 position-absolute d-none d-lg-block"
              style={{ bottom: '9%', right: '-22%' }}
              alt=""
            />
            <h1 className="display-1 fs-50 mb-4">
              Transformez vos données avec{' '}
              <span className="text-gradient gradient-7">Mira AI</span>
            </h1>
            <p className="lead fs-24 lh-sm mb-7">
              Mira convertit vos requêtes en langage naturel en commandes SQL ou MongoDB instantanément.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#" className="btn btn-primary me-2">Tester Mira</a>
              <a href="#" className="btn btn-secondary">Parler à un expert</a>
            </div>
          </div>
          <div className="col-lg-6 ms-auto mb-n20 mb-xxl-n22" style={{ marginTop: '-10rem' }}>
            <div className="d-flex align-items-center justify-content-center">
              {/* Empty div to maintain layout; Vanta effect is applied to section */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
