# Ateliê AnaCraft — Store

Vitrine digital simples e objetiva para um ateliê artesanal. Este projeto foi separado do painel administrativo para manter uma experiência pública leve, visual e fácil de explicar no portfólio.

## O que existe aqui

- Home com apresentação do ateliê.
- Catálogo com filtro por categoria.
- Página individual de produto.
- CTA para encomenda pelo Instagram.
- Área simples do proprietário para cadastrar, editar e remover produtos.
- Persistência do catálogo em `localStorage`, sem banco de dados.
- Layout responsivo para desktop e mobile.
- PWA instalável no celular, com manifesto, ícone próprio e cache inicial.
- Identidade visual AnaCraft com rosa artesanal, off-white e tipografia editorial.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router
- Lucide React
- CSS com tokens visuais e media queries responsivas

## Executar localmente

```bash
pnpm install
pnpm dev
```

Depois, acesse `http://localhost:5173`.

Área administrativa:

```txt
http://localhost:5173/login
Senha de demonstração: anacraft123
```

Os produtos criados no painel ficam salvos no navegador atual. A versão com vendas, relatórios, autenticação real e banco de dados será mantida no projeto separado `anacraft-manager`.

## Instalar no celular

Abra a URL publicada no navegador do celular e escolha **Adicionar à tela inicial**. No Android, o Chrome exibirá a opção de instalar o AnaCraft; no iPhone, use **Compartilhar → Adicionar à Tela de Início**.

## Estrutura

```text
src/
├── App.tsx       # rotas, páginas públicas e painel simples
├── main.tsx      # entrada da aplicação
└── styles.css    # sistema visual e responsividade
```

Este projeto foi definido, implementado e revisado por mim com apoio do ChatGPT e do Codex para estudar alternativas, investigar erros e revisar decisões. A direção visual, o escopo e os ajustes finais foram escolhidos durante o desenvolvimento.
