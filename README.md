# IRÁ — demonstração visual de delivery multi-segmento

MVP visual (frontend) de um delivery local — restaurantes, farmácias, mercados
e "todo tipo de coisa" — construído com **Next.js 15 (App Router)**, **React**,
**TypeScript**, **Tailwind CSS** e componentes no estilo **shadcn/ui**. Todos
os dados são estáticos (mock), sem banco de dados ou APIs externas.

## Identidade

- **Nome:** IRÁ — curto, vem de "Irará", também lembra "ir" / "vou pedir".
- **Paleta:** Verde Mandioca `#3FA34D` (ações), Azul Irará `#0E5AA7`
  (navegação/confiança), Creme Farinha `#F5EBD7` (fundo), Terracota Cerâmica
  `#C66A3D` (destaques) e Grafite `#2D2D2D` (texto/interface).
- **Tipografia:** Poppins (títulos) e Manrope (texto), conforme o manual de marca.
- **Categorias:** Restaurantes, Sorveterias, Farmácias, Mercados, Bebidas, Pet Shops
  e Outros — cada uma com ícone e cor próprios, usadas para filtrar a home do cliente.
- Interface inspirada em iFood, Uber Eats, Airbnb e Apple: bastante espaço em
  branco, cards limpos, categorias retas (sem elementos "tortos").

## Login de demonstração (sem autenticação real)

Não há backend nem validação real — é só para mostrar que o app terá 3
perfis de acesso. Na tela inicial (`/`), entre com:

| Usuário | Senha | Área |
|---|---|---|
| `user1` | `1234` | Cliente |
| `user2` | `1234` | Estabelecimento |
| `user3` | `1234` | Entregador |

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) — você cai na tela de login.

## Deploy no Vercel

### Opção 1 — pelo site (mais simples)
1. Suba esta pasta para um repositório no GitHub (ou GitLab/Bitbucket).
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. O Vercel detecta automaticamente que é um projeto Next.js — build command
   `next build`, sem configuração extra.
4. Clique em **Deploy**.

### Opção 2 — pela CLI
```bash
npm install -g vercel
vercel        # segue o assistente para criar o projeto
vercel --prod # publica em produção
```

Não é necessário configurar nenhuma variável de ambiente.

## Áreas do app

- **Login** (`/`) — seleção de perfil + usuário/senha (demonstrativo).
- **Cliente** (`/cliente`) — busca, catálogo por categoria, carrinho e
  checkout simulado. Funciona para restaurante, farmácia ou mercado.
- **Estabelecimento** (`/estabelecimento`) — painel com pedidos recebidos
  (avanço de status: Recebido → Em preparo → Pronto → Saiu para entrega →
  Entregue), toggle de loja aberta/fechada e gestão de disponibilidade do
  catálogo.
- **Entregador** (`/entregador`) — perfil, ganhos do dia, entrega atual e
  lista de entregas disponíveis para aceitar.

Uma barra no topo (`AreaSwitcher`) permite alternar entre as 3 áreas durante
a demonstração, já que não há autenticação real bloqueando o acesso direto
pela URL.

## Estrutura do projeto

```
app/
  layout.tsx                 # layout raiz + metadata + AreaSwitcher
  page.tsx                    # tela de login (demonstrativa)
  cliente/page.tsx             # área do cliente: lista → estabelecimento → carrinho → checkout
  estabelecimento/page.tsx      # área do estabelecimento: pedidos + catálogo
  entregador/page.tsx            # área do entregador: entregas + ganhos
  globals.css                     # Tailwind + fontes (Poppins / Manrope)
components/
  AreaSwitcher.tsx                # barra para alternar entre áreas + sair
  Logo.tsx                          # ícone da moto + wordmark IRÁ (manual de marca)
  Header.tsx                       # logo IRÁ, busca e ícone do carrinho
  CategoryGrid.tsx                  # grade de categorias (ícone + cor) usada na home
  BottomNav.tsx                      # navegação inferior mobile (Início/Buscar/...)
  EstablishmentCard.tsx             # card da lista de estabelecimentos
  EstablishmentBanner.tsx            # banner + info do estabelecimento
  EstablishmentPage.tsx               # composição: banner + categorias + produtos
  CategorySection.tsx                  # abas de categoria (retas, dinâmicas por segmento)
  ProductCard.tsx                       # card de produto com botão "Adicionar"
  Cart.tsx                               # carrinho lateral (quantidade, remover, totais)
  CheckoutModal.tsx                       # formulário de finalização + mensagem de sucesso
  establishment-area/
    OrderCard.tsx                          # card de pedido com avanço de status
    MenuItemRow.tsx                          # linha de produto com toggle de disponibilidade
  delivery-area/
    DeliveryCard.tsx                          # card de entrega disponível/atual
    EarningsSummary.tsx                         # resumo de entregas e ganhos do dia
  ui/
    button.tsx, input.tsx                        # primitivos estilo shadcn/ui
lib/
  types.ts                                        # tipos (Establishment, Product, Order...)
  mock-data.ts                                     # estabelecimentos, catálogos, pedidos, entregador
  categories.ts                                     # categorias (ícone + cor) do manual de marca
  utils.ts                                          # cn() e formatação de moeda (currency)
```

## Próximos passos (fora do escopo deste MVP)

- Autenticação real (NextAuth/Auth.js) no lugar do login demonstrativo
- Banco de dados (Prisma + Postgres)
- API real para estabelecimentos, produtos e pedidos
- Dashboard administrativo com múltiplos estabelecimentos por segmento
- Persistência real do carrinho e dos pedidos
