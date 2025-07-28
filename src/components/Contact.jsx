import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Phone,
  MapPin,
  Loader,
  Check,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userEmail: 'ffbrunoff@yahoo.com.br',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Estamos prontos para ouvir sobre seu projeto. Preencha o formulário
            ou utilize nossos canais de atendimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-dark">
              Fale Conosco
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brand-gray mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-light rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-gray mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-light rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-gray mb-1"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-light rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin" />
                  ) : (
                    <>
                      <Send className="mr-2" /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center text-green-600 bg-green-100 p-3 rounded-lg">
                  <Check className="mr-2" /> Mensagem enviada com sucesso!
                </div>
              )}
              {submitError && (
                <div className="flex items-center text-red-600 bg-red-100 p-3 rounded-lg">
                  <AlertTriangle className="mr-2" /> Erro: {submitError}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-dark">
              Informações de Contato
            </h3>
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-brand-blue">
                <Phone />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Telefone</h4>
                <p className="text-brand-gray">+55 44 99104-0774</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-brand-blue">
                <MapPin />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Endereço</h4>
                <p className="text-brand-gray">padre lebret 801 g05 bloco 03</p>
              </div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.500196885375!2d-52.40003068502384!3d-23.47849498472418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed29b0a7c4a161%3A0x63a3d548b812f86!2sR.%20Padre%20Lebret%2C%20801%20-%20Zona%2008%2C%20Maring%C3%A1%20-%20PR%2C%2087050-700!5e0!3m2!1spt-BR!2sbr!4v1678886543210!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da NTC Brasil"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
