import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUp } from 'lucide-react';
import logo from '../kgo1.png';
import logoBackground from '../logo.png';

const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block' }}
    className={className}
    aria-hidden="true"
  >
    <path d="M3 21l1.6-3.2a9 9 0 1 1 3.4 3.2l-5 0z" />
    <path d="M9 10c0 4 3 6 6 7l1.5-1.5a1 1 0 0 1 1-.2l2 .7" />
  </svg>
);

const footerLinks = {
  services: [
    { name: 'Branding', href: '#services' },
    { name: 'Marketing Digital', href: '#services' },
    { name: 'Social Media', href: '#services' },
    { name: 'Storytelling', href: '#services' },
  ],
  company: [
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
    { name: 'Blog', href: '#' },
  ],
};

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/kgostudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    label: 'Instagram',
  },
  { icon: WhatsAppIcon, href: 'https://wa.me/558585438396', label: 'WhatsApp' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      className="relative bg-[#121212] text-white pt-24 pb-8 overflow-hidden"
      data-testid="footer"
    >
      {/* Massive background logo */}
      <img
        src={logoBackground}
        alt=""
        aria-hidden="true"
        className="footer-massive-logo select-none"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}>
                <img
                  src={logo}
                  alt="KGO"
                  className="h-10 md:h-12 w-auto"
                />
              </a>
              <p className="text-gray-400 mt-4 max-w-sm leading-relaxed">
                Transformamos ideias em experiências digitais impactantes. Sua marca,
                nosso compromisso.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF4500] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <social.icon size={18} className="block shrink-0 translate-y-[0.5px]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4
                className="text-sm font-bold uppercase tracking-wider text-[#FF4500] mb-6"
                style={{ fontFamily: 'Gilroy, sans-serif' }}
              >
                Serviços
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      data-testid={`footer-link-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4
                className="text-sm font-bold uppercase tracking-wider text-[#FF4500] mb-6"
                style={{ fontFamily: 'Gilroy, sans-serif' }}
              >
                Empresa
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      data-testid={`footer-link-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KGO Marketing. Todos os direitos reservados.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-[#FF4500] transition-colors text-sm"
            whileHover={{ y: -2 }}
            data-testid="back-to-top-btn"
          >
            Voltar ao topo
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
