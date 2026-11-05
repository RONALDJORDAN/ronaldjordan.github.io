# Registro de execução — JORDAN.SYS

Registro cronológico do que foi feito, onde e em que estado ficou. Atualizar sempre que uma etapa for concluída.

## 2026-11-02

### Fundação do projeto

- Pasta criada: `jordan-arcade-portfolio`.
- Estrutura criada: `css/`, `js/`, `assets/`, `assets/fonts/`, `assets/vendor/`, `plans/`.
- Foto `assets/profile.jpg` otimizada em 640×640 (~50 KB).
- Favicon pixel `assets/favicon.svg`.
- Bibliotecas locais: `assets/vendor/anime.min.js` e `assets/vendor/vivus.min.js`.
- Fontes locais: Press Start 2P, Space Grotesk (500/700) e Space Mono (400/700) em `assets/fonts/`.
- Tokens, reset, utilitários e animações base em `css/tokens.css`.
- Componentes visuais em `css/style.css`.
- CSS de fontes em `css/fonts.css`.

### Reposicionamento DevOps

- Em todas as páginas HTML: substituição de `Full-Stack` por `Engenheiro de Software // DevOps` em títulos, descrições, JSON-LD, meta tags e copy editorial.
- Remoção intencional do termo "full-stack" em favor do novo posicionamento.
- Atualização de metadados OG e Twitter para refletir o novo posicionamento.

### Home single-page (hub)

- `index.html` reescrito como home-hub conciso: hero compacto, pipeline DevOps, 3 projetos em destaque, grade de atalhos para páginas internas e CTA — sem repetir informações completas de sobre/projetos/lab/arsenal/trajetória/contato.
- Novos metadados: `jobTitle: Engenheiro de Software // DevOps`, description e Twitter description atualizados.
- Adicionado link `CARTEIRA` na navegação principal e no rodapé.
- Bibliotecas de animação: GSAP 3.15.0 + ScrollTrigger 3.15.0 + Motion 12.23.12 UMD locais integrados.
- Animações GSAP + Motion aplicadas em todas as páginas (hero entrance, reveals, ScrollTrigger batches).

### Nova página: Carteira de Programador

- `carteira.html` criada como página print-ready, estilo carteira de estudante/programador, inspirada na edição Stitch "carteirinha_de_estudante" e "software_architect_devops_pixel_art_edition".
- Contém: foto, avatar pixel (`assets/pixel-avatar.svg`), ID do programador (JR-2026), stack visual, validação de ID, toggle foto/sprite, cópia de ID para área de transferência.
- Link adicionado na navegação principal e no rodapé de todas as páginas.

### Nova página: Plano da Carteira

- `plans/carteira.plan.md` criado com registro detalhado da etapa.

### Modelo multi-página

- `index.html` passou a ser a home resumida, com navegação e rodapé apontando para as páginas internas.
- Metadados de seção da home viraram links para as versões completas.
- `css/pages.css` criado com page hero, breadcrumb, layouts de sobre, projetos, laboratório, arsenal, trajetória, contato, currículo, projeto dinâmico, 404, responsividade e regras de impressão.
- `js/pages.js` criado com renderização do projeto dinâmico, detalhes editoriais dos cinco projetos, copiar link, impressão, motion do page hero e fallback.
- `js/app.js` atualizado com `initStaticNav()`, `dossier-page`, `window.JORDAN` (`projects`, `email`, `showToast`, `copyText`, `refreshReveal`) e `observeReveals()`.

### Páginas internas criadas/atualizadas

- `sobre.html`: perfil, linha do tempo resumida, princípios de trabalho, stack e CTA — copy atualizada para Engenheiro de Software // DevOps.
- `projetos.html`: roster com filtros, dossiê dinâmico, flip cards e links para os dossiês completos — copy atualizada.
- `laboratorio.html`: experimentos, estudos e protótipos autorais — copy atualizada.
- `arsenal.html`: stack organizada por camadas, com níveis e ferramentas — copy atualizada.
- `trajetoria.html`: linha do tempo profissional e marcos de aprendizado — copy atualizada.
- `contato.html`: canais diretos, formulário via `mailto:`, FAQ e cópia de e-mail — copy atualizada.
- `curriculo.html`: currículo completo, print-ready, com botões `data-print` e `window.print()` — copy atualizada.
- `projeto.html`: template dinâmico via `?p=slug`, com slugs `viko`, `fastcloud`, `d2`, `bodas` e `analise`, fallback para slug inválido e metadados atualizados por projeto.
- `404.html`: tela de erro com glitch, terminal de rotas, cartucho desconhecido e links úteis — copy atualizada.

### Correções e acessibilidade

- `system-clock` passou de `<span aria-label>` para `<time>` em todas as páginas.
- Terminais e `.stack-line` receberam `role="group"` para uso válido de `aria-label`.
- Seção do currículo recebeu `aria-label="Currículo completo"` em vez de referência a um título inexistente.
- `projeto.html` ganhou `#project-visual-meta`, atualizado dinamicamente com ID e tier do projeto.
- Reveal dinâmico corrigido: `observeReveals()` observa apenas elementos ainda ocultos e `refreshReveal()` é chamado depois de `renderProject()`, fazendo os cards de aprendizado aparecerem nos cinco projetos.
- `curriculo.html` corrigido para não duplicar `id="year"` no rodapé do documento.
- `.htmlvalidate.json` criado desativando apenas `no-inline-style` e `prefer-native-element`, usados intencionalmente.
- Auditoria Playwright em desktop (1440×900) e mobile (390×844): 14 páginas com HTTP 200, 1 `h1` por página, sem IDs duplicados, sem imagens quebradas, sem overflow horizontal, sem erros de console e sem requests falhos.
- Teste focado de reveal: 0 elementos `.reveal` ocultos em todas as páginas; 3/3 cards de aprendizado visíveis nos cinco projetos.
- Interações validadas: troca dos cinco projetos, filtros web/mídia, navegação por teclado, copiar resumo, copiar link, fallback de slug inválido, validação do formulário vazio, copiar e-mail, botões de impressão, CSS de impressão e menu mobile (abre/fecha com Escape).
- Busca final sem referências às marcas, sites e projetos externos excluídos do escopo editorial.
- Screenshots revisados: home desktop, 404 desktop, projetos desktop, projeto Viko desktop; home mobile, projetos mobile, projeto Viko mobile (com cards de aprendizado), currículo mobile, 404 mobile e menu mobile.
- Projetos antigos e portfólio anterior permanecem intactos; nada foi apagado.

### Próximos passos (opcional)

- Publicar em hospedagem estática (GitHub Pages, Netlify ou similar), mantendo os caminhos relativos.
- Revisar conteúdo periodicamente e atualizar os dados dos projetos em `js/app.js` e `js/pages.js`.
- Rodar Lighthouse após a publicação para medir LCP, CLS e acessibilidade no domínio final.
- Implementar a camada GSAP + Motion em todas as páginas e validar com Playwright.