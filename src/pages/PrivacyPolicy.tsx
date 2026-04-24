import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream font-sans text-stone pb-20">
      <header className="bg-forest px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl flex items-center gap-4">
          <Link to="/" className="text-gold-light hover:text-white transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-serif text-3xl font-bold">Política de Privacidade</h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 space-y-8 leading-relaxed">
        <section>
          <p>
            A sua privacidade é importante para nós. É política do <strong>Código da Longevidade Brasileira</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">1. Coleta de Informações</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (como a entrega do e-book). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p className="mt-4">
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">2. Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou quando necessário para provedores de pagamento processarem sua transação de forma segura.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">3. Links Externos</h2>
          <p>
            O nosso site pode ter links para sites externos (como gateways de pagamento) que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">4. Seus Direitos</h2>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">5. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através da nossa página de <Link to="/contato" className="text-gold font-bold hover:underline">Contato</Link> ou diretamente pelo e-mail: <strong>vdlmarketdigital@gmail.com</strong>.
          </p>
        </section>
        
        <p className="text-sm opacity-70 pt-8">
          Esta política é efetiva a partir de Abril de 2026.
        </p>
      </main>
    </div>
  );
}
