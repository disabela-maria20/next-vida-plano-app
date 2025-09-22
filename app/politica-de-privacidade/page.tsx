import { PoliticaPrivacidade } from '@/views';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Vida Plano',
  description:
    'Conheça a Política de Privacidade da Vida Plano. Saiba como coletamos, armazenamos, utilizamos e protegemos seus dados pessoais de acordo com a LGPD.',
  keywords: [
    'Política de Privacidade',
    'Vida Plano',
    'LGPD',
    'proteção de dados',
    'segurança da informação',
    'dados pessoais',
  ],
  authors: [{ name: 'Vida Plano' }],
  openGraph: {
    title: 'Política de Privacidade | Vida Plano',
    description:
      'Saiba como a Vida Plano protege seus dados pessoais de acordo com a LGPD e outras legislações vigentes.',
    url: 'https://vidaplano.com.br/politica-de-privacidade',
    siteName: 'Vida Plano',
    type: 'article',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Privacidade | Vida Plano',
    description:
      'Transparência e segurança no tratamento de dados pessoais: conheça a Política de Privacidade da Vida Plano.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function PagePolitica() {
  return (
    <main className="overflow-x-hidden">
      <PoliticaPrivacidade />
    </main>
  );
}
