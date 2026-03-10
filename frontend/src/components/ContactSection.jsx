import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { Input } from './ui/input';
import { Toaster, toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 85 8543-8396',
    href: 'tel:+558585438396',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contato@kgo.com.br',
    href: 'mailto:contato@kgo.com.br',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Fortaleza, CE',
    href: '#',
  },
];

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSubmitted(true);
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#efefef]"
      ref={sectionRef}
      data-testid="contact-section"
    >
      <Toaster position="top-right" richColors />
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
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
                Vamos criar
                <br />
                <span className="text-[#FF4500]">juntos?</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 text-base md:text-lg leading-relaxed mt-8 max-w-md"
            >
              Tem um projeto em mente? Queremos ouvir sobre ele. Preencha o
              formulário ou entre em contato diretamente.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                  data-testid={`contact-info-${index}`}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#FF4500] transition-colors">
                    <info.icon
                      size={20}
                      className="block shrink-0 translate-y-[0.5px] text-[#FF4500] group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </div>
                    <div className="font-medium text-gray-900 group-hover:text-[#FF4500] transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-sm shadow-sm"
              data-testid="contact-form"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Gilroy, sans-serif' }}
                  >
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-500">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="form-input w-full px-4 py-3 rounded-sm focus:ring-[#FF4500] focus:border-[#FF4500]"
                        data-testid="contact-name-input"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          className="form-input w-full px-4 py-3 rounded-sm focus:ring-[#FF4500] focus:border-[#FF4500]"
                          data-testid="contact-email-input"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Telefone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                          className="form-input w-full px-4 py-3 rounded-sm focus:ring-[#FF4500] focus:border-[#FF4500]"
                          data-testid="contact-phone-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-nos sobre seu projeto..."
                        className="form-input w-full px-4 py-3 rounded-sm resize-none border border-gray-200 focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] outline-none transition-all"
                        data-testid="contact-message-input"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full mt-8 px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-3 disabled:opacity-70"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    data-testid="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
