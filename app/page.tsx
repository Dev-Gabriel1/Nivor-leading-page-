import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Check, ChevronRight, Clock3, LayoutDashboard, MessageCircle, PackageOpen, Palette, Search, ShoppingBag, Smartphone, Sparkles, Tags, Zap, type LucideIcon } from "lucide-react";
import { ScreenCard } from "@/components/ScreenCard";

const demoUrl = "https://cardapio-digital-eight-sigma.vercel.app/nivor-buguer";
const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#plano";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nivor-cardapio.vercel.app";


const features: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: ShoppingBag, title: "Cardápio visual", text: "Produtos com foto, descrição, preço e promoção em uma apresentação profissional." },
  { icon: Search, title: "Busca e categorias", text: "Seu cliente encontra mais rápido o que quer, sem rolar uma lista infinita." },
  { icon: Tags, title: "Preço e disponibilidade", text: "Atualize produtos, valores, categorias e disponibilidade pelo painel." },
  { icon: MessageCircle, title: "Fluxo de pedido", text: "Organize a escolha do cliente e conduza o pedido até o canal de atendimento." },
  { icon: PackageOpen, title: "Gestão de produtos", text: "Cadastre e edite seu catálogo sem depender de designer para cada mudança." },
  { icon: BarChart3, title: "Visão da operação", text: "Acompanhe indicadores do cardápio e tenha uma visão mais clara do movimento." },
];

