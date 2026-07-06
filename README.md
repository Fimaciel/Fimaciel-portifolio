# Filipe Maciel Portfolio

Portfolio pessoal feito com React, TypeScript, Vite, Tailwind CSS, i18next e componentes baseados em Radix/shadcn.

## Scripts

- `npm run dev`: inicia o servidor local do Vite.
- `npm run build`: gera a versão de produção.
- `npm run typecheck`: valida os tipos TypeScript.
- `npm run lint`: executa o ESLint.
- `npm run test`: roda a suíte Vitest.
- `npm run cv:pdf`: gera os PDFs dos currículos a partir dos HTMLs em `public/`.

## Organização

- `src/config`: configuração estável do portfólio, como links sociais, marca, currículo e datas.
- `src/features/portfolio`: tipos e regras de domínio específicas do portfólio.
- `src/components/layout`: componentes estruturais compartilhados, como `Navbar` e `Footer`.
- `src/components/sections`: seções da página inicial.
- `src/components/backgrounds`: elementos visuais de fundo.
- `src/components/ui`: apenas os primitives usados diretamente pelo portfólio.
- `src/i18n/locales`: conteúdo em português e inglês.
- `src/lib`: utilitários técnicos compartilhados.
- `src/pages`: páginas roteadas pelo React Router.
- `public`: assets estáticos, imagens de projetos e currículos.
- `scripts`: automações do projeto.

## Convenções

- Conteúdo editável da página fica nos arquivos JSON de `src/i18n/locales`.
- Links globais, datas e caminhos de currículo ficam em `src/config/portfolio.ts`.
- Tipos ligados ao conteúdo do portfólio ficam em `src/features/portfolio`.
- Componentes devem importar tipos de `@/features/portfolio` e configuração de `@/config/portfolio`.
