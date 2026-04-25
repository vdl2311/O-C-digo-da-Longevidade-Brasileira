import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  BookOpen, 
  Leaf, 
  MapPin, 
  Clock, 
  FileText, 
  ListChecks, 
  Utensils 
} from 'lucide-react';
import { useState } from 'react';

const CHECKOUT_URL = "https://pay.hotmart.com/K105529713A";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 7);
  const formattedDate = deadline.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <div className="relative min-h-screen bg-[#FDF6EC] font-display text-[#3D1F0D] selection:bg-[#E8B84B]/30">
      
      {/* NOISE OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-[1000] opacity-[0.04]">
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" preserveAspectRatio="none">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* TOP BANNER */}
      <div className="bg-[#2D5016] py-3 px-4 text-center">
        <p className="text-[#FEFAF4] text-xs font-bold uppercase tracking-wider">
          🌿 Lançamento com preço especial até {formattedDate} — acesso imediato após a compra
        </p>
      </div>
      
      {/* HERO */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#1a3a08_0%,#2D5016_40%,#3d6b1a_70%,#4A7C2F_100%)] px-6 pb-20 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,146,42,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(245,230,200,0.08)_0%,transparent_50%)]"></div>
        
        <div className="relative mx-auto mt-6 w-full max-w-5xl text-center">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.9 }}
          >
            <span className="mb-6 inline-block rounded-full border border-[#E8B84B]/30 bg-[#E8B84B]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8B84B]">
              Protocolo dos Centenários Brasileiros
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-[clamp(32px,5vw,64px)] font-black leading-[1.12] text-[#FEFAF4]"
          >
            O que os velhinhos de 100 anos do interior do Brasil fazem diferente — <em className="font-style-italic text-[#E8B84B] font-medium">e a ciência finalmente explicou</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mx-auto mt-8 max-w-[720px] font-serif text-[clamp(18px,2.2vw,22px)] italic leading-[1.7] text-[#F5E6C8]/90"
          >
            Um protocolo de 14 dias baseado nos hábitos preservados por gerações nas roças de Minas, nos sertões da Bahia e nas serras do Sul — onde envelhecer com disposição ainda é a regra.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 flex flex-col items-center gap-8"
          >
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-[linear-gradient(135deg,#C9922A_0%,#E8B84B_100%)] px-12 py-5 font-display text-[18px] font-bold text-[#3D1F0D] shadow-[0_8px_32px_rgba(201,146,42,0.4),0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(201,146,42,0.55),0_4px_12px_rgba(0,0,0,0.3)] animate-[pulse-glow_3s_infinite] hover:animate-none"
            >
              QUERO CONHECER O PROTOCOLO &rarr;
            </a>

            <div className="flex flex-col items-center gap-4 text-[#F5E6C8]/90">
              <p className="text-sm border border-[#E8B84B]/30 rounded-full px-5 py-2 bg-black/20">
                📅 Preço especial de lançamento válido até: <strong className="text-[#E8B84B]">{formattedDate}</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-[13px] font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#E8B84B]" /> 100% Digital</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#E8B84B]" /> Acesso Imediato</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#E8B84B]" /> 7 Dias de Garantia</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#E8B84B]" /> Baseado em Ciência</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Custom Wave divider */}
        <svg className="absolute bottom-[-1px] left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 40C840 53.3 960 66.7 1080 66.7C1200 66.7 1320 53.3 1380 46.7L1440 40V80H0Z" fill="#FDF6EC"/>
        </svg>
      </section>

      {/* CONTINUIDADE & PERGUNTAS */}
      <section className="bg-[#FDF6EC] px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[820px] text-center"
        >
          <p className="mb-16 font-serif text-[clamp(20px,2.5vw,26px)] leading-[1.6] text-[#3D1F0D]">
            O IBGE registra mais de <strong className="text-[#A0522D]">35.000 centenários no Brasil</strong> — a maior concentração deles vive em pequenas cidades do interior, com saúde digestiva que pesquisadores ainda tentam entender.
          </p>

          <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9922A]">
            Você já parou para pensar...
          </span>
          
          <div className="mt-10 space-y-6 text-left">
            {[
              "Por que tantas pessoas de 50 anos se sentem mais cansadas do que seus avós eram?",
              "Por que no interior do Brasil ainda existem idosos de 90 anos que acordam dispostos e comem de tudo sem desconforto?",
              "Por que dietas ricas em fibras funcionam para alguns e parecem piorar o inchaço em outras pessoas?",
              "Por que o corpo de gerações anteriores parecia 'funcionar melhor' com comida simples do quintal?",
              "Por que o estresse do dia a dia moderno afeta diretamente o sistema digestivo — e o que os centenários fazem diferente?"
            ].map((q, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm border border-[#8B4513]/5"
              >
                <div className="flex shrink-0 h-8 w-8 items-center justify-center rounded-full bg-[#E8B84B]/20 text-[#C9922A] font-bold text-lg font-serif">
                  ?
                </div>
                <p className="font-serif text-[18px] leading-relaxed text-[#6B5B4E]">{q}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 mx-auto max-w-xl rounded-2xl bg-[linear-gradient(135deg,#2D5016,#4A7C2F)] px-8 py-10 text-center font-serif text-[18px] leading-[1.6] text-[#F5E6C8] shadow-xl">
             As respostas para essas perguntas estão preservadas nos hábitos de quem nunca adotou o estilo de vida moderno. <strong>A ciência levou décadas para confirmar o que eles já praticavam intuitivamente.</strong>
          </div>
        </motion.div>
      </section>

      {/* A DESCOBERTA */}
      <section className="bg-white px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1060px]"
        >
          <div className="grid gap-16 lg:items-center">
            
            <div className="text-center lg:text-left">
              <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9922A]">
                A descoberta
              </span>
              <h2 className="mb-8 font-serif text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] text-[#3D1F0D]">
                A ciência moderna encontra<br/>a <em className="text-[#A0522D] font-medium italic">sabedoria preservada nas gerações</em>
              </h2>
              
              <div className="space-y-5 font-serif text-[18px] leading-[1.7] text-[#6B5B4E]">
                <p>
                  Nas roças do interior de Minas Gerais, nos quintais do sertão baiano, nas beiradas do Rio São Francisco e nas serras catarinenses, existem homens e mulheres de 90, 100 e até mais de 110 anos que acordam dispostos, comem com prazer e nunca souberam o que é um laxante.
                </p>
                <p>
                  O que os pesquisadores descobriram ao estudar essas populações é surpreendente: o intestino dessas pessoas preserva uma <strong>diversidade microbiana que as populações urbanas foram perdendo</strong> ao longo de décadas. Uma verdadeira floresta tropical de micro-organismos que produz substâncias capazes de manter o trato digestivo funcionando com eficiência notável.
                </p>
                <div className="mt-8 rounded-lg bg-[#FEFAF4] p-5 border-l-4 border-[#C9922A]">
                  <p className="font-bold text-[#3D1F0D]">
                    Baseado nesses hábitos ancestrais — e validado pela ciência moderna da microbiota, neurogastroenterologia e imunologia intestinal — nasceu o Protocolo dos Centenários Brasileiros.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* O PROTOCOLO - 3 FASES */}
      <section className="bg-[#FEFAF4] px-6 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8B84B]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1060px] relative z-10"
        >
          <div className="text-center mb-16">
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9922A]">
              O protocolo
            </span>
            <h2 className="mb-6 font-serif text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] text-[#3D1F0D]">
              14 dias para resgatar o que<br/>gerações do interior preservaram
            </h2>
            <p className="mx-auto max-w-2xl font-serif text-[18px] text-[#6B5B4E] leading-[1.6]">
              Um plano dividido em 3 fases, combinando sabedoria ancestral brasileira com as descobertas mais recentes da ciência do microbioma.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { num: "01", days: "Dias 1 a 3", title: "A Limpeza de Choque", desc: "Remoção de resíduos acumulados usando hidratação osmótica e mucilagem ancestral — técnicas que os velhinhos do interior praticam desde sempre, sem recorrer a laxantes agressivos." },
              { num: "02", days: "Dias 4 a 10", title: "A Semeadura", desc: "Reintrodução de bactérias benéficas através de fermentados tradicionais, polifenóis nativos do Brasil e fibras estratégicas — exatamente como fazem as populações mais longevas do interior." },
              { num: "03", days: "Dias 11 a 14", title: "A Blindagem", desc: "Incorporação de ritmos circadianos, gorduras naturais que ativam a digestão e uma simples mudança de postura — herdada dos banheiros rurais — que transforma a eficiência do organismo." }
            ].map((step, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                key={i} className="group relative rounded-2xl border border-[#F5E6C8] bg-white p-8 text-left shadow-[0_4px_24px_rgba(139,69,19,0.04)] transition-all hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(139,69,19,0.08)]"
              >
                <div className="flex justify-between items-end mb-6">
                  <div className="font-serif text-[48px] font-black leading-none text-[#C9922A]/20 transition-colors group-hover:text-[#C9922A]/40">
                    {step.num}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A0522D] bg-[#FDF6EC] px-3 py-1 rounded-full">{step.days}</span>
                </div>
                <h3 className="mb-4 font-serif text-[22px] font-bold text-[#3D1F0D]">{step.title}</h3>
                <p className="font-serif text-[16px] leading-[1.6] text-[#6B5B4E]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7 HÁBITOS */}
      <section className="bg-white px-6 py-24 border-t border-[#8B4513]/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1060px]"
        >
          <div className="text-center mb-16">
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9922A]">
              O que você vai descobrir
            </span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-bold text-[#3D1F0D]">
              7 hábitos que os centenários<br/>praticam sem saber o nome científico
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: "💧", title: "O Ritual dos 30 Segundos", desc: "Como 350ml de água morna em jejum ativa o reflexo gastrocólico — o mesmo que os velhinhos do interior usam ao acordar antes do sol nascer." },
              { icon: "🌱", title: "O Guardião da Microbiota", desc: "A cepa bacteriana presente nos fermentados tradicionais brasileiros que estudos publicados em periódicos como o Nature Reviews associam à regulação do ritmo intestinal." },
              { icon: "🧠", title: "A Conexão Intestino-Cérebro", desc: "Como o Nervo Vago conecta o estado emocional ao funcionamento digestivo — e o simples gargarejo matinal de 30 segundos que os velhinhos usam para ativá-lo." },
              { icon: "🥑", title: "Gorduras que Nutrem", desc: "Por que o azeite, o babaçu e a banha artesanal nunca foram vilões no interior — e como eles estimulam a produção natural de bile, facilitando todo o processo digestivo." },
              { icon: "🪑", title: "A Postura do Interior", desc: "O simples ajuste de postura no banheiro — herdado dos banheiros rurais do Brasil — que estudos publicados no Digestive Diseases and Sciences comprovam ser mais eficiente." },
              { icon: "🌿", title: "Alimentos Vivos vs. Processados", desc: "Por que o quiabo, a coalhada natural, o chucrute artesanal e a taioba fazem o que nenhum suplemento industrializado consegue replicar completamente." }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} className="flex gap-5 rounded-2xl bg-[#FEFAF4] p-6 border border-[#8B4513]/5 hover:border-[#C9922A]/20 transition-all"
              >
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-serif text-[18px] font-bold text-[#3D1F0D] mb-2">{item.title}</h4>
                  <p className="text-[15px] leading-relaxed text-[#6B5B4E]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-[#FDF6EC] px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1060px]"
        >
          <div className="text-center mb-16">
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9922A]">
              Experiências de leitores
            </span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-bold text-[#3D1F0D]">
              O que quem já aplicou<br/>está compartilhando
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { text: "Depois de seguir o protocolo, percebi uma mudança na minha disposição matinal que não esperava tão cedo. O ritual da água morna foi o que mais me surpreendeu — algo tão simples, tão diferente do que eu estava acostumada.", author: "M. Aparecida R.", loc: "Belo Horizonte, MG" },
              { text: "O que mais me ajudou foi finalmente entender o porquê de cada coisa. Não é uma lista de regras — é uma explicação de como o corpo funciona. Mudei minha relação com a alimentação completamente.", author: "J. Carlos M.", loc: "São Paulo, SP" },
              { text: "Minha mãe tem 82 anos e já praticava quase tudo isso sem saber o nome científico. Agora eu entendo por que ela sempre foi tão ativa. Compartilhei o protocolo com toda a família.", author: "C. Ferreira", loc: "Florianópolis, SC" }
            ].map((dep, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-[#8B4513]/5 flex flex-col h-full"
              >
                <div className="text-[#E8B84B] tracking-widest text-lg mb-4">★★★★★</div>
                <p className="font-serif text-[16px] italic leading-relaxed text-[#6B5B4E] flex-grow">"{dep.text}"</p>
                <div className="mt-8 pt-4 border-t border-[#8B4513]/5">
                  <p className="font-bold text-[#3D1F0D] text-[15px]">{dep.author}</p>
                  <p className="text-[13px] text-[#A0522D]">{dep.loc}</p>
                  <p className="mt-2 text-[10px] text-[#6B5B4E]/60 uppercase">* Resultado individual. Resultados podem variar.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* OFERTA FINAL */}
      <section className="bg-white px-6 py-24 sm:py-32 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[820px] relative z-10"
        >
          <div className="mb-12 text-center">
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9922A]">
              Comece hoje
            </span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold text-[#3D1F0D] mb-4">
              O Código da Longevidade Brasileira
            </h2>
            <p className="text-[#A0522D] font-medium text-[18px]">
              Protocolo Completo dos Centenários — Acesso Digital Imediato
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border-2 border-[#C9922A] bg-white shadow-[0_20px_60px_rgba(139,69,19,0.08)]">
            <div className="grid md:grid-cols-2">
              <div className="bg-[#FEFAF4] p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#8B4513]/10">
                <h3 className="font-bold text-[#3D1F0D] text-[18px] mb-6 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#2D5016]" />
                  O que está incluído
                </h3>
                <ul className="space-y-4 text-[15px] text-[#6B5B4E]">
                  {[
                    "O guia completo com os 7 hábitos dos centenários",
                    "O Protocolo de 14 dias com cronograma dia a dia",
                    "As 3 receitas-chave do interior brasileiro",
                    "Lista de compras completa e acessível",
                    "O Ritual dos 30 Segundos passo a passo",
                    "Guia de postura ancestral detalhado",
                    "As Dicas de Ouro para fixar na geladeira",
                    "Acesso vitalício e atualizações gratuitas"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#E8B84B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center items-center text-center">
                <div className="flex items-center justify-center gap-3 text-[#6B5B4E]">
                  <span className="text-lg font-medium line-through">De R$ 97,00</span>
                </div>
                
                <div className="mt-4 flex items-start justify-center gap-1 text-[#2D5016]">
                  <span className="mt-3 text-[28px] font-bold">R$</span>
                  <span className="text-[80px] font-black leading-none shrink-0">27</span>
                </div>
                
                <p className="mt-2 text-[13px] font-bold uppercase tracking-wide text-[#A0522D]">
                  pagamento único · acesso imediato
                </p>

                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[linear-gradient(135deg,#C9922A_0%,#E8B84B_100%)] px-8 py-5 font-display text-[16px] font-bold text-[#3D1F0D] shadow-[0_8px_32px_rgba(201,146,42,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(201,146,42,0.55)] animate-[pulse-glow_3s_infinite] hover:animate-none"
                >
                  ACESSAR Agora por R$27 &rarr;
                </a>
                <p className="mt-4 text-[11px] text-[#6B5B4E] uppercase tracking-wide font-medium flex items-center gap-1">
                  🔒 Garantia de 7 Dias 
                </p>
                <div className="mt-4 flex gap-2 justify-center w-full">
                   <img src="https://img.shields.io/badge/Pagamento-100%25_Seguro-success?style=flat-square&color=2D5016" alt="Pagamento Seguro" />
                </div>
                <p className="mt-2 text-[11px] text-[#6B5B4E]">Cartão, Pix e Boleto</p>

              </div>
            </div>
            
            {/* GARANTIA */}
            <div className="border-t border-[#8B4513]/10 bg-[#F5E6C8]/40 px-8 py-6">
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:text-left">
                <div className="flex flex-col items-center justify-center shrink-0 w-20 h-20 bg-[linear-gradient(135deg,#2D5016,#4A7C2F)] rounded-full text-white shadow-lg text-center leading-none">
                  <span className="text-2xl font-black">7</span>
                  <span className="text-[8px] uppercase tracking-widest font-bold">Dias de<br/>Garantia</span>
                </div>
                <div>
                  <strong className="mb-1 block font-serif text-[18px] font-bold text-[#3D1F0D]">Risco Zero para Você</strong>
                  <span className="text-[14px] leading-relaxed text-[#6B5B4E]">Se em 7 dias você não gostar do conteúdo por qualquer motivo, basta enviar um e-mail e devolvemos 100% do seu investimento — sem perguntas, sem burocracia. O risco é completamente nosso.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FEFAF4] px-6 py-24 border-t border-[#8B4513]/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[820px]"
        >
          <div className="mb-14 text-center">
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9922A]">Dúvidas frequentes</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-bold text-[#3D1F0D]">Perguntas e respostas</h2>
          </div>

          <div className="divide-y divide-[#8B4513]/10 border-y border-[#8B4513]/10 border-t mt-8">
            {[
              { q: "Como eu acesso o protocolo?", a: "O acesso é mediato após a aprovação do pagamento. Você receberá um e-mail com as instruções para baixar o guia em formato digital (PDF)." },
              { q: "Vou precisar comprar ingredientes muito caros?", a: "Não. Todos os alimentos mencionados no protocolo são simples, acessíveis e fáceis de encontrar em qualquer feira ou mercado local." },
              { q: "Isso serve para mim que não tenho tempo na rotina?", a: "Sim! Os 7 hábitos descritos são ajustes muito pequenos na sua rotina (como o Ritual de 30 Segundos pela manhã), criados para não tomarem o seu tempo." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional e risco zero. Se o material não for o que você esperava, garantimos o reembolso de 100% do valor pago." }
            ].map((faq, i) => (
              <div key={i} className="py-2">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="font-serif text-[18px] font-bold text-[#3D1F0D]">{faq.q}</span>
                  <ChevronDown className={`h-6 w-6 shrink-0 text-[#2D5016] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <p className="border-l-2 border-[#E8B84B] pl-4 font-serif text-[16px] italic leading-[1.7] text-[#6B5B4E]">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FECHAMENTO */}
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#1a3a08_0%,#2D5016_50%,#4A7C2F_100%)] px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,146,42,0.15)_0%,transparent_70%)]"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-[760px]"
        >
          <h2 className="mb-6 font-serif text-[clamp(28px,3.5vw,40px)] font-bold leading-[1.15] text-[#FEFAF4]">
            O caminho que os centenários já percorrem há gerações está disponível para você hoje.
          </h2>
          <p className="mx-auto mb-12 max-w-[540px] font-serif text-[18px] leading-[1.65] text-[#F5E6C8]/90">
            14 dias. Hábitos simples. Uma sabedoria que atravessou gerações no interior do Brasil.
          </p>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[linear-gradient(135deg,#C9922A_0%,#E8B84B_100%)] px-12 py-5 font-display text-[18px] font-bold text-[#3D1F0D] shadow-[0_8px_32px_rgba(201,146,42,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(201,146,42,0.55)] animate-[pulse-glow_3s_infinite] hover:animate-none"
          >
            SIM, QUERO O PROTOCOLO DOS CENTENÁRIOS &rarr;
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a3a08] px-6 py-12 text-center text-[#F5E6C8]/60 text-[12px] leading-relaxed">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-6">© 2026 O Código da Longevidade Brasileira. Todos os direitos reservados.</p>
          <p className="mb-6">Aviso importante: Este produto é de natureza exclusivamente educativa e informativa. As informações contidas neste guia são baseadas em hábitos alimentares tradicionais e referências científicas públicas. Não constituem diagnóstico, prescrição ou tratamento médico de qualquer natureza. Consulte sempre um profissional de saúde habilitado antes de realizar mudanças significativas na sua alimentação ou rotina. Os resultados apresentados em depoimentos são individuais e podem variar.</p>
          <div className="flex flex-wrap justify-center gap-4 underline opacity-80">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Reembolso</a>
            <a href="#">Contato</a>
          </div>
        </div>
      </footer>

      {/* MOBILE FLOATING CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 left-0 right-0 z-[998] block border-t border-white/10 bg-[#2D5016] p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.25)] sm:hidden"
      >
        <a 
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#C9922A_0%,#E8B84B_100%)] py-4 text-[16px] font-bold text-[#3D1F0D] shadow-[0_8px_32px_rgba(201,146,42,0.4)] animate-[pulse-glow_3s_infinite]"
        >
          Acessar por R$27 — Garantia de 7 Dias &rarr;
        </a>
      </motion.div>

    </div>
  );
}
