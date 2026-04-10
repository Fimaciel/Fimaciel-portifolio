# Fimaciel Portfolio

Documento de referência para humanos e para **assistentes de IA** (Cursor, Copilot, etc.): resume o que é o repositório, onde mexer e o que não esperar daqui.

---

## Resumo em uma linha

SPA estática em **Vite + React + TypeScript**: portfólio pessoal de **Filipe Maciel Lopes** (dev full stack), conteúdo em **PT/EN** via JSON, sem backend no projeto.

---

## Contexto para IA (facts)

- **Tipo de aplicação:** front-end apenas; build gera assets estáticos (`vite build`). Não há API, base de dados nem servidor de aplicação neste repo.
- **Roteamento:** `react-router-dom` com rota `/` (página principal) e `*` (`NotFound`). Não há rotas por secção; a navegação é por âncoras (`#home`, `#about`, `#projects`, `#skills`, `#experience`, `#education`, `#contact`).
- **Estado remoto:** `@tanstack/react-query` está no `App` mas **não** é usado para fetch neste código; alterações de conteúdo não devem assumir React Query como padrão salvo passar a existir API.
- **Contacto:** secção de contato usa só links externos (ex.: LinkedIn, GitHub). Não há formulário nem integração de email no código.
- **Alias de import:** `@` → `src/` (ver `vite.config.ts`).
- **Nome no `package.json`:** ainda pode aparecer como template (`vite_react_shadcn_ts`); o projeto real é o portfólio Fimaciel.

---

## Stack técnica (site)

| Área | Tecnologias |
|------|-------------|
| Runtime / build | Node, Vite 5, `@vitejs/plugin-react-swc` |
| UI | React 18, TypeScript, Tailwind CSS, `tailwindcss-animate`, `class-variance-authority`, `clsx`, `tailwind-merge` |
| Componentes | padrão shadcn + Radix UI (vários pacotes `@radix-ui/*`) |
| Animação | `framer-motion` |
| i18n | `i18next`, `react-i18next`, `i18next-browser-languagedetector` |
| Tema | `next-themes` (claro/escuro, chave `portfolio-theme`) |
| Roteamento | `react-router-dom` |
| Ícones | `lucide-react` |
| Toasts | `sonner` + toasts shadcn |

---

## Estrutura relevante

```
src/
  main.tsx              # Entrada React
  App.tsx               # Providers (Query, Theme, Tooltip, Toaster, Router), rotas
  index.css             # Estilos globais / tokens
  pages/
    Index.tsx           # Página única: monta todas as secções
    NotFound.tsx        # 404
  components/
    layout/             # Navbar, Footer
    sections/           # Hero, About, Projects, Skills, Experience, Education, Contact
    ui/                 # Componentes shadcn
    theme-provider.tsx
  lib/
    i18n.ts             # init i18next + import pt/en JSON
  i18n/locales/
    pt.json             # Textos PT (fonte principal de conteúdo)
    en.json             # Textos EN
index.html              # Meta SEO base (título/descrição em PT-BR no HTML)
vite.config.ts          # Alias `@`, porta dev 8080
```

Para **editar textos** do site, priorizar `src/i18n/locales/pt.json` e `en.json` (estrutura espelhada entre idiomas).

---

## Fluxo da aplicação

1. `main.tsx` monta `App` e importa `index.css`.
2. `App.tsx` importa `@/lib/i18n` (efeito lateral: i18n pronto antes da árvore).
3. Rota `/` renderiza `Index`: ordem fixa Navbar → secções → Footer.
4. Secções usam `useTranslation()` e chaves como `hero.*`, `projects.*`, etc.

---

## Limitações explícitas (não inferir)

- Não há autenticação, painel admin nem CMS.
- Não há testes de negócio significativos no repo (há exemplo mínimo com Vitest).
- O perfil técnico descrito no site (Laravel, Python, PostgreSQL, etc.) é **conteúdo editorial** no JSON, não implica backend neste repositório.

---

## Comandos

```bash
npm install
npm run dev      # dev server (porta 8080 no vite.config)
npm run build    # saída em dist/
npm run preview  # pré-visualizar build
npm run lint
npm test         # vitest
```

---

## O que é este projeto (visão humana)

É o código-fonte do **site portfólio pessoal**: vitrine de trajetória, projetos, skills, experiência e formação, com troca de idioma e tema, pensado para recrutadores e outros devs. O alinhamento de stack no texto (PHP/Laravel, Python, etc.) reflete o autor; o **código deste repo** é sobretudo front-end React.
