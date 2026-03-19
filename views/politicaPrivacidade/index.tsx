import { Footer, Header } from '@/components';

export default function PoliticaPrivacidade() {
  return (
    <>
      <Header />
      <div className="container m-auto px-4">
        <main className="max-w-xl mx-auto mb-14  bg-white text-gray-800 space-y-8">
          <section className="space-y-4">
            <h1 className="text-blue-green font-extrabold text-2xl md:text-3xl text-center my-10 md:my-14">
              Política de Privacidade de Dados e Segurança
            </h1>
            <p>
              Requisição formal, informações referentes aos seus dados pessoais.
              Os pedidos serão analisados conforme previsto em legislação
              vigente e, por questões legais, algumas solicitações podem não ser
              atendidas. Os titulares dos dados, segundo o texto da LGPD, podem
              exercer os seus direitos por meio de:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>confirmação da existência de tratamento;</li>
              <li>acesso aos dados;</li>
              <li>
                correção de dados incompletos, inexatos ou desatualizados;
              </li>
              <li>
                anonimização, bloqueio ou eliminação de dados desnecessários,
                excessivos ou tratados em desconformidade com a lei;
              </li>
              <li>
                portabilidade dos dados a outro fornecedor de serviço ou
                produto;
              </li>
              <li>
                eliminação dos dados pessoais tratados com o consentimento do
                titular;
              </li>
              <li>
                informação das entidades públicas e privadas com as quais o
                controlador realizou uso compartilhado de dados;
              </li>
              <li>
                informação sobre a possibilidade de não fornecer consentimento e
                sobre as consequências da negativa;
              </li>
              <li>revogação do consentimento.</li>
            </ol>
            <p>
              Fornecer dados pessoais será sempre uma escolha do usuário, uma
              vez que ele tem a opção de preencher ou não um cadastro. Também
              existe a possibilidade de desabilitar os cookies no navegador ou
              acessar o site em modo anônimo.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">
              Como entrar em contato com a Vida Plano?
            </h3>
            <p>
              Para falar com a VIDA PLANO, solicitamos que você entre em contato
              conosco usando os seguintes canais:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Pelo nosso Site Oficial:{' '}
                <a
                  className="hover:text-blue-green-dark underline text-blue-green"
                  href="https://vidaplano.com.br/politica-de-privacidade"
                >
                  https://vidaplano.com.br/politica-de-privacidade
                </a>
              </li>
              <li>
                Pelo e-mail:{' '}
                <a
                  className="hover:text-blue-green-dark underline  text-blue-green"
                  href="mailto:contato@vidaplano.com.br"
                >
                  contato@vidaplano.com.br
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">
              Com quem meus dados serão compartilhados?
            </h3>
            <p>
              A VIDA PLANO poderá compartilhar dados pessoais coletados com
              fornecedores e com parceiros de negócios, que contribuem para
              viabilizar o negócio e aprimorar os serviços e produtos
              oferecidos, visando garantir a melhor experiência aos clientes,
              podendo envolver empresas que prestam serviços financeiros e de
              processamento de pagamentos, de manutenção do site e sistemas
              operacionais, mediante decisão judicial, entre outros. Todos os
              fornecedores e parceiros são avaliados periodicamente e firmaram
              em contrato realizar o tratamento, armazenamento e exclusão dos
              dados de forma clara, objetiva e em conformidade com a lei.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">
              Por quanto tempo armazenamos dados?
            </h3>
            <p>
              A VIDA PLANO armazenará os dados pessoais fornecidos por clientes
              enquanto o serviço ou produto contratado estiver em uso e, mesmo
              após o encerramento do contrato ou cancelamento do serviço, pelo
              período necessário para cumprimento de obrigações legais ou
              regulatórias e para o exercício regular de direitos da VIDA PLANO.
              Além disso, os dados pessoais podem ser armazenados pelo período
              necessário para o cumprimento das finalidades que determinaram sua
              coleta.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">
              Qual a segurança da divulgação, armazenamento e transferência de
              dados pessoais?
            </h3>
            <p>
              A VIDA PLANO adota medidas adequadas para garantir que seus Dados
              Pessoais sejam mantidos de forma confidencial e segura.
              Entretanto, estas proteções não se aplicam a dados que você tenha
              escolhido compartilhar em áreas públicas, como redes sociais de
              terceiros. Seus Dados Pessoais serão processados apenas por nossos
              colaboradores ou agentes autorizados, e desde que estes precisem
              ter acesso a tais informações.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">
              Atualizações desta Política de Privacidade
            </h3>
            <p>
              Esta política é revisada frequentemente devido à possibilidade de
              alterações em busca de melhorias aos nossos clientes e parceiros.
              As alterações passam a ser válidas no momento da sua postagem no
              site e divulgação nas unidades.
            </p>
            <p className="text-sm text-gray-700">
              Última atualização: 31 de Julho de 2021.
            </p>
          </section>

          <footer className="text-sm text-gray-700 border-t pt-4">
            <h4 className="font-semibold">Legislação</h4>
            <p>
              Esta política será regida, interpretada e executada de acordo com
              as Leis da República Federativa do Brasil, especialmente a Lei nº
              13.709/2018 (LGPD). Caso haja interesse, não deixe de consultar a
              legislação, principalmente: Lei Geral de Proteção de Dados
              Pessoais (Lei nº 13.709/2018); Marco Civil da Internet (Lei nº
              12.965/2014) e sua Regulamentação (Decreto nº 8.771/2016); Código
              de Defesa do Consumidor (Lei nº 8.078/1990); Código Civil (Lei nº
              10.406/2002).
            </p>
          </footer>
        </main>
      </div>
      <Footer />
    </>
  );
}
