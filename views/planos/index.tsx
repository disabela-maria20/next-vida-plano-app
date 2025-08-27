/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */

'use client';

import { Footer, Header } from '@/components';
import React, { useEffect, useState } from 'react';
import text from '@/texts/index.json';
import useIsMobile from '@/hooks/useIsMobile/isMobile';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useAppLink } from '@/hooks/useAppLink';

const Planos = () => {
  const { isMobile } = useIsMobile();
  const appLink = useAppLink();

  type PlanoKey = 'mensal' | 'trimestal' | 'anual' | 'semestral';
  const plans: PlanoKey[] = ['mensal', 'trimestal', 'anual', 'semestral'];

  const [activeIndex, setActiveIndex] = useState(0);

  const [planos, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 1, spacing: 20 },
      },
      '(min-width: 750px)': {
        slides: { perView: 2, spacing: 35 },
      },
      '(min-width: 1200px)': {
        slides: { perView: 4, spacing: 20 },
      },
    },
    slides: { perView: 1 },
  });

  useEffect(() => {
    slider.current?.update();
  }, [activeIndex]);

  const activePlans =
    text.Contrateseuparceiro.planos2[plans[activeIndex]] || [];

  if (!appLink) {
    return <div>Carregando...</div>; // ou algum loading state
  }

  return (
    <>
      <Header />
      <section
        style={{
          backgroundImage: `url(${text.Contrateseuparceiro.bg})`,
        }}
        className="bg-no-repeat bg-cover bg-center pt-9 pb-9 lg:py-16 xl:py-20"
      >
        <div className="container m-auto px-4">
          <h1 className="text-blue-green text-3xl font-bold lg:text-4xl 2xl:text-5xl max-w-[650px] m-auto text-center mb-8">
            {text.Contrateseuparceiro.titulo}
          </h1>

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

          <div
            ref={planos}
            className="keen-slider my-16 md:my-16 items-center md:min-h-[1200.740px]"
            style={{ overflow: 'initial !important' }}
          >
            {activePlans.map((data: any) => (
              <div
                key={data.id}
                className="keen-slider__slide relative"
                style={{ overflow: 'initial !important' }}
              >
                {data.destaque && (
                  <span className="absolute text-2xl uppercase block text-center bg-blue-green border-blue-green border-8  text-white w-full m-0  rounded-3xl h-[100px] -top-[41px]">
                    {data.destaque}
                  </span>
                )}
                <div
                  className={`${data.destaque && 'border-blue-green border-4 rounded-3xl '}  relative rounded-3xl h-full bg-[#f6f6f6] flex flex-col justify-between  px-4 md:min-h-[1050.740px] lg:min-h-[1110.740px]`}
                >
                  <img
                    src={data.logo}
                    className="rounded-3xl h-[60px] w-full object-contain mt-4"
                    alt=""
                  />
                  {data.descricao && (
                    <h2 className="text-blue-green py-4 text-center font-bold text-xl">
                      {data.descricao}
                    </h2>
                  )}

                  <div
                    className="font-bold w-full lg:max-w-[100%] rounded-3xl max-w-[200px] md:p-4 h-[120]"
                    style={{ margin: '0 auto' }}
                  >
                    <p className="text-[#4e4e0b]">{data.apartir}</p>
                    <div className="flex justify-center w-full h-full">
                      <span className="text-2xl text-cold-green relative top-[5px]">
                        R$
                      </span>
                      <span className="text-6xl block text-cold-green">
                        {data.valor},
                      </span>
                      <span className="text-cold-green text-3xl relative -left-3">
                        {data.centavos}
                        <p className="text-[#4e4e0b] text-xl relative bottom-2 left-3.5">
                          {data.mes}
                        </p>
                      </span>
                    </div>
                  </div>

                  <ul>
                    {data.beneficios.map(
                      (data: { incluso: boolean; texto: string }) => (
                        <li
                          key={data.texto}
                          className="flex items-start gap-2 my-1"
                        >
                          <img
                            src={
                              data.incluso
                                ? './img/true.png'
                                : './img/false.png'
                            }
                            alt=""
                            className="mt-1"
                          />
                          <p
                            className={`${data.incluso ? 'text-cold-green' : 'text-[#cccccc]'}`}
                          >
                            {data.texto}
                          </p>
                        </li>
                      )
                    )}
                  </ul>

                  <p className="text-blue-green text-center font-bold mt-5">
                    {data.plano}
                  </p>
                  <a
                    href={appLink}
                    className="block text-center text-blue-green border-4 font-bold border-blue-green rounded-3xl mb-7 mt-2"
                  >
                    {data.acao}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* planos  */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-5 mt-16">
            <div className="bg-white  rounded-4xl">
              <img
                src={text.planos_individuais[0].img}
                className="p-5 h-[90px] max-w-[220px] w-full object-contain"
                alt=""
              />
              <div
                className="font-bold w-full rounded-3xl bg-cold-green md:p-4 h-[120] relative top-[10px]"
                style={{ margin: '0 auto' }}
              >
                <p className="text-[#4e4e0b] pt-3 pl-3 sm:pt-0 sm:pl-0">
                  {text.planos_individuais[0].apartir}
                </p>
                <div className="flex justify-center w-full h-full">
                  <span className="text-2xl text-white relative top-[5px]">
                    R$
                  </span>
                  <span className="text-6xl block text-white">
                    {text.planos_individuais[0].valor},
                  </span>
                  <span className="text-white text-3xl relative -left-3">
                    {text.planos_individuais[0].centavos}
                    <p className="text-[#4e4e0b] text-xl relative bottom-2 left-3.5">
                      {text.planos_individuais[0].mes}
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <span className="text-7xl text-cold-green">+</span>
            <div className="bg-white  rounded-4xl">
              <img
                src={text.planos_individuais[1].img}
                className="p-5 h-[90px] max-w-[220px] w-full object-contain"
                alt=""
              />
              <div
                className="font-bold w-full rounded-3xl bg-cold-green md:p-4 h-[120] relative top-[10px]"
                style={{ margin: '0 auto' }}
              >
                <p className="text-[#4e4e0b] pt-3 pl-3 sm:pt-0 sm:pl-0">
                  {text.planos_individuais[1].apartir}
                </p>
                <div className="flex justify-center w-full h-full">
                  <span className="text-2xl text-white relative top-[5px]">
                    R$
                  </span>
                  <span className="text-6xl block text-white">
                    {text.planos_individuais[1].valor},
                  </span>
                  <span className="text-white text-3xl relative -left-3">
                    {text.planos_individuais[1].centavos}
                    <p className="text-[#4e4e0b] text-xl relative bottom-2 left-3.5">
                      {text.planos_individuais[1].mes}
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <span className="text-7xl text-cold-green">+</span>
            <div className="bg-white  rounded-4xl">
              <img
                src={text.planos_individuais[2].img}
                className="p-5 h-[100px] w-[220px]  object-contain"
                alt=""
              />
              <div
                className="font-bold w-full rounded-3xl bg-cold-green md:p-4 h-[120] relative "
                style={{ margin: '0 auto' }}
              >
                <p className="text-[#4e4e0b] pt-3 pl-3 sm:pt-0 sm:pl-0">
                  {text.planos_individuais[2].apartir}
                </p>
                <div className="flex justify-center w-full h-full">
                  <span className="text-2xl text-white relative top-[5px]">
                    R$
                  </span>
                  <span className="text-6xl block text-white">
                    {text.planos_individuais[2].valor},
                  </span>
                  <span className="text-white text-3xl relative -left-3">
                    {text.planos_individuais[2].centavos}
                    <p className="text-[#4e4e0b] text-xl relative bottom-2 left-3.5">
                      {text.planos_individuais[2].mes}
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <span className="text-7xl text-cold-green">=</span>
            <div className="bg-white  rounded-4xl border-4 border-blue-green">
              <img
                src={text.planos_individuais[3].img}
                className="p-5 h-[100px] w-[220px]  object-contain"
                alt=""
              />
              <div
                className="font-bold w-full rounded-3xl bg-blue-green md:p-4 h-[120] relative "
                style={{ margin: '0 auto' }}
              >
                <p className="text-white pt-3 pl-3 sm:pt-0 sm:pl-0">
                  {text.planos_individuais[3].apartir}
                </p>
                <div className="flex justify-center w-full h-full">
                  <span className="text-2xl text-white relative top-[5px]">
                    R$
                  </span>
                  <span className="text-6xl block text-white">
                    {text.planos_individuais[3].valor},
                  </span>
                  <span className="text-white text-3xl relative -left-3">
                    {text.planos_individuais[3].centavos}
                    <p className="text-white text-xl relative bottom-2 left-3.5">
                      {text.planos_individuais[3].mes}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-5 mt-16">
            <div className="bg-white  rounded-4xl">
              <img
                src={text.planos_combinados[0].img}
                className="p-5 h-[90px] max-w-[220px] w-full object-contain"
                alt=""
              />
              <div
                className="font-bold w-full rounded-3xl bg-cold-green md:p-4 h-[120] relative top-[10px]"
                style={{ margin: '0 auto' }}
              >
                <p className="text-[#4e4e0b] pt-3 pl-3 sm:pt-0 sm:pl-0">
                  {text.planos_combinados[0].apartir}
                </p>
                <div className="flex justify-center w-full h-full">
                  <span className="text-2xl text-white relative top-[5px]">
                    R$
                  </span>
                  <span className="text-6xl block text-white">
                    {text.planos_combinados[0].valor},
                  </span>
                  <span className="text-white text-3xl relative -left-3">
                    {text.planos_combinados[0].centavos}
                    <p className="text-[#4e4e0b] text-xl relative bottom-2 left-3.5">
                      {text.planos_combinados[0].mes}
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <span className="text-7xl text-cold-green">+</span>
            <div className="bg-white  rounded-4xl">
              <img
                src={text.planos_combinados[1].img}
                className="p-5 h-[90px] max-w-[220px] w-full object-contain"
                alt=""
              />
              <div
                className="font-bold w-full rounded-3xl bg-cold-green md:p-4 h-[120] relative top-[10px]"
                style={{ margin: '0 auto' }}
              >
                <p className="text-[#4e4e0b] pt-3 pl-3 sm:pt-0 sm:pl-0">
                  {text.planos_combinados[1].apartir}
                </p>
                <div className="flex justify-center w-full h-full">
                  <span className="text-2xl text-white relative top-[5px]">
                    R$
                  </span>
                  <span className="text-6xl block text-white">
                    {text.planos_combinados[1].valor},
                  </span>
                  <span className="text-white text-3xl relative -left-3">
                    {text.planos_combinados[1].centavos}
                    <p className="text-[#4e4e0b] text-xl relative bottom-2 left-3.5">
                      {text.planos_combinados[1].mes}
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <span className="text-7xl text-cold-green">=</span>
            <div className="bg-white  rounded-4xl border-4 border-blue-green">
              <div className="p-5">
                <h2 className="text-center text-blue-green font-bold text-2xl">
                  {text.planos_combinados[2].nome}
                </h2>
                <p className="text-center text-blue-green font-bold text-xl">
                  {text.planos_combinados[2]?.apenas}
                </p>
              </div>
              <div
                className="font-bold w-full rounded-3xl bg-blue-green md:p-4 h-[120] relative "
                style={{ margin: '0 auto' }}
              >
                <p className="text-white pt-3 pl-3 sm:pt-0 sm:pl-0">
                  {text.planos_individuais[2].apartir}
                </p>
                <div className="flex justify-center w-full ">
                  <span className="text-2xl text-white relative top-[5px]">
                    R$
                  </span>
                  <span className="text-6xl block text-white">
                    {text.planos_individuais[2].valor},
                  </span>
                  <span className="text-white text-3xl relative -left-3">
                    {text.planos_individuais[2].centavos}
                    <p className="text-white text-xl relative bottom-2 left-3.5">
                      {text.planos_individuais[2].mes}
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-center font-bold text-2xl text-blue-green max-w-[300px] m-auto">
                {text.mensagem_final}
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="my-9 md:my-16 lg:my-24">
        <div className="container m-auto px-4">
          <h2 className="text-blue-green text-3xl font-bold lg:text-4xl 2xl:text-5xl max-w-[650px] m-auto text-center mb-8">
            {text.pagamento.titulo}
          </h2>
          <div>
            <ul className="grid gap-7 md:grid-cols-3">
              {text.pagamento.item.map((data) => (
                <li key={data.id} className="flex gap-4">
                  <div className="text-cold-green font-extrabold text-6xl">
                    {data.id}.
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold">
                      {data.subtitulo}
                    </h2>
                    <p className="pt-2">{data.texto}</p>
                    {data.img && data.img2 && (
                      <div className="flex gap-4 mt-4">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.farol.vidaApp&hl=pt_BR"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={data.img}
                            className="max-w-[120px]"
                            alt=""
                          />
                        </a>
                        <a
                          href="https://apps.apple.com/br/app/vida-plano/id1664932847"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={data.img2}
                            className="max-w-[120px]"
                            alt=""
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-4 m-auto">
          <div className="max-w-4xl mx-auto p-4">
            <img
              src={text.imgtable.img}
              alt=""
              className="mb-9 md:mb-16 lg:mb-24"
            />
          </div>
        </div>
      </section>
      <section className="mb-9 md:mb-16 lg:mb-24">
        <div className="container px-4 m-auto">
          <div className="grid gap-5 md:grid-cols-5 items-center">
            <div className="col-span-3 md:col-span-2">
              <div className="flex flex-col justify-center h-full">
                <img
                  src={text.baixaApp.logo}
                  alt=""
                  className="m-auto mt-10 mb-10  max-w-[270px]"
                />
                <div className="text-center my-6 max-w-[250px] m-auto">
                  <h2 className="uppercase text-3xl text-blue-green font-bold">
                    {text.baixaApp.titulo}
                  </h2>
                  <p className="font-bold text-2xl text-cold-green mb-10">
                    {text.baixaApp.texto}
                  </p>
                  <span
                    className="inline-block relative bg-blue-green text-white font-bold text-base px-7 py-2 rounded-full shadow-md text-center
                      after:absolute after:w-4 after:bg-blue-green after:h-4 after:-bottom-12 after:rounded-full after:-left-2
                      before:absolute before:w-6 before:bg-blue-green before:h-6 before:-bottom-7 before:rounded-full before:-left-5"
                  >
                    CONFIA, FAZ <br /> O VIDA PLANO!
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <img src={text.baixaApp.img} className="rounded-3xl" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Planos;
