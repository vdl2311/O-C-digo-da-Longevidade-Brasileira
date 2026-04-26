import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const CHECKOUT_URL = "https://pay.hotmart.com/K105529713A";

export default function App() {
  const currentDate = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace(' de ', '/').replace('.','');

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

      {/* CONTEÚDO PRINCIPAL (ARTIGO) */}
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-24">
        
        {/* DATA */}
        <div className="mb-6 text-[12px] text-[#666666] tracking-widest font-medium">
          Atualizado em {currentDate}
        </div>

        {/* COPY HEADER */}
        <h1 className="font-serif text-[clamp(28px,5vw,44px)] font-bold leading-[1.15] text-[#1A1A1A] mb-8">
          O "Segredo Geográfico": O que os centenários do interior do Brasil sabem sobre vitalidade que a ciência moderna acaba de confirmar?
        </h1>

        {/* IMAGEM SUGESTÃO */}
        <div className="mb-10 w-full overflow-hidden rounded-xl">
          <img 
            src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200&h=600" 
            alt="Paisagem rural brasileira de Minas Gerais"
            className="w-full h-auto object-cover max-h-[400px]"
          />
          <p className="text-[12px] text-gray-500 mt-2 text-center md:text-left italic">
            Nas regiões interioranas de estados como Minas Gerais e Bahia, a rotina revela padrões surpreendentes de vitalidade.
          </p>
        </div>

        <article className="prose prose-lg md:prose-xl prose-stone max-w-none font-serif text-[#4A4A4A]">
          <p className="mb-6">
            Nos últimos anos, pesquisadores voltaram os olhos para pontos específicos do mapa brasileiro. Em cidades como Canaã (MG) e Mucugê (BA), a longevidade não é apenas um número, mas um estilo de vida vibrante. Enquanto nos grandes centros urbanos a sensação de peso e fadiga parece ser a regra após os 50 anos, nessas regiões, homens e mulheres de 90 ou 100 anos mantêm um ritmo que intriga a medicina.
          </p>
          
          <p className="mb-12 font-medium text-[22px] leading-[1.6] text-[#2D5016] border-l-4 border-[#2D5016] pl-6 bg-[#2D5016]/5 py-4 my-8">
            A pergunta que os cientistas fizeram foi: Qual o segredo para um sistema digestivo que nunca parece envelhecer?
          </p>

          <h2 className="font-sans font-bold text-[24px] md:text-[28px] text-[#1A1A1A] mb-6 mt-16 leading-tight border-b border-[#E8E1D3] pb-2">
            A Barreira Invisível: O Biofilme Adeso
          </h2>
          <p className="mb-6">
            A descoberta mais surpreendente não está em um novo remédio, mas na compreensão do que chamamos de Biofilme Adeso. Estilo de vida moderno, alimentos ultraprocessados e o estresse constante criam uma espécie de "lodo biológico" nas paredes do sistema digestivo.
          </p>
          <p className="mb-12">
            É por isso que muitas vezes aumentar o consumo de fibras comuns não funciona — o que chamamos de "Efeito Cimento". Sem dissolver essa barreira primeiro, as fibras apenas se acumulam, gerando ainda mais desconforto.
          </p>

          <h2 className="font-sans font-bold text-[24px] md:text-[28px] text-[#1A1A1A] mb-6 mt-16 leading-tight border-b border-[#E8E1D3] pb-2">
            O Resgate da Microbiota Ancestral
          </h2>
          <p className="mb-6">
            O diferencial desses centenários brasileiros está na preservação da Microbiota Ancestral. Eles utilizam, sem saber, mecanismos fisiológicos que a vida moderna adormeceu, como a ativação do Reflexo Gastrocólico através de rituais simples ao acordar e o uso de "lubrificantes naturais" da terra, como o quiabo e gorduras inteligentes.
          </p>

          <h2 className="font-sans font-bold text-[24px] md:text-[28px] text-[#1A1A1A] mb-6 mt-16 leading-tight border-b border-[#E8E1D3] pb-2">
            O Protocolo dos 14 Dias
          </h2>
          <p className="mb-6">
            Recentemente, esses hábitos milenares foram organizados em um guia prático, focado em restaurar essa leveza original através de três fases fundamentais:
          </p>
          
          <ul className="mb-12 space-y-4 font-sans text-[#333333] text-[18px]">
            <li className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm border border-[#E8E1D3]">
              <span className="flex items-center justify-center bg-[#C9922A] text-white rounded-full w-6 h-6 shrink-0 text-[13px] font-bold mt-0.5">1</span>
              <span><strong>A Desconstrução</strong> do biofilme acumulado.</span>
            </li>
            <li className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm border border-[#E8E1D3]">
              <span className="flex items-center justify-center bg-[#C9922A] text-white rounded-full w-6 h-6 shrink-0 text-[13px] font-bold mt-0.5">2</span>
              <span><strong>A Semeadura</strong> de bactérias da juventude.</span>
            </li>
            <li className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm border border-[#E8E1D3]">
              <span className="flex items-center justify-center bg-[#C9922A] text-white rounded-full w-6 h-6 shrink-0 text-[13px] font-bold mt-0.5">3</span>
              <span><strong>A Blindagem</strong> do sistema para que ele funcione no ritmo automático da natureza.</span>
            </li>
          </ul>

          <div className="bg-[#FEFAF4] border-2 border-[#E8B84B]/30 p-8 sm:p-10 rounded-2xl mt-16 shadow-lg relative overflow-hidden">
             {/* BACKGROUND DECORATIVO */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#E8B84B]/10 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="font-sans font-bold text-[22px] md:text-[26px] mb-6 text-[#1A1A1A] leading-tight relative z-10">
              Interessado em conhecer os detalhes deste método?
            </h3>
            
            <p className="font-serif text-[18px] mb-8 text-[#4A4A4A] relative z-10">
              O guia completo <strong>"O Código da Longevidade Brasileira"</strong> detalha o passo a passo de 14 dias, incluindo os shots matinais de ativação e a técnica do ângulo de 35° para alinhar a fisiologia natural do corpo.
            </p>
            
            <div className="relative z-10">
              <a 
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[linear-gradient(135deg,#C9922A_0%,#E8B84B_100%)] px-8 py-5 rounded-xl text-[#3D1F0D] font-sans font-extrabold text-[16px] md:text-[18px] uppercase tracking-wide transition-all shadow-[0_8px_24px_rgba(201,146,42,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(201,146,42,0.5)] animate-[pulse-glow_3s_infinite] hover:animate-none text-center"
              >
                Clique aqui para conhecer o Protocolo Completo <ChevronRight className="h-6 w-6 shrink-0" />
              </a>
            </div>
          </div>
        </article>

      </main>

      {/* FOOTER DA PRESELL - COMPLIANCE */}
      <footer className="bg-[#1A1A1A] text-white/50 py-12 px-6 text-center text-[11px] md:text-[12px] font-sans border-t-4 border-[#C9922A]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="leading-relaxed mb-6 uppercase tracking-wider font-bold">
            Aviso de Compliance e Responsabilidade
          </p>
          <p className="leading-relaxed mb-8 max-w-3xl">
            Este site não faz parte do Facebook ou da Meta Platforms, Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META PLATFORMS, Inc. As informações fornecidas são para fins educacionais e não substituem aconselhamento médico profissional.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/70">
            <a href="#" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">Contato</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

