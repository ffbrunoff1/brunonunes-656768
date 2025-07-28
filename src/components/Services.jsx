import React from 'react';
import { motion } from 'framer-motion';
import { Building, DraftingCompass, Wrench, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: DraftingCompass,
      title: 'Planejamento e Gestão de Obras',
      description:
        'Coordenação completa do seu projeto, desde a viabilidade até a entrega, garantindo eficiência e controle de custos.',
    },
    {
      icon: Building,
      title: 'Construções Residenciais e Comerciais',
      description:
        'Executamos construções de alto padrão, unindo design inovador com funcionalidade e segurança estrutural.',
    },
    {
      icon: Wrench,
      title: 'Reformas e Ampliações',
      description:
        'Modernizamos e otimizamos espaços, realizando reformas que valorizam seu imóvel e melhoram sua qualidade de vida.',
    },
    {
      icon: ShieldCheck,
      title: 'Consultoria e Laudos Técnicos',
      description:
        'Oferecemos suporte técnico especializado para garantir a conformidade e a segurança de sua edificação.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-brand-light">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nossas Soluções em Construção</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender todas as
            fases do seu projeto com a máxima qualidade e profissionalismo.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col text-center items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={cardVariants}
            >
              <div className="bg-brand-blue text-white rounded-full p-4 mb-6 inline-block">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {service.title}
              </h3>
              <p className="text-brand-gray flex-grow">{service.description}</p>
              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="font-semibold text-brand-blue hover:underline"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
