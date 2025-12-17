import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Vida Plano',
  description:
    'Telemedicina 24h, consultas online em até 10 min, assistência funeral, descontos em farmácias Drogasil e Droga Raia. Baixe o app Vida Plano e cuide da sua saúde com preço acessível.',
  keywords: [
    'telemedicina',
    'consulta online',
    'app saúde',
    'vida plano',
    'vida on',
    'consulta médica online',
    'televeterinária',
    'desconto farmácia',
    'drogasil',
    'droga raia',
    'assistência funeral',
    'plano de saúde acessível',
    'consulta médica barata',
    'medicina online',
    'pronto atendimento online',
    'psicologia online',
    'pediatria online',
    'ginecologia online',
    'dermatologia online',
    'nutricionista online',
    'veterinário online',
    'cremação pet',
    'benefícios saúde',
    'clube benefícios',
  ],
  authors: [{ name: 'Vida Plano' }],
  creator: 'Vida Plano',
  publisher: 'Vida Plano',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vidaplano.com.br',
    siteName: 'Vida Plano',
    title: 'Vida Plano - Telemedicina e Benefícios de Saúde Acessíveis',
    description:
      'Consultas médicas online 24h por apenas R$ 7,90/mês. Telemedicina, televeterinária, descontos em farmácias e assistência funeral.',
    images: [
      {
        url: 'https://vidaplano.com.br/img/logo-horizontal.png',
        width: 1200,
        height: 630,
        alt: 'Vida Plano - App de Telemedicina e Benefícios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vida Plano - Telemedicina Online a partir de R$ 7,90/mês',
    description:
      'Consultas médicas online em até 10 min, 24h por dia. Telemedicina, televeterinária e muito mais.',
    images: ['https://vidaplano.com.br/img/logo-horizontal.png'],
    creator: '@vidaplano',
    site: '@vidaplano',
  },
  alternates: {
    canonical: 'https://vidaplano.com.br',
    languages: {
      'pt-BR': 'https://vidaplano.com.br',
    },
  },
  category: 'Health & Medical',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PMVMVDB');`,
          }}
        />
      </head>
      <body className="font-switzer overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PMVMVDB"
            height="0"
            width="0"
            className="hidden-iframe"
            title="Google Tag Manager"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
