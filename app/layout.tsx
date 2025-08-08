import type { Metadata } from 'next';
import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Vida Plano',
  description:
    'Conheça o app Vida Plano: facilite sua rotina com serviços de saúde, bem-estar e gestão de planos. Baixe agora e tenha tudo na palma da mão!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-switzer">{children}</body>
    </html>
  );
}
