# Plano — sobre.html

- **Rota/arquivo:** `sobre.html`
- **data-page:** `sobre`
- **Status:** concluído
- **Objetivo:** apresentar Jordan Ronald, sua forma de trabalhar, princípios e repertório, sem repetir apenas o texto da home.
- **Componentes:** header HUD compartilhado, page hero com retrato, terminal de bio, ficha do jogador, pilares, grid de interesses, chip cloud de stack, CTA para projetos/contato, footer compartilhado.
- **Seções e ordem:** page hero → bio + ficha → como eu trabalho (3 pilares) → além do código (3 cards) → stack em uma linha → CTA.
- **Conteúdo:** bio em primeira pessoa, foco em produto, clareza, desempenho e aprendizado contínuo. Não citar empresas, clientes ou marcas.
- **Tokens 60-30-10:** base `#070b14` (60%), superfícies `#101828` / `#162033` (30%), acentos ciano `#00f0ff`, magenta `#ff2e88`, amarelo `#ffe600` e lima `#7dff5b` (10%).
- **Animações:** reveals via IntersectionObserver; entrada do hero via anime.js; retrato com moldura neon; `prefers-reduced-motion` desliga tudo.
- **Assets:** `assets/profile.jpg`, ícones SVG inline, sprite de projetos quando necessário.
- **SEO/OG/JSON-LD:** title, description, Open Graph, Twitter Card e `WebPage` com `inLanguage: pt-BR`.
- **Acessibilidade:** um `h1`, seções com `aria-labelledby`, contraste AA, foco visível, links com texto descritivo.
- **Responsividade:** hero em duas colunas no desktop e uma no mobile; cards empilhados abaixo de 860 px.
- **Critério de pronto:** conteúdo completo, navegação ativa em SOBRE, sem overflow em 390 px, sem erros de console, link para currículo e contato funcionando.
