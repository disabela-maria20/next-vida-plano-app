import type { Metadata } from 'next';
import '../styles/globals.css';
import { ReactNode } from 'react';

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
      'Consultas médicas online 24h por apenas R$ 7,90/mês. Telemedicina, televeterinária, descontos em farmácias e assistência funeral. Baixe o app agora!',
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
      'Consultas médicas online em até 10 min, 24h por dia. Telemedicina, televeterinária e muito mais. Baixe o app Vida Plano!',
    images: ['https://vidaplano.com.br/img/logo-horizontal.png'],
    creator: '@vidaplano',
    site: '@vidaplano',
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://vidaplano.com.br',
    languages: {
      'pt-BR': 'https://vidaplano.com.br',
    },
  },
  category: 'Health & Medical',
  classification: 'Telemedicina, Saúde Digital, Benefícios de Saúde',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
    'theme-color': '#ffffff',
    'application-name': 'Vida Plano',
    'apple-mobile-web-app-title': 'Vida Plano',
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-switzer overflow-x-hidden">{children}</body>
    </html>
  );
}
