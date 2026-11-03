# Plano — projetos.html

- **Rota/arquivo:** `projetos.html`
- **data-page:** `projetos`
- **Status:** concluído
- **Objetivo:** reunir os cinco projetos autorais em uma página de arquivo, com filtros, roster selecionável e dossiê completo.
- **Componentes:** header HUD compartilhado, page hero, toolbar de filtros, roster com 5 cartuchos, dossiê dinâmico, bloco “como ler o dossiê”, CTA, footer compartilhado.
- **Seções e ordem:** page hero → mission select (filtros + roster + dossiê) → como ler o dossiê → CTA para contato.
- **Conteúdo:** os mesmos cinco projetos da home, com dossiê e link para `projeto.html?p=...`. Não citar marcas externas.
- **Interações:** filtros `all/desktop/web/ferramenta/midia`, seleção por clique e teclado (setas/Home/End), atualização do dossiê, cópia de resumo, link para GitHub e link para a página completa do projeto.
- **Tokens 60-30-10:** base `#070b14`, superfícies `#101828` / `#162033`, acentos ciano/magenta/amarelo/lima.
- **Animações:** reveal no scroll, stagger nos cartões filtrados, transição do dossiê com anime.js, `prefers-reduced-motion` desliga.
- **Assets:** sprite SVG dos cinco projetos, ícones inline, nenhuma captura de tela.
- **SEO/OG/JSON-LD:** title, description, Open Graph, Twitter Card e `CollectionPage` com os projetos.
- **Acessibilidade:** roster como `tablist`, cartões como `tab`, dossiê como `tabpanel`, navegação por teclado, `aria-live` para anúncio do projeto selecionado.
- **Responsividade:** roster 5→3→2→1 colunas; dossiê 3→2→1 colunas; toolbar empilhada no mobile.
- **Critério de pronto:** filtros funcionando, dossiê atualizando, links dos projetos corretos, sem overflow em 390 px, sem erros de console.
