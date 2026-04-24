import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-cream font-sans text-stone pb-20">
      <header className="bg-forest px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl flex items-center gap-4">
          <Link to="/" className="text-gold-light hover:text-white transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-serif text-3xl font-bold">Termos de Uso</h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 space-y-8 leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">1. Termos</h2>
          <p>
            Ao acessar ao site <strong>Código da Longevidade Brasileira</strong>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">2. Uso de Licença</h2>
          <p>
            É concedida permissão para o uso pessoal e não comercial do material (e-book e conteúdos relacionados). Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você <strong>não pode</strong>:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Modificar ou copiar os materiais;</li>
            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software ou conteúdo contido no site;</li>
            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">3. Isenção de Responsabilidade</h2>
          <p className="mb-4">
            Os materiais no site <strong>Código da Longevidade Brasileira</strong> são fornecidos 'como estão'. Não oferecemos garantias, expressas ou implícitas, e, por este meio, isentamo-nos e negamos todas as outras garantias.
          </p>
          <p>
            <strong>AVISO MÉDICO IMPORTANTE:</strong> Este site e o e-book têm caráter exclusivamente educacional e informativo. O conteúdo não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados variam de indivíduo para indivíduo. Nunca desconsidere conselhos médicos profissionais ou demore em buscá-los por causa de algo que tenha lido neste site. Sempre consulte um médico ou profissional de saúde qualificado antes de iniciar a aplicação de qualquer material aqui descrito.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">4. Limitações</h2>
          <p>
            Em nenhum caso o <strong>Código da Longevidade Brasileira</strong> ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais, mesmo que notificados da possibilidade de tais danos.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">5. Precisão dos materiais</h2>
          <p>
            Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. Não garantimos que qualquer material em nosso site seja preciso, completo ou atual. Podemos fazer alterações nos materiais contidos no site a qualquer momento, sem aviso prévio.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">6. Modificações e Foro</h2>
          <p>
            Podemos revisar estes termos de serviço a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado pela versão atual desses termos de serviço.
          </p>
        </section>
        
        <p className="text-sm opacity-70 pt-8">
          Estes termos são efetivos a partir de Abril de 2026.
        </p>
      </main>
    </div>
  );
}
