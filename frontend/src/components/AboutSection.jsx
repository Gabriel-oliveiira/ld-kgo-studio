import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Target, Rocket } from 'lucide-react';
import kamileImage from '../kamile.jpg';

const values = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Cada projeto é pensado para gerar impacto real no seu negócio.',
  },
  {
    icon: Award,
    title: 'Excelência',
    description: 'Entregamos qualidade em cada detalhe, do início ao fim.',
  },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#efefef]"
      ref={sectionRef}
      data-testid="about-section"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 tracking-tight"
                style={{ fontFamily: 'Gilroy, sans-serif' }}
              >
                Mais que uma
                <br />
                <span className="text-[#FF4500]">Agência</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 text-base md:text-lg leading-relaxed mt-8"
            >
              A KGO nasceu da paixão por criar experiências digitais que realmente
              fazem a diferença. Somos uma equipe de criativos, estrategistas
              unidos por um objetivo: transformar a presença digital
              dos nossos clientes.
            </motion.p>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 mt-12"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group"
                  data-testid={`value-${index}`}
                >
                  <value.icon
                    size={28}
                    className="text-[#FF4500] mb-3 group-hover:scale-110 transition-transform"
                  />
                  <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gilroy, sans-serif' }}>
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={kamileImage}
                  alt="KGO Team"
                  className="w-full h-[430px] md:h-[560px] object-cover object-[center_12%]"
                  data-testid="about-image"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
