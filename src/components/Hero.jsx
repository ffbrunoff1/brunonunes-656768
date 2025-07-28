import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HardHat } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative bg-white min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-brand-blue opacity-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
      ></div>
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-semibold mb-4"
            >
              <HardHat className="w-4 h-4 mr-2" />
              Excelência em Construção
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight"
            >
              Construindo o Futuro com{' '}
              <span className="text-brand-blue">Qualidade</span> e{' '}
              <span className="text-brand-blue">Inovação</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-brand-gray max-w-xl mx-auto md:mx-0"
            >
              Transformamos suas ideias em projetos sólidos e duradouros. Da
              concepção à entrega, nosso compromisso é com a excelência em cada
              detalhe.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10">
              <a href="#contact" className="btn btn-primary group">
                Transforme seu Projeto em Realidade
                <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'backOut' }}
          >
            <div className="relative w-full h-full">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-blue rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-200 rounded-lg transform rotate-12"></div>
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-worker.png"
                alt="Trabalhador da construção civil com capacete"
                className="relative z-10 w-full h-auto max-w-md mx-auto object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
