import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Code, TrendingUp, Camera, Instagram, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Branding & Identidade Visual',
    description: 'Criamos identidades visuais únicas que comunicam a essência da sua marca.',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estratégias de marketing que geram resultados mensuráveis.',
  },
  {
    icon: Camera,
    title: 'Produção de Conteúdo',
    description: 'Fotos, vídeos e conteúdo que engaja e converte.',
  },
  {
    icon: Instagram,
    title: 'Social Media',
    description: 'Gestão completa das suas redes sociais com estratégia e criatividade.',
  },
];

const ServiceItem = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ x: 8 }}
      className="service-item py-8 group cursor-pointer"
      data-testid={`service-item-${index}`}
    >
      <div className="flex items-start gap-6">
        {/* Number */}
        <span className="text-xs font-mono text-gray-300 group-hover:text-[#FF4500] transition-colors">
          {service.number}
        </span>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <service.icon
              size={24}
              className="text-gray-400 group-hover:text-[#FF4500] transition-colors"
            />
            <h3
              className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#FF4500] transition-colors"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              {service.title}
            </h3>
          </div>
          <p className="text-gray-500 pl-10">{service.description}</p>
        </div>

        {/* Arrow */}
        <motion.div
          className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#FF4500]"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#efefef]"
      ref={sectionRef}
      data-testid="services-section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 tracking-tight"
            style={{ fontFamily: 'Gilroy, sans-serif' }}
          >
            Nossos
            <br />
            <span className="text-[#FF4500]">Serviços</span>
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="divide-y divide-gray-100">
          {services.map((service, index) => (
            <ServiceItem key={service.number} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">
            Não encontrou o que procura? Temos soluções personalizadas para você.
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary px-8 py-4 rounded-full text-base font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="services-cta-btn"
          >
            Solicitar Orçamento
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
