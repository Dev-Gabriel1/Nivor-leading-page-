# Nivor Cardápio Digital — Landing Page

Landing page comercial construída em Next.js + React + TypeScript para vender o Nivor Cardápio Digital.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Configuração

Copie `.env.example` para `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://SEU-PROJETO.vercel.app
NEXT_PUBLIC_CHECKOUT_URL=https://LINK-DO-CHECKOUT
```

Enquanto `NEXT_PUBLIC_CHECKOUT_URL` estiver vazio, os botões de compra levam para a seção de preço.

## Publicar na Vercel

1. Crie um repositório no GitHub e envie todos os arquivos deste projeto.
2. Na Vercel, clique em **Add New > Project** e importe o repositório.
3. Framework: Next.js (detectado automaticamente).
4. Adicione as variáveis `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_CHECKOUT_URL` quando tiver o checkout.
5. Faça o deploy.
6. Depois do primeiro deploy, atualize `NEXT_PUBLIC_SITE_URL` com a URL final da Vercel e redeploy para canonical, sitemap e Open Graph ficarem corretos.

## SEO implementado

- Metadata completa (title, description, canonical)
- Open Graph e Twitter Card
- Imagem social dinâmica em `/opengraph-image`
- `robots.txt`
- `sitemap.xml`
- Dados estruturados Schema.org de `SoftwareApplication`
- Dados estruturados `FAQPage`
- HTML semântico e headings organizados
- Imagens via `next/image`
- Layout mobile-first e responsivo
- Sem dependência de fontes externas

## Próximos ajustes recomendados

- Conectar checkout da Kirvano/Eduzz/Hotmart/Ticto
- Instalar analytics (GA4, Plausible ou Vercel Analytics)
- Adicionar eventos de conversão nos CTAs
- Inserir depoimentos apenas quando houver clientes reais
- Adicionar domínio próprio quando fizer sentido comercial