const faq = [
  ["Preciso instalar algum aplicativo?", "Não. O cardápio funciona pelo navegador e pode ser acessado pelo celular através de um link."],
  ["O cliente consegue fazer o pedido pelo celular?", "Sim. Ele navega pelo cardápio, escolhe os itens e segue o fluxo de pedido configurado pelo estabelecimento."],
  ["Consigo alterar produtos e preços?", "Sim. O painel permite gerenciar produtos, categorias, disponibilidade, preços e outras informações do cardápio."],
  ["Existe taxa de implantação?", "Nesta oferta, não. Você paga apenas R$ 79,90 por mês."],
  ["Tem fidelidade?", "Não. Você pode cancelar quando quiser, conforme as condições apresentadas no momento da contratação."],
  ["Posso ver como funciona antes de assinar?", "Sim. Há uma demonstração pública do cardápio para você testar a experiência antes de contratar."],
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nivor Cardápio Digital",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description: "Cardápio digital para restaurantes, hamburguerias, pizzarias, lanchonetes e operações de delivery, com painel de gestão.",
  offers: {
    "@type": "Offer",
    price: "79.90",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: siteUrl,
  },
  publisher: { "@type": "Organization", name: "Nivor Soluções Digitais" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="nav-shell" aria-label="Navegação principal">
        <div className="container nav-inner">
          <Link href="#topo" className="brand" aria-label="Nivor Cardápio Digital - início">
            <Image src="/screens/logo-nivor.webp" width={48} height={48} alt="Logo da Nivor" className="brand-logo" priority />
            <span><strong>NIVOR</strong><small>Cardápio Digital</small></span>
          </Link>
          <div className="nav-links">
            <Link href="#recursos">Recursos</Link>
            <Link href="#como-funciona">Como funciona</Link>
            <Link href="#plano">Preço</Link>
          </div>
          <Link href={checkoutUrl} className="button button-small">Começar agora <ArrowRight size={16} /></Link>
        </div>
      </nav>

      <section className="hero" id="topo">
        <div className="hero-glow hero-glow-a" /><div className="hero-glow hero-glow-b" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16} /> Seu negócio merece mais do que uma lista de preços</div>
            <h1>Um cardápio que faz sua <span>marca parecer grande.</span></h1>
            <p className="hero-lead">Apresente seus produtos com uma experiência profissional, organize pedidos e gerencie o cardápio em um painel simples — sem depender de PDF, foto ou mensagem confusa no WhatsApp.</p>
            <div className="hero-actions">
              <Link href={checkoutUrl} className="button button-primary">Quero meu cardápio <ArrowRight size={19} /></Link>
              <a href={demoUrl} target="_blank" rel="noreferrer" className="button button-ghost">Ver demonstração <ChevronRight size={18} /></a>
            </div>
            <div className="hero-points">
              <span><Check size={16} /> Sem taxa de implantação</span>
              <span><Check size={16} /> Cancele quando quiser</span>
              <span><Check size={16} /> Feito para celular</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Prévia do Cardápio Digital Nivor">

            <ScreenCard src="/screens/cardapio-home.webp" alt="Tela inicial do cardápio digital Nivor" priority className="hero-phone-main" />
            <ScreenCard src="/screens/painel-dashboard.webp" alt="Painel administrativo do cardápio Nivor" priority className="hero-phone-back" />
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="container proof-grid">
          <div><Smartphone /><span><strong>100% online</strong><small>Abra pelo celular, sem app</small></span></div>
          <div><Palette /><span><strong>Sua identidade</strong><small>Cardápio com cara de marca</small></span></div>
          <div><LayoutDashboard /><span><strong>Painel de gestão</strong><small>Controle em um só lugar</small></span></div>
          <div><Zap /><span><strong>Atualização rápida</strong><small>Altere seu catálogo quando quiser</small></span></div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container two-col">
          <div>
            <span className="section-kicker">Menos improviso. Mais venda.</span>
            <h2>Seu cliente decide em segundos se continua olhando ou fecha a conversa.</h2>
          </div>
          <div className="problem-list">
            {["Cardápio em PDF que demora para abrir e fica desatualizado.", "Fotos soltas no WhatsApp e preços espalhados na conversa.", "Cliente perguntando o que tem, quanto custa e se está disponível.", "Mudança de preço exigindo refazer arte, PDF ou postagem."].map((t) => <div key={t}><span className="problem-x">×</span><p>{t}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="recursos">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">Tudo no mesmo fluxo</span>
            <h2>Da vitrine ao pedido, sem perder a identidade do seu negócio.</h2>
            <p>Uma experiência pensada para quem compra no celular e para quem precisa gerenciar a operação sem complicação.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <div className="icon-wrap"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="container showcase-grid">
          <div className="showcase-copy sticky-copy">
            <span className="section-kicker">Experiência do cliente</span>
            <h2>Seu produto merece ser desejado antes mesmo da primeira mordida.</h2>
            <p>Fotos grandes, preços claros, promoções visíveis e uma navegação feita para tela pequena. A ideia é simples: facilitar a escolha e reduzir atrito até o pedido.</p>
            <ul className="check-list"><li><Check /> Visual moderno e responsivo</li><li><Check /> Produtos em destaque</li><li><Check /> Carrinho organizado</li><li><Check /> Observações e detalhes do item</li></ul>
            <a href={demoUrl} target="_blank" rel="noreferrer" className="text-link">Abrir demonstração real <ArrowRight size={18} /></a>
          </div>
          <div className="screen-gallery">
            <ScreenCard src="/screens/cardapio-produtos.webp" alt="Produtos no cardápio digital Nivor" />
            <ScreenCard src="/screens/produto-detalhe.webp" alt="Detalhes de produto no cardápio digital Nivor" />
            <ScreenCard src="/screens/carrinho.webp" alt="Carrinho do cardápio digital Nivor" />
          </div>
        </div>
      </section>

      <section className="section panel-section">
        <div className="container panel-grid">
          <div className="panel-collage">
            <div className="panel-image panel-a"><Image src="/screens/painel-dashboard.webp" alt="Dashboard do painel Nivor" width={900} height={1948} /></div>
            <div className="panel-image panel-b"><Image src="/screens/painel-pedidos.webp" alt="Gestão de pedidos no painel Nivor" width={900} height={1948} /></div>
          </div>
          <div className="showcase-copy">
            <span className="section-kicker">Por trás do cardápio</span>
            <h2>Um painel que você consegue usar no próprio celular.</h2>
            <p>Você não precisa entrar em um sistema pesado para fazer uma alteração simples. O painel concentra o que importa para manter seu cardápio atualizado e acompanhar a operação.</p>
            <div className="mini-features">
              <div><Clock3 /><span><strong>Tempo real</strong><small>Atualize informações do catálogo sem refazer seu cardápio.</small></span></div>
              <div><PackageOpen /><span><strong>Produtos</strong><small>Edite itens, preços e disponibilidade.</small></span></div>
              <div><Tags /><span><strong>Categorias</strong><small>Mantenha o cardápio organizado para o cliente.</small></span></div>
              <div><BarChart3 /><span><strong>Visão geral</strong><small>Acompanhe os indicadores disponíveis no painel.</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="como-funciona">
        <div className="container">
          <div className="section-heading centered"><span className="section-kicker">Começar é simples</span><h2>Do cadastro ao seu novo cardápio em três etapas.</h2></div>
          <div className="steps-grid">
            <div className="step"><span>01</span><h3>Você contrata</h3><p>Escolhe o plano e envia as informações necessárias para configuração do seu estabelecimento.</p></div>
            <div className="step"><span>02</span><h3>Seu espaço é configurado</h3><p>Preparamos a estrutura inicial para você começar com uma apresentação profissional.</p></div>
            <div className="step"><span>03</span><h3>Você divulga seu link</h3><p>Coloque na bio, no WhatsApp, no Instagram e onde seus clientes já estão.</p></div>
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="plano">
        <div className="container pricing-wrap">
          <div className="pricing-copy"><span className="section-kicker">Preço simples</span><h2>Mais profissional que PDF. Mais acessível que sistemas enormes.</h2><p>Uma assinatura direta, sem taxa de implantação nesta oferta e sem amarrar seu negócio a uma fidelidade longa.</p></div>
          <div className="pricing-card">
            <div className="pricing-badge">PLANO COMPLETO</div>
            <p className="price-label">Nivor Cardápio Digital</p>
            <div className="price"><span>R$</span><strong>79</strong><sup>,90</sup><em>/mês</em></div>
            <div className="daily">menos de R$ 2,70 por dia</div>
            <ul>
              <li><Check /> Cardápio digital responsivo</li><li><Check /> Painel administrativo</li><li><Check /> Produtos e categorias</li><li><Check /> Atualização de preços e disponibilidade</li><li><Check /> Fluxo de pedidos</li><li><Check /> Sem taxa de implantação</li><li><Check /> Cancele quando quiser</li>
            </ul>
            <Link href={checkoutUrl} className="button button-primary button-wide">Quero começar agora <ArrowRight size={19} /></Link>
            {!process.env.NEXT_PUBLIC_CHECKOUT_URL && <small className="checkout-note">Checkout será conectado quando a oferta for cadastrada na plataforma.</small>}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-wrap">
          <div className="section-heading"><span className="section-kicker">Dúvidas frequentes</span><h2>Antes de começar, você pode querer saber.</h2></div>
          <div className="faq-list">
            {faq.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-card">
          <div><span className="section-kicker">Seu próximo cardápio começa aqui</span><h2>Deixe o improviso para trás e apresente seu negócio do jeito que ele merece.</h2></div>
          <div className="final-actions"><Link href={checkoutUrl} className="button button-primary">Começar por R$ 79,90/mês <ArrowRight size={19} /></Link><a href={demoUrl} target="_blank" rel="noreferrer" className="button button-ghost">Testar demonstração</a></div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="brand"><Image src="/screens/logo-nivor.webp" width={42} height={42} alt="Logo da Nivor" className="brand-logo" /><span><strong>NIVOR</strong><small>Soluções Digitais</small></span></div>
          <p>© {new Date().getFullYear()} Nivor Soluções Digitais. Todos os direitos reservados.</p>
          <a href={demoUrl} target="_blank" rel="noreferrer">Ver demonstração</a>
        </div>
      </footer>
    </main>
  );
}
