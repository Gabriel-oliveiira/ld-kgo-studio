import React from 'react';
import { motion } from 'framer-motion';
import logoFundo from '../logo_fundo.png';

const backgroundLogos = [
  { top: '-6%', left: '-8%', rotate: '-18deg', scale: 0.95, opacity: 0.18 },
  { top: '2%', left: '22%', rotate: '12deg', scale: 0.85, opacity: 0.16 },
  { top: '-4%', left: '48%', rotate: '-10deg', scale: 1, opacity: 0.2 },
  { top: '4%', left: '74%', rotate: '20deg', scale: 0.9, opacity: 0.17 },
  { top: '-2%', left: '92%', rotate: '-15deg', scale: 0.8, opacity: 0.15 },
  { top: '22%', left: '6%', rotate: '8deg', scale: 0.9, opacity: 0.16 },
  { top: '26%', left: '34%', rotate: '-22deg', scale: 1.05, opacity: 0.19 },
  { top: '20%', left: '58%', rotate: '14deg', scale: 0.88, opacity: 0.16 },
  { top: '28%', left: '82%', rotate: '-8deg', scale: 0.96, opacity: 0.18 },
  { top: '44%', left: '-4%', rotate: '16deg', scale: 0.92, opacity: 0.17 },
  { top: '48%', left: '18%', rotate: '-14deg', scale: 1.1, opacity: 0.2 },
  { top: '42%', left: '44%', rotate: '6deg', scale: 0.86, opacity: 0.16 },
  { top: '50%', left: '68%', rotate: '-20deg', scale: 1.02, opacity: 0.19 },
  { top: '46%', left: '90%', rotate: '10deg', scale: 0.84, opacity: 0.15 },
  { top: '70%', left: '8%', rotate: '-9deg', scale: 0.9, opacity: 0.16 },
  { top: '74%', left: '30%', rotate: '18deg', scale: 1.04, opacity: 0.19 },
  { top: '68%', left: '54%', rotate: '-16deg', scale: 0.9, opacity: 0.16 },
  { top: '76%', left: '78%', rotate: '12deg', scale: 0.98, opacity: 0.18 },
  { top: '90%', left: '2%', rotate: '-12deg', scale: 0.86, opacity: 0.15 },
  { top: '92%', left: '40%', rotate: '16deg', scale: 0.95, opacity: 0.17 },
  { top: '88%', left: '66%', rotate: '-7deg', scale: 0.92, opacity: 0.16 },
  { top: '94%', left: '88%', rotate: '22deg', scale: 0.84, opacity: 0.15 },
];

const mobileBackgroundLogos = [
  { rotate: '-18deg', scale: 0.95, opacity: 0.16 },
  { rotate: '12deg', scale: 0.85, opacity: 0.14 },
  { rotate: '-10deg', scale: 1, opacity: 0.17 },
  { rotate: '20deg', scale: 0.9, opacity: 0.15 },
  { rotate: '-15deg', scale: 0.8, opacity: 0.13 },
  { rotate: '8deg', scale: 0.9, opacity: 0.14 },
  { rotate: '-22deg', scale: 1.05, opacity: 0.17 },
  { rotate: '14deg', scale: 0.88, opacity: 0.14 },
  { rotate: '-8deg', scale: 0.96, opacity: 0.15 },
  { rotate: '16deg', scale: 0.92, opacity: 0.14 },
  { rotate: '-14deg', scale: 1.1, opacity: 0.17 },
  { rotate: '6deg', scale: 0.86, opacity: 0.14 },
];

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden md:hidden grid grid-cols-3 gap-1 p-2">
        {mobileBackgroundLogos.map((item, index) => (
          <div key={index} className="flex items-center justify-center overflow-hidden">
            <motion.img
              src={logoFundo}
              alt=""
              aria-hidden="true"
              className="select-none w-[82%] max-w-[90px]"
              animate={{
                y: [0, index % 2 === 0 ? -4 : 4, 0],
                x: [0, index % 2 === 0 ? 2 : -2, 0],
              }}
              transition={{
                duration: 4 + (index % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.08,
              }}
              style={{
                transform: `rotate(${item.rotate}) scale(${item.scale})`,
                opacity: item.opacity,
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {backgroundLogos.map((item, index) => (
          <motion.img
            key={index}
            src={logoFundo}
            alt=""
            aria-hidden="true"
            className="absolute select-none"
            animate={{
              y: [0, index % 2 === 0 ? -10 : 10, 0],
              x: [0, index % 3 === 0 ? 6 : -6, 0],
            }}
            transition={{
              duration: 7 + (index % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.12,
            }}
            style={{
              top: item.top,
              left: item.left,
              width: '220px',
              transform: `rotate(${item.rotate}) scale(${item.scale})`,
              opacity: item.opacity,
            }}
          />
        ))}
      </div>
      <div className="container-custom relative z-10">
        <div className="flex justify-center items-center min-h-[70vh]">
          <motion.div
            className="text-center max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] text-gray-900 mb-6"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              CUIDAMOS DA SUA
              <br />
              <span className="text-[#FF4500]">MARCA!</span>
              <br />
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 max-w-md mx-auto mb-8 leading-relaxed"
            >
              Transformamos ideias em experiências digitais impactantes.
              Estratégia, design e resultados que impulsionam o seu negócio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                onClick={scrollToPortfolio}
                className="btn-primary px-8 py-4 rounded-full text-base font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="hero-portfolio-btn"
              >
                Ver Portfólio
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="btn-secondary px-8 py-4 rounded-full text-base font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="hero-contact-btn"
              >
                Fale Conosco
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 mt-12"
            >
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
