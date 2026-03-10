import React from 'react';
import { motion } from 'framer-motion';

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
