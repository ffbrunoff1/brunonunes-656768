import React from 'react';
import { motion } from 'framer-motion';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      className="bg-brand-dark text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <a href="#hero">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753727531596_0.png"
                alt="NTC Brasil Logo"
                className="h-14 w-auto bg-white p-2 rounded-md"
              />
            </a>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-blue transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-blue transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-blue transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Telefone: +55 44 99104-0774</li>
              <li>Email: ffbrunoff@yahoo.com.br</li>
              <li>Endereço: padre lebret 801 g05 bloco 03</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} NTC Brasil. Todos os direitos reservados.</p>
          <p className="mt-2">drenagem com solidez e confiança.</p>
        </div>
      </div>
    </motion.footer>
  );
}
