'use client';

import React from 'react';
import { Footer, Header } from '@/components';
import text from '@/texts/index.json';
import useIsMobile from '@/hooks/useIsMobile/isMobile';
import { motion } from 'framer-motion';
const Home = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Header />
      {/* Hero */}
      <section
        id=""
        style={{ backgroundImage: `url('./img/bg-hero.png')` }}
        className="h-dvh relative bg-cover"
      >
        <div className="container m-auto px-4">
          <div className="flex flex-col justify-between content-between h-dvh pt-7">
            <div className="flex justify-end">
              <img src={text.hero.imgBg} className="max-w-80" alt="" />
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 ">
              <div>
                <h1 className="relative">
                  <span className="text-white text-[250px] italic absolute -top-[70%] -left-1">
                    “
                  </span>
                  <br />
                  <span className="text-white text-6xl italic font-extrabold max-w-[352px] block">
                    Tô de boa, tô com APP Vida Plano.”
                  </span>
                </h1>
              </div>
              <div className="flex flex-col items-end gap-9">
                <h2
                  className="inline-block relative text-blue-green max-w-3xs text-3xl md:text-3xl px-7 py-2 mt-12 uppercase font-black
                    after:absolute after:w-5 after:bg-blue-green after:h-5 after:-top-11 after:rounded-full after:left-8
                    before:absolute before:w-10 before:bg-blue-green before:h-10 before:-top-7 before:rounded-full before:-left-5
                  "
                >
                  {text.hero.titulo2}
                </h2>
                <h2
                  className="text-blue-green text-3xl md:text-3xl max-w-[480px]"
                  dangerouslySetInnerHTML={{ __html: text.hero.titulo3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Especialidades */}
      <section>
        <div className="grid gap-10 lg:gap-0  md:grid-cols-12 2xl:items-center">
          <div className="hidden 2xl:block 2xl:col-span-3">
            <img
              src={text.especialidades.imgBg}
              alt=""
              className="rounded-br-4xl object-cover w-full 2xl:max-h-dvh"
            />
          </div>
          <div className="col-span-10 md:col-span-6 2xl:col-span-3 lg:p-11 p-4">
            <img
              src={text.especialidades.imgLogo}
              alt=""
              className="m-auto mt-10"
            />
            <p className="text-blue-green text-xl md:text-2xl text-center mt-4 mx-8">
              {text.especialidades.texto1}
            </p>
            <p className="text-blue-green text-xl md:text-3xl text-center mt-4 mx-10 uppercase">
              {text.especialidades.texto2}
              <strong className="block text-6xl lg:text-9xl">
                {text.especialidades.valor}
              </strong>
            </p>
            <div className="flex justify-center flex-col items-center text-cold-green font-bold text-xl lg:text-2xl mt-3 mb-7">
              <h3 className="relative top-3.5">Telemedicina</h3>
              <h3 className="flex items-center gap-2">
                <span className="text-5xl">+</span>
                Televeterinária
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-3.5">
              {text.especialidades.itens.map((data) => (
                <li
                  key={data.id}
                  className="bg-cold-green text-white text-center rounded-3xl text-base lg:text-xl font-semibold py-1"
                >
                  {data.nome}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-10 md:col-span-6 relative">
            <img
              src={text.especialidades.imgBg2}
              alt=""
              className="rounded-bl-4xl md:h-full 2xl:h-dvh object-cover w-full"
            />
            <div className="flex w-fit rounded-full overflow-hidden shadow absolute bottom-5 left-5 bg-white">
              <button className="px-4 py-2 text-xl lg:text-2xl font-semibold text-cold-green-dark bg-cold-green rounded-r-full">
                {text.especialidades.cta1}
              </button>
              <button className="px-4 py-2 font-semibold text-xl lg:text-2xl text-cold-green bg-white">
                {text.especialidades.cta1}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Notificaçoes */}
      <section className="py-10">
        <div className="container m-auto px-4">
          <div className="grid  lg:gap-9  md:grid-cols-4 items-center bg-blue-green text-white rounded-3xl max-w-5xl m-auto">
            <div className="py-7">
              <p className="text-2xl md:text-xl px-7 text-center">
                Pronto Atendimento online
                <strong className="text-4xl md:text-3xl ">&nbsp;24h</strong>
              </p>
            </div>
            <div className="py-7">
              <p className="text-2xl md:text-xl px-7 text-center">
                Acesso ilimitado à plataforma
                <strong className="text-4xl md:text-3xl block">
                  Vida Plano
                </strong>
              </p>
            </div>
            <div className="py-7">
              <p className="text-2xl md:text-xl px-7 text-center">
                Atendimento
                <strong className="text-4xl md:text-3xl block"> 100% </strong>
                Seguro e Rápido
              </p>
            </div>
            <div className="py-7">
              <p className="text-2xl md:text-xl px-7 text-center">
                Atendimento em
                <strong className="text-4xl md:text-3xl block">
                  até 10 min
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Benefícios */}
      <section
        style={{
          backgroundImage: `url(${text.beneficios.bg})`,
          backgroundPositionX: isMobile ? 'initial' : '120%',
          backgroundPositionY: isMobile ? 'initial' : '-8%',
        }}
        className="bg-no-repeat py-9"
      >
        <div className="container m-auto px-4">
          <div className="grid gap-8 md:grid-cols-7 items-center">
            <div className="md:col-span-3">
              <img
                src={text.beneficios.imgItem}
                alt=""
                className="rounded-3xl "
              />
            </div>
            <div className="md:col-span-4">
              <h2 className="text-blue-green uppercase text-2xl text-center  pb-9 ">
                {text.beneficios.subtitulo}
                <span className="font-extrabold text-4xl md:text-5xl block">
                  {text.beneficios.titulo}
                </span>
              </h2>
              <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-center">
                {text.beneficios.itens.map((data) => (
                  <motion.li
                    key={data.id}
                    whileHover={{ scale: 0.9, fontWeight: 'bold' }}
                    whileTap={{ scale: 0.8 }}
                    className="relative bg-[#f6f6f6] text-blue-green rounded-2xl p-3 hover:text-white h-full border-b border-[#b5cdd0] hover:bg-cold-green hover:text-white"
                  >
                    <p className=" font-bold text-lg lg:text  ">{data.nome}</p>
                    <img
                      src="./img/db9e1a5e-19b5-46a9-9daf-7217c488e8d2.png"
                      className="absolute w-8 h-8 right-[-15px] top-[-15px]"
                      alt=""
                    />
                  </motion.li>
                ))}
              </ul>
              <ul className="flex items-center justify-center gap-9 pt-9 flex-wrap">
                {text.beneficios.itensLogo.map((data) => (
                  <img
                    src={data.imagem}
                    alt=""
                    className="max-w-[144px]"
                    key={data.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
