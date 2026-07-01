import { Empresa } from '@/views';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Vida Plano | Planos - Compare Preços e Benefícios',
  description:
    "'Planos Vida Plano 2025: Individual R$ 7,90/mês telemedicina 24h, 60+ anos R$ 29,90/mês cobertura completa, Vida Lab exames laboratoriais, Vida Plena assistência funeral R$ 10mil. Descontos 30% plano trienal, 20% anual, 10% semestral. Televeterinária pets, desconto farmácia Drogasil Droga Raia 22%, consultas online especialistas dermatologia ginecologia pediatria psicologia nutricionista. Sem carência telemedicina, carência 7 dias benefícios, 90 dias funeral. Abrangência nacional Brasil. Contrate app Android iOS.",
  keywords: [
    'planos vida plano',
    'preços vida plano',
    'plano individual saúde',
    'plano familiar saúde',
    'vida on telemedicina',
    'vida lab exames',
    'vida plena funeral',
    'comparar planos saúde',
    'plano mensal saúde',
    'plano anual saúde',
    'plano trienal saúde',
    'desconto plano saúde',
    'plano telemedicina barato',
    'assistência funeral preço',
    'plano laboratório exames',
    'plano veterinário pet',
    'desconto farmácia plano',
    'plano saúde sem carência',
    'tabela preços saúde',
    'contratar plano saúde',
    'benefícios plano saúde',
    '19 a 59 anos plano',
    '60+ anos plano saúde',
    'melhor plano saúde',
    'plano completo saúde',
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
    title: 'Planos Vida Plano - Compare Preços, Benefícios e Descontos até 30%',
    description:
      'Compare planos Vida Plano: Individual (R$ 7,90), 60+ (R$ 29,90), Vida Lab, Vida Plena. Descontos progressivos: 10% semestral, 20% anual, 30% trienal. Contrate o ideal para você!',
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
    canonical: 'https://vidaplano.com.br/planos',
    languages: {
      'pt-BR': 'https://vidaplano.com.br/planos',
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
export default function HomePlanos() {
  return (
    <main className="overflow-x-hidden">
      <Empresa />
    </main>
  );
}
