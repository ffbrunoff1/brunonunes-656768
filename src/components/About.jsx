import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users } from 'lucide-react';

export default function About() {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const features = [
    {
      icon: Award,
      title: 'Qualidade Superior',
      description:
        'Utilizamos os melhores materiais e técnicas para garantir resultados impecáveis e duradouros.',
    },
    {
      icon: CheckCircle,
      title: 'Compromisso com Prazos',
      description:
        'Planejamento rigoroso e execução eficiente para entregar seu projeto no tempo acordado.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description:
        'Profissionais qualificados e experientes dedicados a transformar sua visão em realidade.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-8 border-brand-blue rounded-lg z-0 opacity-20"></div>
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/modern-building-architecture.jpg"
              alt="Arquitetura de prédio moderno"
              className="relative z-10 rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
          <div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Excelência em Cada Detalhe da Construção!
            </motion.h2>
            <motion.p
              className="section-subtitle max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Na NTC Brasil, cada projeto é uma obra de arte. Combinamos
              inovação, tecnologia e paixão pela construção para superar as
              expectativas e entregar valor real aos nossos clientes.
            </motion.p>
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={featureVariants}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-dark">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-brand-gray">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
