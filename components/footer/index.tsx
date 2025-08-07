'use client';
import React from 'react';
import text from '@/texts/index.json';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8  md:grid-cols-12">
          <ul className="col-span-3 flex flex-col gap-3">
            {text.footer.list1.map((data) => (
              <motion.li
                key={data.id}
                whileHover={{ scale: 1.05, fontWeight: 'bold' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={data.link}
                  className="text-white capitalize text-sm lg:text-base"
                >
                  {data.nome}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="col-span-2 ">
            <ul className="flex flex-col gap-3 mb-2.5">
              {text.footer.list2.map((data) => (
                <motion.li
                  key={data.id}
                  whileHover={{ scale: 1.05, fontWeight: 'bold' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={data.link}
                    className="text-white capitalize text-sm lg:text-base"
                  >
                    {data.nome}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <ul className="flex gap-2.5">
              <motion.li
                whileHover={{ scale: 1.05, fontWeight: 'bold' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-2 rounded-3xl"
              >
                <a
                  href="https://www.facebook.com/VidaPlano/"
                  target="_blank"
                  className="text-pink"
                  title="Siga em Facebook"
                >
                  <FaFacebookF />
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, fontWeight: 'bold' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-2 rounded-3xl"
              >
                <a
                  href="https://www.instagram.com/vida.plano/"
                  target="_blank"
                  className="text-pink"
                  title="Siga em instagram"
                >
                  <FaInstagram />
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, fontWeight: 'bold' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-2 rounded-3xl"
              >
                <a
                  href="https://www.linkedin.com/company/vida-plano-assist%C3%AAncia-familiar/?originalSubdomain=br"
                  target="_blank"
                  className="text-pink"
                >
                  <FaLinkedinIn />
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, fontWeight: 'bold' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-2 rounded-3xl"
              >
                <a
                  href="https://wa.me/551636055582"
                  target="_blank"
                  className="text-pink"
                  title="Siga em Whatsapp"
                >
                  <FaWhatsapp />
                </a>
              </motion.li>
            </ul>
          </div>

          <div className="col-span-7">
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-4">
              <img
                src={text.footer.imgFooter}
                alt="Vida Plano"
                className="w-32 lg:w-52"
              />
              <span
                className="inline-block relative bg-white text-cold-green font-bold text-base px-7 py-2 rounded-full mt-12 shadow-md text-center
                after:absolute after:w-4 after:bg-white after:h-4 after:-top-12 after:rounded-full after:-left-2
                before:absolute before:w-6 before:bg-white before:h-6 before:-top-7 before:rounded-full before:-left-5
               "
              >
                CONFIA, FAZ <br /> O VIDA PLANO!
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
