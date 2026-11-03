# Plano — contato.html

- **Rota/arquivo:** `contato.html`
- **data-page:** `contato`
- **Status:** concluído
- **Objetivo:** abrir canais diretos de contato, explicar disponibilidade e reduzir atrito para propostas, colaborações e oportunidades.
- **Componentes:** header HUD compartilhado, page hero, cartão de contato, formulário mailto, FAQ em `<details>`, bloco de disponibilidade, CTA e footer compartilhado.
- **Seções e ordem:** page hero → canais + formulário → antes de chamar (FAQ) → disponibilidade → CTA.
- **Conteúdo:** e-mail `ronaldjordan.dev@gmail.com`, GitHub `github.com/RONALDJORDAN`, LinkedIn `/in/ronald-jordan-dev`, base Brasil/remoto, resposta em até 24h úteis. Sem prometer prazos que não foram acordados.
- **Interações:** copiar e-mail, validação nativa do formulário, abertura de `mailto:` com assunto e corpo preenchidos, toast, FAQ nativo acessível, reveals.
- **Tokens 60-30-10:** base escura, superfícies, acentos ciano/magenta/amarelo/lima.
- **Animações:** anime.js no hero; CSS transitions nos links e FAQ; `prefers-reduced-motion` desliga.
- **Assets:** ícones SVG inline, favicon e fontes locais.
- **SEO/OG/JSON-LD:** title, description, Open Graph, Twitter Card e `ContactPage`.
- **Acessibilidade:** labels explícitos, `aria-live` no status, foco visível, FAQ com `summary` nativo, contraste AA.
- **Responsividade:** grid 2→1 colunas; formulário em largura total no mobile; links longos quebram linha.
- **Critério de pronto:** formulário valida e abre o e-mail, copiar funciona, FAQ abre/fecha, sem overflow em 390 px, sem erros de console.
