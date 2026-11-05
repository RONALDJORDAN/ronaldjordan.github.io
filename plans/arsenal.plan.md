# Plano — arsenal.html

- **Rota/arquivo:** `arsenal.html`
- **data-page:** `arsenal`
- **Status:** concluído
- **Objetivo:** apresentar o repertório técnico completo, com níveis de confiança, contexto de uso e relação com os cinco projetos autorais.
- **Componentes:** header HUD compartilhado, page hero, terminal de equipamento, blocos de categoria, matriz de uso por projeto, roadmap de estudos, marquee de tecnologias, CTA e footer compartilhado.
- **Seções e ordem:** page hero → categorias do arsenal → matriz projeto × tecnologia → estudo atual → marquee → CTA.
- **Conteúdo:** C#/.NET, WPF, React, Next.js, TypeScript, JavaScript, HTML/CSS, C, Python, PowerShell, FFmpeg, Git, SQL, REST, acessibilidade, design systems, prototipação e documentação. Sem citar empresas, clientes ou marcas.
- **Interações:** reveals no scroll, barras de nível animadas ao entrar na viewport, links para projetos e contato, marquee pausável em `prefers-reduced-motion`.
- **Tokens 60-30-10:** base `#070b14`, superfícies `#101828` / `#162033`, acentos ciano/magenta/amarelo/lima.
- **Animações:** anime.js no hero; CSS transitions nas barras e hover; `prefers-reduced-motion` desliga.
- **Assets:** ícones SVG inline, sprite de projetos quando necessário, nenhuma imagem externa.
- **SEO/OG/JSON-LD:** title, description, Open Graph, Twitter Card e `WebPage` com `about` apontando para as tecnologias.
- **Acessibilidade:** tabela com `caption`, escopos de linha/coluna, barras com rótulo textual, contraste AA, foco visível.
- **Responsividade:** categorias 2→1 colunas; matriz com rolagem horizontal controlada no mobile; marquee sem overflow de página.
- **Critério de pronto:** conteúdo completo, tabela legível em 390 px, links corretos, sem overflow horizontal, sem erros de console.
