import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    url: 'https://images.unsplash.com/photo-1758560936904-4eb0284aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwYWVzdGhldGljfGVufDB8fHx8MTc3MjM3NzI2MHww&ixlib=rb-4.1.0&q=85',
    fallback: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    title: 'Visual & Storytelling',
    category: 'Product Design',
    size: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1749766878223-6ceae855b28b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA8Mzl8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwYWVzdGhldGljfGVufDB8fHx8MTc3MjM3NzI2MHww&ixlib=rb-4.1.0&q=85',
    fallback: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Social Media',
    category: 'Branding',
    size: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1759526997116-c8f4f2431869?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA8Mzl8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwYWVzdGhldGljfGVufDB8fHx8MTc3MjM3NzI2MHww&ixlib=rb-4.1.0&q=85',
    fallback: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    title: 'Content Creator',
    category: 'Packaging',
    size: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1760108232787-40ec40f9a706?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA8Mzl8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwYWVzdGhldGljfGVufDB8fHx8MTc3MjM3NzI2MHww&ixlib=rb-4.1.0&q=85',
    fallback: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    title: 'Direção Criativa',
    category: 'Strategy',
    size: 'col-span-1 md:col-span-2 row-span-1',
  },
];

const PortfolioCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  const [imgSrc, setImgSrc] = React.useState(item.url);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.01 }}
      className={`portfolio-card ${item.size} bg-gray-100 min-h-[200px] md:min-h-[250px]`}
      data-testid={`portfolio-card-${index}`}
    >
      <img
        src={imgSrc}
        alt={item.title}
        className="w-full h-full object-cover"
        onError={() => setImgSrc(item.fallback)}
      />
      <div className="card-content">
        <span className="text-xs uppercase tracking-widest text-[#FF4500] font-medium">
          {item.category}
        </span>
        <h3
          className="text-xl md:text-2xl font-bold text-white mt-2"
          style={{ fontFamily: 'Gilroy, sans-serif' }}
        >
          {item.title}
        </h3>
        <motion.button
          className="mt-4 inline-flex items-center gap-2 text-white text-sm font-medium"
          whileHover={{ x: 5 }}
        >
          Ver Projeto <ExternalLink size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-[#efefef]"
      ref={sectionRef}
      data-testid="portfolio-section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 tracking-tight"
              style={{ fontFamily: 'Gilroy, sans-serif' }}
            >
              Portfólio
              <br />
              <span className="text-[#FF4500]">Selecionado</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 max-w-md mt-6 md:mt-0"
          >
            Uma seleção dos nossos melhores trabalhos. Cada trabalho é uma história de
            sucesso.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          {/*<motion.button
            className="btn-primary px-10 py-4 rounded-full text-base font-semibold inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="portfolio-view-all-btn"
          >
            Ver Todos os Projetos
            <ExternalLink size={18} />
          </motion.button>*/}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
