/* eslint-disable no-undef */
'use client';
import { Footer, Header } from '@/components';
import React from 'react';
import text from '../../texts/index.json';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createEmpresaSchema } from './empresa.schema';
import { z } from 'zod';
import { FormField } from './type';
import axios from 'axios';
// Interface para os benefícios
interface BenefitItem {
  id: number;
  name: string;
  texto: string;
  incluso: boolean;
}

const Empresa = () => {
  const fields = text.empresa.form.fields as FormField[];
  const benefits = text.empresa.benefits.items as BenefitItem[];

  const schema = React.useMemo(() => createEmpresaSchema(fields), [fields]);

  type EmpresaFormData = z.infer<typeof schema>;

  const [isLoading, setIsLoading] = React.useState(false);
  const [messageStatus, setMessageStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmpresaFormData>({
    resolver: zodResolver(schema),
  });

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);

    if (numbers.length <= 10) {
      return numbers
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2');
    }

    return numbers
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  };

  const onSubmit = async (data: EmpresaFormData) => {
    if (isLoading) return;

    setIsLoading(true);
    setMessageStatus({ type: null, message: '' });

    try {
      const payload = {
        to: 'b2b@vidaplano.com.br',
        from_email: 'noreply.cineidea@cineidea.com',
        from_name: `Novo contato - ${data.name.trim()}`,
        assunto: 'Novo contato - Vida Plano Empresas',
        nome: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        telefone: data.phone.replace(/\D/g, ''),
        mensagem: `
              Empresa: ${data.company.trim()}
              Cargo: ${data.position.trim()}
              Área: ${data.department.trim()}
              Segmento: ${data.segment.trim()}
              Quantidade de Funcionários: ${data.employees.trim()}
                    `.trim(),
      };

      await axios.post(
        process.env.NEXT_PUBLIC_MAIL_API ??
          'https://api.vibezz.com/api/sendmail',
        payload,
        {
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
          validateStatus: (status: number) => status >= 200 && status < 300,
        }
      );

      setMessageStatus({
        type: 'success',
        message:
          'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      });

      reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setMessageStatus({
          type: 'error',
          message: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="grid grid-cols-2 md:grid-cols-5">
            <div
              className="col-span-3 h-[40vh] md:h-screen bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${text.empresa.hero.imgHero})`,
              }}
            />
            <div
              className="col-span-2 h-auto md:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-12 md:py-0"
              style={{
                backgroundImage: `url(${text.empresa.hero.imgBg})`,
              }}
            >
              <div className="px-4 md:px-16 flex flex-col items-center text-center max-w-lg">
                <img
                  className="w-56 md:w-64 mb-10"
                  src={text.empresa.hero.imgLogo}
                  alt="Logo"
                />

                <h2 className="text-blue-green font-bold text-3xl mb-7">
                  {text.empresa.hero.title}
                </h2>

                <p className="mb-10">{text.empresa.hero.description}</p>

                <span
                  className="
                  inline-block relative
                  bg-pink text-white font-bold text-base
                  px-7 py-2 rounded-full shadow-md
                  after:absolute after:w-4 after:h-4 after:bg-pink after:rounded-full after:-bottom-12 after:-left-2
                  before:absolute before:w-6 before:h-6 before:bg-pink before:rounded-full before:-bottom-7 before:-left-5
                "
                >
                  CONFIA, FAZ <br />O VIDA PLANO!
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${text.empresa.benefits.imgBg})`,
          }}
        >
          <div className="py-14 px-4 md:px-10 md:py-20">
            <h2 className="text-blue-green font-bold text-center text-3xl mb-7">
              {text.empresa.benefits.title}
            </h2>
            <p className="mb-10 text-center">
              {text.empresa.benefits.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-28 items-center">
              <div className="col-span-3">
                <img className="w-full" src="/img/mosic.png" alt="Mosaic" />
              </div>
              <div className="col-span-2 max-w-[320px]">
                <ul>
                  {benefits.map((data) => (
                    <li key={data.id} className="flex items-start gap-2 my-1">
                      <img
                        src={data.incluso ? '/img/true.png' : '/img/false.png'}
                        alt={data.incluso ? 'Incluído' : 'Não incluído'}
                        className="mt-1"
                      />
                      <p
                        className={`${data.incluso ? 'text-cold-green' : 'text-[#cccccc]'}`}
                      >
                        {data.name}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="pt-7 flex justify-center">
                  <span
                    className="
                      block relative
                      bg-blue-green text-white font-bold text-base
                      px-7 py-2 rounded-full shadow-md
                      after:absolute after:w-4 after:h-4 after:bg-blue-green after:rounded-full after:-bottom-12 after:-left-2
                      before:absolute before:w-6 before:h-6 before:bg-blue-green before:rounded-full before:-bottom-7 before:-left-5
                    "
                  >
                    ENTRE EM CONTATO
                    <br />E CUIDE DA SUA EQUIPE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form section */}
        <section className="my-8 md:my-16 lg:my-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-7 bg-[#F5F5F5] rounded-4xl items-center">
              <div className="md:col-span-3 h-full rounded-4xl bg-cold-green overflow-hidden">
                <img
                  src={text.empresa.form.card.image}
                  alt="Card"
                  className="w-full object-cover"
                />
                <div className="p-7">
                  <h2 className="text-white font-bold text-3xl mb-7">
                    {text.empresa.form.card.title}
                  </h2>
                  <p className="mb-10 text-white">
                    {text.empresa.form.card.description}
                  </p>
                  <div className="pb-4">
                    <span
                      className="
                        inline-block bg-white relative text-blue-green rounded-full
                        max-w-xs text-xl md:text-2xl px-7 py-2 mt-12 uppercase font-semibold
                        after:absolute after:w-5 after:h-5 after:bg-white after:-top-14 after:left-8 after:rounded-full
                        before:absolute before:w-10 before:h-10 before:bg-white before:-top-9 before:-left-5 before:rounded-full
                      "
                    >
                      Conheça mais
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 flex items-center h-full">
                <div className="w-full px-4 py-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field) => (
                      <div key={field.name} className="mb-4">
                        <input
                          {...register(field.name)}
                          type={'text'}
                          placeholder={field.placeholder}
                          onChange={(e) => {
                            if (
                              field.name.toLowerCase() === 'phone' ||
                              field.name.toLowerCase() === 'telefone'
                            ) {
                              e.target.value = formatPhone(e.target.value);
                            }
                          }}
                          maxLength={
                            field.name.toLowerCase() === 'phone' ||
                            field.name.toLowerCase() === 'telefone'
                              ? 15
                              : undefined
                          }
                          className={`w-full bg-white h-12 rounded-full px-4  ${
                            errors[field.name] && 'border border-red-500'
                          }`}
                          disabled={isLoading}
                        />

                        {errors[field.name] && (
                          <p className="text-red-500 text-sm mt-1 ml-3">
                            {errors[field.name]?.message}
                          </p>
                        )}
                      </div>
                    ))}

                    <div className="flex flex-col gap-3">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-blue-green cursor-pointer text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2
                          ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-green-dark'}`}
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          'Enviar'
                        )}
                      </button>

                      {/* Mensagem de status */}
                      {messageStatus.type && (
                        <div
                          className={`p-3 rounded-lg text-center ${
                            messageStatus.type === 'success'
                              ? 'bg-green-100 text-green-700 '
                              : 'bg-red-100 text-red-700 '
                          }`}
                        >
                          {messageStatus.message}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App section */}
        <section className="mb-y md:my-16 lg:my-24">
          <div className="container px-4 m-auto">
            <div className="grid gap-5 md:grid-cols-5 items-center">
              <div className="col-span-3 md:col-span-2">
                <div className="flex flex-col justify-center items-center h-full">
                  <img
                    src={text.baixaApp.logo}
                    alt="Logo"
                    className="m-auto mt-10 mb-10 max-w-[270px] h"
                  />
                  <div className="text-center my-6 max-w-[250px] m-auto">
                    <h2 className="uppercase text-3xl text-blue-green font-bold">
                      {text.empresa.app.title}
                    </h2>
                    <p className="font-bold text-2xl text-cold-green mb-10">
                      {text.empresa.app.subtitle}
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
                <img
                  src={text.empresa.app.imgBanner}
                  className="rounded-3xl"
                  alt="Banner"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Empresa;
