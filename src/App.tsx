import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const CHECKOUT_URL = "https://protocolosentenario.vercel.app/";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'contact'>('home');
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace(' de ', '/').replace('.','');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    if (currentPage === 'privacy') {
      return (
        <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 prose prose-stone max-w-none font-serif text-[#4A4A4A]">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 text-[#A0522D] font-sans font-bold text-[14px] uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </button>
          <h1 className="font-sans font-bold text-[32px] text-[#1A1A1A] mb-8">Políticas de Privacidade</h1>
          <p>Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso site. Levamos a sua privacidade a sério e estamos comprometidos em proteger os dados que você compartilha conosco.</p>
          
          <h2 className="font-sans font-bold text-[24px] text-[#1A1A1A] mt-8 mb-4">1. Coleta de Informações</h2>
          <p>Coletamos informações pessoais que você nos fornece voluntariamente, como nome e e-mail, quando você entra em contato conosco ou se inscreve para receber nossos materiais. Também podemos coletar dados não pessoais de navegação, como endereço IP, tipo de navegador e páginas visitadas, por meio de cookies e tecnologias semelhantes, para melhorar a sua experiência no site.</p>
          
          <h2 className="font-sans font-bold text-[24px] text-[#1A1A1A] mt-8 mb-4">2. Uso das Informações</h2>
          <p>Usamos as informações coletadas para:</p>
          <ul>
            <li>Fornecer, operar e manter nosso site;</li>
            <li>Melhorar, personalizar e expandir nosso site;</li>
            <li>Entender e analisar como você usa nosso site;</li>
            <li>Comunicar-nos com você para fins de suporte, envio de novidades e promoções.</li>
          </ul>
          
          <h2 className="font-sans font-bold text-[24px] text-[#1A1A1A] mt-8 mb-4">3. Proteção e Compartilhamento de Dados</h2>
          <p>Adotamos medidas de segurança rígidas para proteger suas informações contra acesso, alteração ou destruição não autorizada. Não vendemos, trocamos ou alugamos suas informações pessoais para terceiros. O compartilhamento pode ocorrer apenas com parceiros de confiança que nos auxiliam na operação do site, sempre sob acordos de confidencialidade estritos.</p>
          
          <h2 className="font-sans font-bold text-[24px] text-[#1A1A1A] mt-8 mb-4">4. Seus Direitos</h2>
          <p>Você tem o direito de solicitar o acesso, a correção ou a exclusão de suas informações pessoais armazenadas em nossos sistemas. Para exercer esses direitos, entre em contato conosco através dos canais fornecidos na página de Contato.</p>
        </main>
      );
    }

    if (currentPage === 'terms') {
      return (
        <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 prose prose-stone max-w-none font-serif text-[#4A4A4A]">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 text-[#A0522D] font-sans font-bold text-[14px] uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </button>
          <h1 className="font-sans font-bold text-[32px] text-[#1A1A1A] mb-8">Termos de Uso</h1>
          <p>Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Leia-os cuidadosamente antes de prosseguir.</p>
          
          <h2 className="font-sans font-bold text-[24px] text-[#1A1A1A] mt-8 mb-4">1. Uso do Conteúdo</h2>
          <p>Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones e imagens, é de propriedade exclusiva e está protegido por leis de direitos autorais. Você não pode reproduzir, distribuir, modificar ou republicar nenhum material deste site sem a nossa autorização prévia e por escrito.</p>
          
          <h2 className="font-sans font-bold text-[24px] text-[#1A1A1A] mt-8 mb-4">2. Isenção de Responsabilidade</h2>
          <p>As informações contidas neste site possuem caráter estritamente educativo e informativo. Elas não substituem, de forma alguma, o aconselhamento, diagnóstico ou tratamento médico profissional. Sempre consulte um médico qualificado antes de realizar qualquer alteração em sua dieta, rotina de exercícios ou saúde geral. O uso das informações contidas aqui é de sua inteira responsabilidade.</p>
          
          <h2 className="font-sans font-bold text-[24px] text-[#1A1A1A] mt-8 mb-4">3. Links para Sites de Terceiros</h2>
          <p>Nosso site pode conter links para sites de terceiros que não são operados por nós. Não temos controle sobre o conteúdo, políticas de privacidade ou práticas desses sites e não assumimos nenhuma responsabilidade por eles. Recomendamos que você leia os termos de uso e as políticas de privacidade de qualquer site de terceiros que visitar.</p>
          
          <h2 className="font-sans font-bold text-[24px] text-[#1A1A1A] mt-8 mb-4">4. Alterações nos Termos</h2>
          <p>Reservamo-nos o direito de modificar ou substituir estes Termos de Uso a qualquer momento. Quaisquer alterações entrarão em vigor imediatamente após a publicação no site. O uso contínuo do site após quaisquer alterações constitui a sua aceitação dos novos Termos de Uso.</p>
        </main>
      );
    }

    if (currentPage === 'contact') {
      return (
        <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 prose prose-stone max-w-none font-serif text-[#4A4A4A] text-center">
          <button onClick={() => setCurrentPage('home')} className="flex items-center justify-center gap-2 text-[#A0522D] font-sans font-bold text-[14px] uppercase tracking-wider mb-12 mx-auto hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </button>
          
          <div className="bg-[#FEFAF4] border-2 border-[#E8B84B]/30 p-10 md:p-16 rounded-2xl shadow-lg inline-block text-center mx-auto max-w-2xl w-full">
            <h1 className="font-sans font-bold text-[32px] md:text-[40px] text-[#1A1A1A] mb-6">Entre em Contato</h1>
            <p className="text-[18px] md:text-[20px] mb-8">Tem alguma dúvida ou precisa de suporte? Estamos aqui para ajudar.</p>
            
            <div className="bg-white p-6 rounded-xl border border-[#E8E1D3] shadow-sm mb-8 inline-block">
              <span className="block text-[14px] font-sans font-bold uppercase tracking-wider text-[#A0522D] mb-2">E-mail de Suporte</span>
              <a href="mailto:vdlmarketdigital@gmail.com" className="font-sans font-bold text-[20px] md:text-[24px] text-[#2D5016] hover:underline decoration-[#2D5016]/30 underline-offset-4">vdlmarketdigital@gmail.com</a>
            </div>
            
            <p className="text-[16px]">Nosso time responderá o mais breve possível, geralmente dentro de 24 a 48 horas úteis.</p>
          </div>
        </main>
      );
    }

    // HOME PAGE CONTENT
    return (
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-24">
        {/* DATA */}
        <div className="mb-6 text-[12px] text-[#666666] tracking-widest font-medium">
          Atualizado em {currentDate}
        </div>

        {/* COPY HEADER */}
        <h1 className="font-serif text-[clamp(28px,5vw,44px)] font-bold leading-[1.15] text-[#1A1A1A] mb-8">
          O que moradores de pequenas cidades no Brasil fazem diariamente (e por que isso tem chamado atenção de pesquisadores)
        </h1>

        {/* IMAGEM SUGESTÃO */}
        <div className="mb-10 w-full overflow-hidden rounded-xl">
          <img 
            src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200&h=600" 
            alt="Paisagem rural brasileira"
            className="w-full h-auto object-cover max-h-[400px]"
          />
        </div>

        <article className="prose prose-lg md:prose-xl prose-stone max-w-none font-serif text-[#4A4A4A]">
          <p className="mb-6">
            Em algumas regiões do interior do Brasil, algo curioso vem sendo observado.
          </p>
          <p className="mb-6">
            Em cidades de Minas Gerais, Bahia e outras regiões mais afastadas dos grandes centros, é comum encontrar pessoas com 80, 90 anos ou mais mantendo uma rotina ativa e relativamente simples.
          </p>
          <p className="mb-6">
            Não se trata de fórmulas modernas.
          </p>
          <p className="mb-12">
            Na maioria dos casos, são hábitos comuns — repetidos por décadas.
          </p>

          <h2 className="font-sans font-bold text-[24px] md:text-[28px] text-[#1A1A1A] mb-6 mt-16 leading-tight border-b border-[#E8E1D3] pb-2">
            Um padrão que vai além da idade
          </h2>
          <p className="mb-6">
            Nos últimos anos, pesquisadores passaram a observar esses padrões com mais atenção.
          </p>
          <p className="mb-6">
            Em locais como Canaã (MG) e Mucugê (BA), por exemplo, a longevidade aparece associada a um estilo de vida mais estável:
          </p>
          <ul className="mb-6 space-y-3 font-sans text-[#333333] text-[18px]">
            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E8E1D3]">
              <div className="w-2 h-2 rounded-full bg-[#2D5016]"></div>
              alimentação menos industrializada
            </li>
            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E8E1D3]">
              <div className="w-2 h-2 rounded-full bg-[#2D5016]"></div>
              rotina com menos pressa
            </li>
            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E8E1D3]">
              <div className="w-2 h-2 rounded-full bg-[#2D5016]"></div>
              hábitos consistentes ao longo do tempo
            </li>
          </ul>
          <p className="mb-6 mt-8">
            Mas o que mais chamou atenção não foi apenas a idade.
          </p>
          <p className="mb-12 font-medium text-[22px] leading-[1.6] text-[#2D5016] border-l-4 border-[#2D5016] pl-6 bg-[#2D5016]/5 py-4 my-8">
            E sim a forma como essas pessoas mantêm o dia a dia.
          </p>

          <h2 className="font-sans font-bold text-[24px] md:text-[28px] text-[#1A1A1A] mb-6 mt-16 leading-tight border-b border-[#E8E1D3] pb-2">
            O que pode explicar essa diferença?
          </h2>
          <p className="mb-6">
            Ao comparar com grandes centros urbanos, a diferença de rotina é clara.
          </p>
          <p className="mb-6">
            Enquanto muitos convivem com excesso de informação, mudanças constantes e hábitos irregulares…
          </p>
          <p className="mb-6">
            Essas comunidades mantêm padrões simples e repetíveis.
          </p>
          <p className="mb-6">
            Alguns especialistas associam isso a fatores como:
          </p>
          <ul className="mb-12 space-y-3 font-sans text-[#333333] text-[18px]">
            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E8E1D3]">
              <div className="w-2 h-2 rounded-full bg-[#A0522D]"></div>
              menor exposição a alimentos ultraprocessados
            </li>
            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E8E1D3]">
              <div className="w-2 h-2 rounded-full bg-[#A0522D]"></div>
              maior regularidade nos horários
            </li>
            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E8E1D3]">
              <div className="w-2 h-2 rounded-full bg-[#A0522D]"></div>
              práticas diárias mais previsíveis
            </li>
          </ul>

          <h2 className="font-sans font-bold text-[24px] md:text-[28px] text-[#1A1A1A] mb-6 mt-16 leading-tight border-b border-[#E8E1D3] pb-2">
            Um detalhe que poucos observam
          </h2>
          <p className="mb-6">
            Mais do que um único fator, o que parece fazer diferença é o conjunto.
          </p>
          <p className="mb-8">
            Pequenos hábitos que, isoladamente, parecem comuns… mas que juntos criam um padrão mais equilibrado.
          </p>
          <p className="mb-6">
            E é exatamente isso que despertou interesse recente:
          </p>
          <div className="bg-[#FEFAF4] p-6 rounded-xl border border-[#C9922A]/20 font-sans mb-12 shadow-sm text-[18px] space-y-4">
            <div className="flex gap-3 items-start text-[#4A4A4A]">
              <span className="font-bold text-[#C9922A]">👉</span>
              <p>não é sobre uma solução específica</p>
            </div>
            <div className="flex gap-3 items-start text-[#4A4A4A]">
              <span className="font-bold text-[#C9922A]">👉</span>
              <p>mas sobre a organização da rotina como um todo</p>
            </div>
          </div>

          <h2 className="font-sans font-bold text-[24px] md:text-[28px] text-[#1A1A1A] mb-6 mt-16 leading-tight border-b border-[#E8E1D3] pb-2">
            A organização desses hábitos em um guia prático
          </h2>
          <p className="mb-6">
            A partir dessas observações, foi estruturado um material reunindo esses padrões em um formato simples de seguir.
          </p>
          <p className="mb-6">
            Sem termos técnicos complexos.
          </p>
          <p className="mb-6">
            Sem excesso de informação.
          </p>
          <p className="mb-12">
            Apenas um passo a passo baseado em práticas já utilizadas no dia a dia dessas regiões.
          </p>

          <h2 className="font-sans font-bold text-[24px] md:text-[28px] text-[#1A1A1A] mb-6 mt-16 leading-tight border-b border-[#E8E1D3] pb-2">
            Como esse guia foi estruturado
          </h2>
          <p className="mb-6">
            O material organiza esses hábitos em um protocolo de 14 dias dividido em três etapas:
          </p>
          <ul className="mb-12 space-y-4 font-sans text-[#333333] text-[18px]">
            <li className="flex flex-col gap-1 bg-white p-6 rounded-lg shadow-sm border border-[#E8E1D3]">
              <span className="font-bold text-[#2D5016] text-[14px] uppercase tracking-wider">Passo 1</span>
              <span><strong>Ajuste inicial da rotina</strong><br />Pequenas mudanças para organizar o dia a dia</span>
            </li>
            <li className="flex flex-col gap-1 bg-white p-6 rounded-lg shadow-sm border border-[#E8E1D3]">
               <span className="font-bold text-[#2D5016] text-[14px] uppercase tracking-wider">Passo 2</span>
              <span><strong>Estruturação de hábitos consistentes</strong><br />Aplicação prática de padrões simples</span>
            </li>
            <li className="flex flex-col gap-1 bg-white p-6 rounded-lg shadow-sm border border-[#E8E1D3]">
               <span className="font-bold text-[#2D5016] text-[14px] uppercase tracking-wider">Passo 3</span>
              <span><strong>Continuidade e manutenção</strong><br />Foco em tornar tudo natural ao longo do tempo</span>
            </li>
          </ul>

          <h2 className="font-sans font-bold text-[24px] md:text-[28px] text-[#1A1A1A] mb-6 mt-16 leading-tight border-b border-[#E8E1D3] pb-2">
            Para quem faz sentido
          </h2>
          <p className="mb-6">
            Esse tipo de abordagem costuma chamar atenção de pessoas que:
          </p>
          <ul className="mb-12 space-y-3 font-sans text-[#333333] text-[18px]">
            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E8E1D3]">
              <div className="w-2 h-2 rounded-full bg-[#E8B84B]"></div>
              buscam mais leveza na rotina
            </li>
            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E8E1D3]">
              <div className="w-2 h-2 rounded-full bg-[#E8B84B]"></div>
              preferem soluções simples
            </li>
            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E8E1D3]">
              <div className="w-2 h-2 rounded-full bg-[#E8B84B]"></div>
              querem algo organizado e direto
            </li>
            <li className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#E8E1D3]">
              <div className="w-2 h-2 rounded-full bg-[#E8B84B]"></div>
              não se adaptam a métodos complicados
            </li>
          </ul>

          <div className="bg-[#FEFAF4] border-2 border-[#E8B84B]/30 p-8 sm:p-10 rounded-2xl mt-16 shadow-lg relative overflow-hidden">
             {/* BACKGROUND DECORATIVO */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#E8B84B]/10 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="font-sans font-bold text-[22px] md:text-[26px] mb-6 text-[#1A1A1A] leading-tight relative z-10">
              Quer entender como aplicar isso no dia a dia?
            </h3>
            
            <p className="font-serif text-[18px] mb-8 text-[#4A4A4A] relative z-10">
              O guia completo <strong>"O Código da Longevidade Brasileira"</strong> detalha como esses hábitos foram organizados em um passo a passo simples.
            </p>

            <div className="bg-white p-6 rounded-xl border border-[#E8E1D3] shadow-sm mb-8 font-sans text-[16px] md:text-[18px] text-[#4A4A4A] space-y-3 relative z-10">
              <div className="flex gap-2 items-start">
                <span className="font-bold text-[#C9922A] mt-0.5">👉</span>
                <p>Inclui a estrutura dos 14 dias</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="font-bold text-[#C9922A] mt-0.5">👉</span>
                <p>Exemplos práticos de aplicação</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="font-bold text-[#C9922A] mt-0.5">👉</span>
                <p>Organização da rotina diária</p>
              </div>
            </div>
            
            <div className="relative z-10 mt-10">
              <p className="font-sans text-[14px] font-bold uppercase tracking-wider text-[#A0522D] mb-4 text-center">
                Clique abaixo para conhecer o conteúdo completo
              </p>
              <a 
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[linear-gradient(135deg,#C9922A_0%,#E8B84B_100%)] px-8 py-5 rounded-xl text-[#3D1F0D] font-sans font-extrabold text-[16px] md:text-[18px] uppercase tracking-wide transition-all shadow-[0_8px_24px_rgba(201,146,42,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(201,146,42,0.5)] animate-[pulse-glow_3s_infinite] hover:animate-none text-center"
              >
                VER O GUIA COMPLETO AGORA <ChevronRight className="h-6 w-6 shrink-0" />
              </a>
            </div>
          </div>
        </article>
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#1A1A1A] selection:bg-[#E8B84B]/30">
      
      {/* HEADER SIMPLES (ESTILO PORTAL DE NOTÍCIAS) */}
      <header className="border-b border-[#E8E1D3] bg-white pt-6 pb-4 px-6 relative z-50">
        <div className="mx-auto max-w-3xl flex flex-col gap-2">
          <div className="text-[11px] md:text-[12px] text-[#A0522D] font-bold uppercase tracking-widest flex flex-wrap gap-2 md:gap-3 items-center">
            <span>Saúde & Ciência</span>
            <span className="text-[#E8E1D3]">|</span>
            <span>Descobertas Nacionais</span>
            <span className="text-[#E8E1D3]">|</span>
            <span>Longevidade</span>
          </div>
          <div className="w-full h-px bg-[#A0522D]/10 mt-1"></div>
        </div>
      </header>

      {renderContent()}

      {/* FOOTER DA PRESELL - COMPLIANCE */}
      <footer className="bg-[#1A1A1A] text-white/50 py-12 px-6 text-center text-[11px] md:text-[12px] font-sans border-t-4 border-[#C9922A]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="leading-relaxed mb-6 uppercase tracking-wider font-bold">
            Aviso
          </p>
          <p className="leading-relaxed mb-8 max-w-3xl">
            Este conteúdo tem caráter informativo e educacional. Não substitui orientação profissional. Resultados podem variar de acordo com cada pessoa.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/70">
            <button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Políticas de Privacidade</button>
            <button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Termos de Uso</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Contato</button>
          </div>
        </div>
      </footer>

    </div>
  );
}

