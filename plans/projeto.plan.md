# Plano — projeto.html

- **Rota/arquivo:** `projeto.html?p=slug`
- **data-page:** `projeto`
- **Status:** concluído
- **Objetivo:** exibir o dossiê completo de um dos cinco projetos autorais, com URL compartilhável e fallback para projeto inexistente.
- **Componentes:** header HUD compartilhado, breadcrumb, hero do projeto, visual pixel-art, ficha técnica, visão geral, destaques, stack, log de sistema, aprendizados, outras missões, CTA e footer compartilhado.
- **Slugs:** `viko`, `fastcloud`, `d2`, `bodas`, `analise`.
- **Fonte de dados:** `window.JORDAN.projects` exposto por `js/app.js` + detalhes editoriais em `js/pages.js`.
- **Seções e ordem:** breadcrumb → hero → visão geral + ficha técnica → destaques + stack + logs → aprendizados → outras missões → CTA.
- **Conteúdo:** dados reais dos cinco projetos, sem capturas de tela, sem marcas externas. Cada projeto tem desafio, solução, papel e aprendizados próprios.
- **Interações:** leitura de `?p=`, fallback para `viko`, links para GitHub, copiar link, e-mail com assunto do projeto, cards de outras missões, reveals.
- **Tokens 60-30-10:** base escura, superfícies, acentos neon; visual do projeto usa a cor de destaque do cartucho.
- **Animações:** anime.js na entrada do hero e troca de conteúdo; `prefers-reduced-motion` desliga.
- **Assets:** sprite SVG inline, ícones inline, nenhuma imagem externa.
- **SEO/OG/JSON-LD:** title e description dinâmicos, Open Graph, `CreativeWork` por projeto.
- **Acessibilidade:** um `h1` dinâmico, ficha técnica como `dl`, log com `aria-live`, links descritivos, foco visível.
- **Responsividade:** hero 2→1 colunas; ficha e destaques empilhados; outras missões 3→1.
- **Critério de pronto:** todos os slugs renderizam conteúdo correto, fallback funciona, links de GitHub/e-mail corretos, sem overflow em 390 px, sem erros de console.
