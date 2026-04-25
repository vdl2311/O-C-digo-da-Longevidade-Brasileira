/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  BookOpen,
  Smartphone,
  ChevronDown,
  CheckCircle2,
  Leaf,
  Brain,
  Droplets,
  TestTube,
  Ban,
  Clock,
  MapPin,
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-gold-light selection:text-white pb-20 sm:pb-0">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-forest px-6 py-20">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] h-[60%] w-[60%] rounded-full bg-forest-light opacity-30 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-gold-light opacity-10 blur-[100px]" />
        </div>

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 rounded-full border border-gold-light/30 bg-gold/10 px-5 py-2 font-display text-xs font-semibold tracking-wider text-gold-light uppercase"
          >
            E-book Digital · Acesso Imediato
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            O que comunidades longevas do Brasil fazem no dia a dia — <em className="text-gold-light font-style-italic font-medium">e por que isso tem chamado a atenção de pesquisadores</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-xl font-medium text-gold-light"
          >
            Sem dietas extremas, sem produtos caros — apenas ajustes simples baseados em hábitos reais.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            Hábitos simples, muitas vezes ignorados na rotina moderna, que vêm sendo observados em regiões com alta longevidade no Brasil.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Um material prático e direto ao ponto com exemplos do cotidiano real, adaptável à rotina atual, sem a necessidade de mudanças radicais para quem busca mais equilíbrio e bem-estar natural.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex flex-col items-center gap-4 w-full"
          >
            <a
              href="https://pay.hotmart.com/K105529713A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-light px-8 py-5 font-display text-lg font-bold text-white shadow-[0_10px_40px_rgba(200,134,10,0.3)] transition-transform hover:scale-[1.02] hover:shadow-[0_15px_50px_rgba(200,134,10,0.4)]"
            >
              Acessar o material completo &rarr;
            </a>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-sm font-medium text-white/60">
                <ShieldCheck className="h-4 w-4" />
                <span>Garantia de 7 dias · Pagamento 100% seguro</span>
              </div>
              <span className="text-xs font-medium text-white/50">Acesso imediato após a confirmação.</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 text-white/30"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* STRIP */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 border-b border-cream-dark bg-forest-light px-6 py-6 font-display text-sm text-white/80 shadow-sm text-center">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-light" />
          <span><strong className="text-white">Aplicação simples</strong> no cotidiano</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-light" />
          <span><strong className="text-white">Sem necessidade</strong> de mudanças radicais</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-light" />
          <span><strong className="text-white">Adaptável</strong> à rotina moderna</span>
        </div>
      </div>

      {/* DOR */}
      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="font-display text-xs font-bold tracking-[0.2em] text-gold uppercase">Observação Comportamental</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-forest sm:text-4xl md:text-5xl">
              A relação entre rotina moderna e <em className="text-gold font-medium italic">bem-estar</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-stone">
              Muitas pessoas relatam variações no bem-estar ao longo do dia. O ritmo agitado, combinado com escolhas alimentares modernas, tem levado estudiosos a analisarem exemplos práticos e costumes simples para uma vida mais equilibrada.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {[
              "Variações no bem-estar ao longo do dia que influenciam a rotina.",
              "Interesse crescente por rotinas simples e exemplos práticos no dia a dia.",
              "O interesse na aplicação simples de ingredientes naturais para cultivar uma sensação de maior leveza.",
              "Pequenos ajustes que, ao longo dos dias, podem tornar a rotina mais leve, organizada e previsível."
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex rounded-2xl border border-cream-dark bg-cream p-6 transition-all hover:border-gold/30 hover:bg-white hover:shadow-lg"
              >
                <div className="mr-4 mt-1 h-3 w-3 shrink-0 rounded-full bg-[#d4403a]/80" />
                <p className="text-ink text-[0.95rem] leading-relaxed group-hover:text-forest">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CENTENARIOS */}
      <section className="bg-cream-dark/30 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <span className="font-display text-xs font-bold tracking-[0.2em] text-gold uppercase">Uma Visão Diferente</span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-forest sm:text-4xl md:text-5xl">
            Estudos de Populações Longevas
          </h2>
          <div className="mt-8 space-y-6 text-lg text-stone">
            <p className="font-medium text-forest text-xl">
              O que chama atenção nesses locais não é apenas a idade avançada, mas a consistência de hábitos simples mantidos ao longo dos anos — muitos deles esquecidos na rotina moderna.
            </p>
            <p>
              Nessas regiões, a cultura de cultivar o próprio alimento e seguir um ritmo mais conectado ao tempo natural tem chamado a atenção, promovendo uma compreensão diferente sobre o equilíbrio do corpo.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Poços de Caldas, MG", "Pomerode, SC", "Jaraguá do Sul, SC", 
              "Mucugê, BA", "M. C. Rondon, PR", "Rio São Francisco, MG/BA"
            ].map((city, i) => (
              <span key={i} className="flex items-center gap-1.5 rounded-full border border-forest/20 bg-forest/5 px-4 py-1.5 font-display text-sm font-semibold text-forest">
                <MapPin className="h-3.5 w-3.5" />
                {city}
              </span>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 rounded-[2rem] bg-forest p-10 text-white sm:p-14 relative overflow-hidden"
          >
            <div className="absolute top-[-30px] left-[-10px] text-[12rem] font-serif leading-none text-white/5 select-none font-bold">"</div>
            <p className="relative z-10 font-serif text-xl sm:text-2xl italic leading-relaxed text-white/90">
              Estudos sobre populações longevas no Brasil mostram padrões interessantes de alimentação e rotina que podem influenciar na compreensão geral sobre o bem-estar ao longo do tempo.
            </p>
            <cite className="relative z-10 mt-8 block font-display text-sm font-bold text-gold-light not-italic tracking-wider uppercase">
              — Baseado em observações de populações rurais
            </cite>
          </motion.div>
        </div>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-xs font-bold tracking-[0.2em] text-gold uppercase">Dentro do e-book</span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-forest sm:text-4xl md:text-5xl">
            Tudo que você vai <em className="text-gold font-medium italic">descobrir e aplicar</em>
          </h2>
          
          <div className="mt-16 grid gap-4 text-left sm:gap-6">
            {[
              { icon: <TestTube />, title: "A Biologia Alimentar", desc: "Informações educacionais sobre o ambiente natural do corpo e adaptações de hábitos alimentares." },
              { icon: <Brain />, title: "Interações do Corpo", desc: "Como a rotina agitada diária e o nível de estresse podem interagir com o equilíbrio geral." },
              { icon: <Droplets />, title: "Hábitos Matinais", desc: "Práticas leves de hidratação que ajudam a apoiar os processos fisiológicos matutinos." },
              { icon: <Leaf />, title: "Gorduras e Fibras", desc: "A utilização tradicional de óleos alimentares e sementes em rotinas focadas em qualidade de vida." },
              { icon: <CheckCircle2 />, title: "Escolhas In Natura", desc: "Compreensão sobre o comportamento de alimentos menos processados na rotina nutricional diária." },
              { icon: <Clock />, title: "Adaptações Posturais", desc: "Conceitos de ergonomia aplicados a práticas comuns e respeito à biomecânica do corpo." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 sm:gap-6 rounded-2xl border border-cream-dark bg-cream p-5 sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-light text-white shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-stone">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLO */}
      <section className="bg-forest px-6 py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-xs font-bold tracking-[0.2em] text-gold-light uppercase">O roteiro completo</span>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              O Roteiro Flexível de <em className="text-gold-light font-medium italic">14 Dias</em>
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Três fases progressivas para ajudar a adaptar sua rotina de forma simples e consistente.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-[2px] bg-gold/20" />
            
            {[
              { num: "01", days: "Foco Inicial", title: "Hidratação e Estímulo", desc: "Uma abordagem guiada sobre hidratação estratégica e escolhas ricas em fibras macias para iniciar uma nova rotina." },
              { num: "02", days: "Construção", title: "A Semeadura", desc: "Foco no aprendizado sobre alimentos fermentados simples e o papel de um ambiente digestivo equilibrado." },
              { num: "03", days: "Consolidação", title: "Adaptação do Estilo de Vida", desc: "Diretrizes práticas de longo prazo voltadas na consistência dos hábitos abordados no material." },
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center rounded-3xl bg-forest-light p-8 border border-white/5"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-xl font-bold text-forest z-10 shadow-[0_0_20px_rgba(200,134,10,0.4)]">
                  {phase.num}
                </div>
                <div className="font-display text-xs font-bold tracking-[0.15em] text-gold-light uppercase mb-3">
                  {phase.days}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center text-sm text-white/50 bg-white/5 py-4 px-6 rounded-xl border border-white/10 max-w-2xl mx-auto">
            O e-book inclui ainda: <strong className="text-white">lista de compras completa</strong>, <strong className="text-white">receitas-chave</strong> e <strong className="text-white">checklist diário</strong>.
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="bg-cream px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <span className="font-display text-xs font-bold tracking-[0.2em] text-gold uppercase">O PÚBLICO</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-forest sm:text-4xl">
              Para quem busca um <em className="text-gold font-medium italic">novo estilo de vida</em>
            </h2>
            <p className="mt-6 text-lg text-stone mb-8 lg:mb-0">
              O bem-estar intestinal apoia inúmeras funções do corpo. O objetivo deste material é oferecer informação embasada baseada no modo de viver mais simples.
            </p>
          </div>
          <div className="lg:w-1/2 bg-white p-8 sm:p-10 rounded-[2rem] border border-cream-dark shadow-sm">
            <ul className="space-y-5">
              {[
                "Pessoas interessadas em adaptar hábitos de saúde com o passar dos anos.",
                "Quem busca conhecer abordagens focadas puramente na alimentação e rotina.",
                "Pessoas abertas a aprender alternativas complementares baseadas em alimentos in natura.",
                "Quem valoriza informação sobre rotinas, hábitos e qualidade de vida.",
                "Indivíduos que preferem um material simples que sugira adaptações com ingredientes do cotidiano."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-gold-light" />
                  <span className="text-[1.05rem] text-ink">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="relative bg-forest px-6 py-24 sm:py-32 overflow-hidden items-center justify-center flex flex-col">
        {/* BG decorative */}
        <div className="absolute top-0 right-0 h-full w-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #E9A82A 0%, transparent 60%)' }}></div>
        
        <div className="relative z-10 mx-auto max-w-3xl text-center w-full">
          <span className="font-display text-xs font-bold tracking-[0.2em] text-gold-light uppercase">Material de Estudo</span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-5xl">
            Inicie sua jornada de aprendizado em <em className="text-gold-light font-medium italic">14 dias.</em>
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Um material direto ao ponto, pensado para quem prefere entender e aplicar hábitos simples no dia a dia, sem depender de soluções complexas.
          </p>
          
          <div className="mt-12 glass-panel rounded-[2rem] p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Shimmer effect */}
            <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] animate-[shimmer_5s_infinite]" />
            
            <div className="font-display text-sm font-bold tracking-widest text-white/50 uppercase mb-2">Investimento Único</div>
            <div className="text-white/40 line-through text-lg font-medium">De R$ 97,00</div>
            <div className="mt-2 mb-6 flex items-start justify-center text-gold-light">
              <span className="mt-2 mr-2 text-2xl font-bold">R$</span>
              <span className="font-serif text-7xl font-black leading-none">37</span>
              <span className="ml-1 mt-2 text-3xl font-bold text-gold-light/80">,90</span>
            </div>
            
            <a
              href="https://pay.hotmart.com/K105529713A"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-xl bg-gradient-to-br from-gold to-gold-light px-8 py-5 font-display text-lg font-bold text-white shadow-[0_10px_30px_rgba(200,134,10,0.3)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(200,134,10,0.5)]"
            >
              Acessar o material completo &rarr;
            </a>
            
            <div className="mt-6 font-display text-xs text-white/50 uppercase tracking-widest">
              Acesso vitalício · PDF + Leitura Online
              <br className="mt-2 block" />
              <span className="text-white/80 mt-2 block">Acesso imediato após a confirmação.</span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 rounded-xl bg-white/5 p-5 border border-white/10 text-left">
              <ShieldCheck className="h-10 w-10 shrink-0 text-white opacity-80" />
              <div>
                <strong className="block text-white">Garantia Incondicional de 7 dias</strong>
                <span className="mt-1 block text-sm text-white/60">Devolvemos 100% do valor se não ficar satisfeito. Sem burocracia.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <span className="font-display text-xs font-bold tracking-[0.2em] text-gold uppercase">Dúvidas Frequentes</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-forest sm:text-4xl">
              Perguntas e <em className="text-gold font-medium italic">Respostas</em>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Como recebo o e-book após a compra?", a: "O acesso é imediato. Logo após a confirmação do pagamento, você receberá um e-mail com o link para download do PDF e para leitura online em qualquer dispositivo." },
              { q: "Preciso comprar produtos especiais ou suplementos caros?", a: "Não. As informações contidas no roteiro utilizam como base alimentos de fácil acesso, encontrados em feiras livres e mercados, focando na simplicidade da cultura rural." },
              { q: "O conteúdo é adequado para qualquer faixa etária?", a: "Sim, os conceitos de alimentação natural são apresentados de forma adaptável, voltados a adultos interessados em adotar hábitos alimentares mais atentos." },
              { q: "O conteúdo substitui o acompanhamento médico?", a: "Não. Este e-book tem caráter exclusivamente educativo. As adaptações no estilo de vida não substituem a necessidade de acompanhamento com um médico ou nutricionista qualificado." }
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl border border-cream-dark bg-cream overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-serif text-lg font-bold text-forest hover:bg-cream-dark/30 transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-[0.95rem] text-stone leading-relaxed border-t border-cream-dark/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a2313] px-6 py-12 text-center text-white/40">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="font-serif text-xl font-bold text-white/50">O Código da Longevidade Brasileira</p>
          <div className="flex flex-wrap justify-center gap-6 font-display text-sm tracking-wide">
            <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link to="/contato" className="hover:text-white transition-colors">Contato</Link>
          </div>
          <div className="text-xs leading-relaxed max-w-2xl mx-auto opacity-50 space-y-3">
            <p>
              AVISO NUTRICIONAL E MÉDICO: Este site e este e-book têm caráter exclusivamente educacional. O autor não atua como médico e o conteúdo não se destina a tratar, diagnosticar ou curar qualquer condição médica. Os resultados variam de pessoa para pessoa. Sempre consulte um médico ou profissional de saúde qualificado antes de realizar mudanças drásticas em sua dieta ou rotina de saúde.
            </p>
            <p>
              ISENÇÃO DE RESPONSABILIDADE DO FACEBOOK: Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site não é endossado pela Meta de forma alguma. FACEBOOK é uma marca comercial restrita da META PLATFORMS, INC.
            </p>
          </div>
          <p className="text-xs opacity-40 mt-4">&copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* FIXED MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-white/10 bg-forest/95 px-6 py-4 backdrop-blur-md sm:hidden">
        <div>
          <span className="block font-display text-[0.65rem] font-bold tracking-wider text-gold-light uppercase">e-book completo</span>
          <span className="font-serif text-xl font-bold text-white">R$ 37,90</span>
        </div>
        <a 
          href="https://pay.hotmart.com/K105529713A" 
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gradient-to-r from-gold to-gold-light px-5 py-3 font-display text-sm font-bold text-white shadow-lg"
        >
          Acessar Agora
        </a>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(300%) skewX(-20deg); }
        }
      `}</style>
    </div>
  );
}

