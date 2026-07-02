import { Empresa } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Vida Plano Empresas | Benefícios Corporativos, Telemedicina e Saúde para Empresas',
  description:
    'Ofereça benefícios corporativos completos para sua empresa com o Vida Plano. Telemedicina 24h, assistência funeral, descontos em farmácias, exames, clube de vantagens, televeterinária e saúde para colaboradores em um único aplicativo.',

  keywords: [
    'benefícios corporativos',
    'benefícios para empresas',
    'telemedicina empresas',
    'plano empresarial',
    'saúde corporativa',
    'benefícios para funcionários',
    'qualidade de vida colaboradores',
    'vida plano empresas',
    'convênio empresarial',
    'assistência funeral empresarial',
    'telemedicina 24 horas',
    'clube de benefícios empresas',
    'benefícios RH',
    'gestão de benefícios',
    'empresa saudável',
    'bem-estar corporativo',
    'saúde ocupacional',
    'desconto farmácia empresa',
    'benefícios flexíveis',
    'programa de qualidade de vida',
    'benefícios para colaboradores',
    'teleconsulta para empresas',
    'benefícios empresariais Brasil',
    'saúde digital empresas',
    'Vida Plano B2B',
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
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://vidaplano.com.br/empresa',
    languages: {
      'pt-BR': 'https://vidaplano.com.br/empresa',
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vidaplano.com.br/empresa',
    siteName: 'Vida Plano',
    title: 'Vida Plano Empresas | Benefícios Corporativos para Colaboradores',
    description:
      'Transforme o cuidado com seus colaboradores. Telemedicina, descontos em farmácias, exames, assistência funeral, benefícios pet e clube de vantagens em um único aplicativo.',

    images: [
      {
        url: 'https://vidaplano.com.br/img/empresa-hero.png',
        width: 1200,
        height: 630,
        alt: 'Vida Plano Empresas',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vida Plano Empresas | Benefícios Corporativos para sua Equipe',
    description:
      'Saúde, economia e proteção para colaboradores em um só aplicativo.',
    images: ['https://vidaplano.com.br/img/empresa-hero.png'],
    creator: '@vidaplano',
    site: '@vidaplano',
  },

  category: 'Business',
  classification:
    'Benefícios Corporativos, Saúde Empresarial, Telemedicina, RH',

  other: {
    'theme-color': '#ffffff',
    'application-name': 'Vida Plano',
    'apple-mobile-web-app-title': 'Vida Plano',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
};

export default function EmpresaPage() {
  return (
    <main className="overflow-x-hidden">
      <Empresa />
    </main>
  );
}
