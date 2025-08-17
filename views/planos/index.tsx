/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Footer, Header } from '@/components';
import React, { useEffect, useState } from 'react';
import text from '@/texts/index.json';
import useIsMobile from '@/hooks/useIsMobile/isMobile';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Planos = () => {
  const { isMobile } = useIsMobile();

  type PlanoKey = 'mensal' | 'trimestal' | 'anual' | 'semestral';
  const plans: PlanoKey[] = ['mensal', 'trimestal', 'anual', 'semestral'];

  const [activeIndex, setActiveIndex] = useState(0);

  const [planos, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 1, spacing: 5 },
      },
      '(min-width: 750px)': {
        slides: { perView: 3, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 20 },
      },
      '(min-width: 1440px)': {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slides: { perView: 1 },
  });

  useEffect(() => {
    slider.current?.update();
  }, [activeIndex]);

  const activePlans =
    text.Contrateseuparceiro.planos2[plans[activeIndex]] || [];

  console.log(activePlans);

  return (
    <>
      <Header />
      <section
        style={{
          backgroundImage: `url(${text.beneficios.bg})`,
          backgroundPositionX: isMobile ? 'initial' : '120%',
          backgroundPositionY: isMobile ? 'initial' : '-8%',
        }}
        className="bg-no-repeat pt-9 pb-9 lg:py-16 xl:py-20"
      >
        <div className="container m-auto px-4">
          <h1 className="text-blue-green text-3xl font-bold lg:text-4xl 2xl:text-5xl max-w-[650px] m-auto text-center mb-8">
            {text.Contrateseuparceiro.titulo}
          </h1>

          {/* Área dos botões de seleção de plano - Modificada para melhor responsividade */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col md:flex-row rounded-3xl bg-[#ebebeb] m-auto max-w-max overflow-hidden shadow-sm">
              {plans.map((plan, index) => (
                <button
                  key={plan}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 md:px-6 lg:px-8 py-2 md:py-1 rounded-3xl transition-all font-bold cursor-pointer text-sm md:text-base ${
                    activeIndex === index
                      ? 'bg-cold-green text-white shadow-md'
                      : 'text-[#555555] hover:bg-gray-200'
                  }`}
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>

          <div ref={planos} className="keen-slider mt-8 md:mt-16">
            {activePlans.map((data: any) => (
              <div key={data.id} className="keen-slider__slide">
                <div className="relative rounded-3xl h-full bg-[#f6f6f6] flex flex-col hover:border-4 hover:border-cold-green">
                  <img
                    src={data.img}
                    className="rounded-3xl h-[250px] w-full object-cover"
                    alt=""
                  />
                  <div className="px-5 relative">
                    <div className="flex justify-between">
                      {!data.titulo && (
                        <>
                          <img
                            src="./img/logo-vida-on.png"
                            alt=""
                            className="w-[100px] md:w-[200px] object-contain"
                          />
                          <div>
                            <p className="mt-4 text-blue-green italic border-2 border-blue-green inline-block py-1 px-6 rounded-3xl font-semibold">
                              {data.subtitulo}
                            </p>
                            <br />
                            <span className="ml-2.5 mt-1 inline-block text-blue-green italic font-semibold">
                              {data.faxetaria}
                            </span>
                          </div>
                        </>
                      )}
                      {data.titulo && (
                        <div>
                          <h2 className="w-full text-2xl text-cold-green relative font-black text-center mt-6">
                            {data.titulo}
                          </h2>
                          <p className="ml-2.5 mt-1 text-center text-blue-green italic font-semibold">
                            {data.faxetaria_titulo}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="mb-6 font-bold relative lg:w-full lg:max-w-[100%] rounded-3xl max-w-[200px] p-4 h-[120]">
                      <p className="text-[#4e4e0b] text-2xl">{data.texto1}</p>
                      <div className="flex justify-center">
                        <span className="text-2xl text-cold-green relative top-[5px]">
                          R$
                        </span>
                        <span className="text-7xl block text-cold-green">
                          {data.reais},
                        </span>
                        <span className="text-cold-green text-3xl relative -left-3">
                          {data.centavos}
                          <p className="text-[#4e4e0b] text-2xl relative bottom-2 left-3.5">
                            {data.mes}
                          </p>
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-3 font-bold">{data.subtitulo2}</h3>

                    <a
                      href="#/"
                      className="uppercase text-xl block bg-blue-green hover:bg-cold-green rounded-2xl text-white py-2 hover:bg-opacity-90 transition-colors"
                    >
                      <span className="w-full block text-center">
                        {data.link}
                      </span>
                    </a>
                    <ul className="flex flex-col gap-2 my-6">
                      {data.texto.map((item: any, idx: number) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <img
                            src="./img/db9e1a5e-19b5-46a9-9daf-7217c488e8d2.png"
                            alt=""
                            width={20}
                          />
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Planos;
