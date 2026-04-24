import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, ShieldCheck, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream font-sans text-stone pb-20">
      <header className="bg-forest px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl flex items-center gap-4">
          <Link to="/" className="text-gold-light hover:text-white transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-serif text-3xl font-bold">Contato e Suporte</h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="bg-white p-8 sm:p-12 rounded-[2rem] border border-cream-dark shadow-sm text-center">
          <h2 className="font-serif text-3xl font-bold text-forest mb-4">Como podemos te ajudar?</h2>
          <p className="text-lg mb-12 max-w-xl mx-auto">
            Tem alguma dúvida sobre o e-book, sobre seu pedido ou precisa de ajuda para realizar o pagamento? Nossa equipe está pronta para ajudar.
          </p>

          <div className="flex flex-col items-center justify-center p-8 bg-forest/5 rounded-2xl border border-forest/10 mb-12">
            <Mail className="h-12 w-12 text-forest mb-4" />
            <span className="font-display text-sm font-bold tracking-widest text-gold uppercase mb-2">E-mail de Suporte</span>
            <a href="mailto:vdlmarketdigital@gmail.com" className="font-serif text-2xl font-bold text-forest hover:text-gold transition-colors">
              vdlmarketdigital@gmail.com
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="flex gap-4">
              <Clock className="h-6 w-6 shrink-0 text-gold-light" />
              <div>
                <h3 className="font-bold text-forest mb-1">Prazo de Resposta</h3>
                <p className="text-sm">Costumamos responder a todos os e-mails em até 24 ou 48 horas úteis. Pedimos que aguarde este prazo antes de enviar uma nova solicitação.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <ShieldCheck className="h-6 w-6 shrink-0 text-gold-light" />
              <div>
                <h3 className="font-bold text-forest mb-1">Garantia</h3>
                <p className="text-sm">Se o motivo do seu contato for a solicitação da garantia de 7 dias, fique tranquilo(a). Basta enviar um e-mail informando os dados da compra e faremos o estorno integral.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
