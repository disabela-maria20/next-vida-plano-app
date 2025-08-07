/* eslint-disable no-undef */
'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import text from '@/texts/index.json';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuReady, setIsMenuReady] = useState(false); // Para animar os itens com delay depois do slide

  const variantsList = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    closed: {},
  };

  const variantsItem = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Ativa a animação dos itens depois que o container entrou
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsMenuReady(true), 300); // tempo da animação do motion.div
      return () => clearTimeout(timer);
    } else {
      setIsMenuReady(false);
    }
  }, [isOpen]);

  return (
    <header>
      <nav className="bg-blue-green">
        <div className="container m-auto px-4">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center text-xl font-bold">
              <img src={text.menu.imgLogo} alt="Logo" />
            </Link>
            <ul className="hidden lg:flex md:items-center space-x-6">
              {text.menu.nav.map((data) => (
                <motion.li
                  key={data.id}
                  whileHover={{ scale: 1.05, fontWeight: 'bold' }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    href={data.link}
                    className="uppercase text-white text-sm"
                  >
                    {data.nome}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="hidden lg:flex flex-col items-center text-white">
              <span>{text.menu.contrateAgora}</span>
              <div className="flex gap-3.5 transition-colors">
                <a
                  href="/"
                  className="bg-cold-green transition hover:bg-cold-green-dark py-1.5 px-5 rounded-4xl duration-300 ease-in-out hover:scale-110"
                >
                  {text.menu.cta1}
                </a>
                <a
                  href="/"
                  className="bg-pink transition hover:bg-pink-dark py-1.5 px-5 rounded-4xl duration-300 ease-in-out hover:scale-110"
                >
                  {text.menu.cta2}
                </a>
              </div>
            </div>
            {/* Botão hamburguer */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none"
                aria-label="Abrir menu"
              >
                {/* Linha 1 */}
                <motion.span
                  initial={false}
                  animate={isOpen ? 'open' : 'closed'}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="block w-8 h-0.5 bg-white rounded-sm origin-center mb-1"
                  transition={{ duration: 0.3 }}
                />

                {/* Linha 2 */}
                <motion.span
                  initial={false}
                  animate={isOpen ? 'open' : 'closed'}
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="block w-8 h-0.5 bg-white rounded-sm origin-center mb-1"
                  transition={{ duration: 0.2 }}
                />

                {/* Linha 3 */}
                <motion.span
                  initial={false}
                  animate={isOpen ? 'open' : 'closed'}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="block w-8 h-0.5 bg-white rounded-sm origin-center"
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, transform: 'translate(-100%)' }}
            animate={{ opacity: 1, transform: 'translate(0%)' }}
            exit={{ opacity: 0, transform: 'translate(-100%)' }}
            transition={{ duration: 0.3 }}
            className="lg:hidden px-4 pb-4 pt-2 space-y-4 bg-blue-green absolute w-full z-10"
          >
            <motion.ul
              className="flex flex-col items-center space-y-2"
              initial="closed"
              animate={isMenuReady ? 'open' : 'closed'}
              exit="closed"
              variants={variantsList}
            >
              {text.menu.nav.map((data) => (
                <motion.li
                  key={data.id}
                  variants={variantsItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={data.link}
                    className="uppercase text-white text-sm"
                  >
                    {data.nome}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="flex flex-col items-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isMenuReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.4 }}
            >
              <span>{text.menu.contrateAgora}</span>
              <div className="flex gap-3.5 mt-2">
                <a
                  href="/"
                  className="bg-cold-green transition hover:bg-cold-green-dark py-1.5 px-5 rounded-4xl duration-300 ease-in-out hover:scale-110"
                >
                  {text.menu.cta1}
                </a>
                <a
                  href="/"
                  className="bg-pink transition hover:bg-pink-dark py-1.5 px-5 rounded-4xl duration-300 ease-in-out hover:scale-110"
                >
                  {text.menu.cta2}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
