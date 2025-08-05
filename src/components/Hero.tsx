import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const vantaEffectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    // Dynamically load three.js and vanta.globe.js scripts sequentially
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

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
      .then(() => loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.globe.min.js'))
      .then(() => {
        if (sectionRef.current && window.VANTA && window.VANTA.GLOBE) {
          vantaEffectRef.current = window.VANTA.GLOBE({
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
            backgroundColor: 0xe3e3e3, // Soft off-white to match bg-overlay-light-600
            size: 1.3, // Larger particles for visibility
            spacing: 18.0, // Denser particle arrangement
          });
        }
      })
      .catch((error) => console.error('Failed to load Vanta scripts:', error));

    // Cleanup: Destroy Vanta effect and remove scripts
    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
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
          <div className="col-lg-6 col-xxl-5 position-relative text-container">
            <img
              src={doodle1}
              className="h-9 position-absolute d-none d-lg-block"
              style={{ top: '-9%', left: '-6%' }}
              alt={t('hero.doodle1_alt', 'Doodle 1')}
            />
            <img
              src={doodle2}
              className="h-15 position-absolute d-none d-lg-block"
              style={{ bottom: '9%', right: '-22%' }}
              alt={t('hero.doodle2_alt', 'Doodle 2')}
            />
            <h1
              className="display-1 fs-50 mb-4 mt-9"
              dangerouslySetInnerHTML={{ __html: t('hero.heading') }}
            />
            <p className="lead fs-17 lh-sm mb-7 mt-6">{t('hero.lead')}</p>
            <div className="d-flex justify-content-center justify-content-lg-start button-container">
              <a href="#contact" className="btn btn-primary me-2">{t('hero.button_test_mira')}</a>
              <a href="#contact" className="btn btn-secondary">{t('hero.button_talk_expert')}</a>
            </div>
          </div>
          <div className="col-lg-6 ms-auto mb-n20 mb-xxl-n22 vanta-container" style={{ marginTop: '-10rem' }}>
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