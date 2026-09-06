import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acesso | Nivor Cardápio Digital",
  description: "Página oficial de acesso e ativação da assinatura Nivor Cardápio Digital.",
  robots: { index: false, follow: true },
};

export default function AcessoPage() {
  return (
    <main className="accessPage">
      <section className="accessShell" aria-label="Acesso ao Nivor Cardápio Digital">
        <div className="accessBrand">
          <Image src="/screens/logo-nivor.webp" alt="Nivor Soluções Digitais" width={78} height={78} priority />
          <div><strong>NIVOR</strong><span>Soluções Digitais</span></div>
        </div>
        <div className="accessCard">
          <span className="accessBadge">Entrega oficial da assinatura</span>
          <h1>Acesso ao <em>Nivor Cardápio Digital</em></h1>
          <p className="accessLead">O Nivor é uma plataforma online para estabelecimentos gerenciarem seu cardápio digital, produtos, categorias, disponibilidade dos itens e o fluxo de pedidos. A liberação do ambiente acontece após a confirmação da assinatura.</p>
          <div className="accessFlow">
            <article><span>1</span><b>Assinatura confirmada</b><p>Após a aprovação do pagamento, iniciamos o processo de ativação do estabelecimento.</p></article>
            <article><span>2</span><b>Configuração do Nivor</b><p>O ambiente é preparado com os dados e a identidade visual do estabelecimento.</p></article>
            <article><span>3</span><b>Acesso ao painel</b><p>O cliente recebe o acesso ao painel administrativo para gerenciar o próprio cardápio.</p></article>
            <article><span>4</span><b>Assinatura ativa</b><p>O acesso à plataforma é mantido enquanto a assinatura mensal estiver ativa.</p></article>
          </div>
          <div className="accessNote"><strong>Importante:</strong> esta página é o ponto de entrega e orientação de acesso ao serviço. O Nivor funciona 100% online e não exige instalação de aplicativo ou download de arquivos.</div>
          <div className="accessActions">
            <a className="accessPrimary" href="https://wa.me/5581985959454?text=Ol%C3%A1%2C%20assinei%20o%20Nivor%20Card%C3%A1pio%20Digital%20e%20quero%20iniciar%20minha%20ativa%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">Solicitar ativação / suporte</a>
            <a href="https://cardapio-digital-eight-sigma.vercel.app/nivor-buguer" target="_blank" rel="noopener noreferrer">Ver demonstração do cardápio</a>
            <Link href="/">Conhecer o Nivor</Link>
          </div>
        </div>
        <p className="accessFooter">Nivor Soluções Digitais · Plataforma online de cardápio digital</p>
      </section>
    </main>
  );
}
