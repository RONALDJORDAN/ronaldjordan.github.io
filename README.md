# JORDAN.SYS — Portfólio arcade

Portfólio pessoal de **Jordan Ronald**, desenvolvedor full-stack. O site usa uma estética arcade/CRT com pixel-art, neon ciano/magenta/amarelo/lima, tipografia monoespaçada, bordas duras, sombras deslocadas e scanlines — inspirado no visual do portfólio “stitch Jordan”, sem copiar conteúdo de terceiros.

O projeto é 100% independente: **não menciona, não linka e não representa outras marcas, sites ou projetos externos**. Todo o conteúdo é autoral e cobre apenas cinco projetos pessoais.

## Páginas

| Página | Arquivo | Conteúdo |
| --- | --- | --- |
| Home | `index.html` | Hero, perfil, resumo dos projetos, laboratório, arsenal, trajetória e contato |
| Sobre | `sobre.html` | Perfil, princípios de trabalho, stack e linha do tempo resumida |
| Projetos | `projetos.html` | Roster com filtros e dossiê dinâmico dos cinco cartuchos |
| Laboratório | `laboratorio.html` | Experimentos, estudos e protótipos |
| Arsenal | `arsenal.html` | Stack organizada por camadas, com níveis e ferramentas |
| Trajetória | `trajetoria.html` | Linha do tempo profissional e marcos de aprendizado |
| Contato | `contato.html` | Canais diretos, formulário via `mailto:` e FAQ |
| Currículo | `curriculo.html` | Currículo completo, pronto para impressão/PDF |
| Projeto | `projeto.html?p=slug` | Dossiê completo de um projeto |
| 404 | `404.html` | Página de erro com rotas alternativas |

Slugs do dossiê dinâmico:

- `viko` — VIKO Compressor e Conversor
- `fastcloud` — FastCloud // FTP Native
- `d2` — D2 Download
- `bodas` — Bodas de Papel
- `analise` — Análise de Mídias Removíveis

Slug inválido cai no fallback de `viko` com aviso visível.

## Como executar

Não há build, bundler ou dependência de CDN. Basta servir a pasta como site estático:

```powershell
cd C:\Projetos\Portfolio\jordan-arcade-portfolio
py -3 -m http.server 8000 --bind 127.0.0.1
```

Depois abra `http://127.0.0.1:8000/`.

Também funciona com qualquer servidor estático (Live Server, `npx serve`, Nginx, GitHub Pages etc.). Abrir os arquivos diretamente via `file://` pode bloquear o carregamento de fontes e módulos; por isso o servidor local é o caminho recomendado.

## Estrutura

```text
jordan-arcade-portfolio/
├─ index.html
├─ sobre.html
├─ projetos.html
├─ laboratorio.html
├─ arsenal.html
├─ trajetoria.html
├─ contato.html
├─ curriculo.html
├─ projeto.html
├─ 404.html
├─ css/
│  ├─ fonts.css        # @font-face das fontes locais
│  ├─ tokens.css       # tokens, reset, utilitários, reveals e reduced motion
│  ├─ style.css        # componentes compartilhados (header, hero, cards, footer)
│  └─ pages.css        # layouts das páginas internas, responsividade e impressão
├─ js/
│  ├─ app.js           # dados dos projetos, navegação, reveals, áudio, formulário
│  └─ pages.js         # dossiê dinâmico, copiar link, impressão e motion das páginas
├─ assets/
│  ├─ profile.jpg      # retrato otimizado 640×640
│  ├─ favicon.svg      # favicon pixel-art
│  ├─ fonts/           # Press Start 2P, Space Grotesk e Space Mono (woff2)
│  └─ vendor/          # anime.js e Vivus locais
├─ plans/              # plano de cada página + REGISTRO.md
├─ .htmlvalidate.json  # configuração do html-validate
└─ README.md
```

## Decisões técnicas

- **HTML5 semântico**, um `h1` por página, landmarks (`header`, `nav`, `main`, `footer`) e skip link.
- **CSS puro** com custom properties, grid/flex, `clamp()` e breakpoints em 1100 px, 900 px, 720 px e 520 px.
- **JavaScript vanilla** para navegação, filtros, dossiê, formulário, cópia e áudio opcional.
- **anime.js** para entradas e stagger; **Vivus** para o desenho do circuito do hero.
- **IntersectionObserver** para reveals; `prefers-reduced-motion` desliga animações e o áudio não inicia sozinho.
- **Fontes e bibliotecas locais** em `assets/`; nenhuma requisição a Google Fonts ou CDNs em runtime.
- **Ícones SVG pixel-art inline**; nenhuma captura de tela dos projetos antigos.
- **Currículo print-ready** com `@media print` e botão que chama `window.print()`.
- **Formulário de contato** monta um `mailto:`; nenhum dado é enviado a servidor.
- **Dossiê dinâmico** usa `window.JORDAN.projects` (de `app.js`) e detalhes editoriais em `pages.js`.
- **Fallback sem JavaScript**: `html.no-js .reveal` mantém o conteúdo visível.

## Acessibilidade

- Skip link, foco visível e navegação por teclado no roster (setas, Home e End).
- `aria-selected`, `aria-controls` e `aria-live` no dossiê e nos status.
- `time` para o relógio, `role="group"` em terminais e grupos rotulados.
- Contraste AA, alvos de toque adequados e respeito a `prefers-reduced-motion`.
- Menu mobile fecha com `Escape`.

## Validação

Comandos usados na última auditoria:

```powershell
npx --yes html-validate@9 "*.html"
node --check js/app.js
node --check js/pages.js
npx --yes csstree-validator css
```

Resultados:

- `html-validate`: 0 erros.
- `node --check`: OK nos dois arquivos.
- `csstree-validator`: apenas o falso positivo de `margin` em `@page` (CSS Paged Media válido).
- Auditoria Playwright em Edge headless, desktop (1440×900) e mobile (390×844): 14 páginas com HTTP 200, sem IDs duplicados, imagens quebradas, overflow horizontal, erros de console ou requests falhos.
- Teste de reveal: 0 elementos ocultos após o scroll; 3/3 cards de aprendizado visíveis nos cinco projetos.

## Escopo editorial

Os cinco projetos exibidos são:

1. **VIKO Compressor e Conversor** — aplicativo desktop em C#/.NET 8 com FFmpeg para compressão e conversão de mídia.
2. **FastCloud // FTP Native** — cliente FTP desktop em C#/.NET com WinSCP.
3. **D2 Download** — aplicativo Windows para download e organização de vídeos e músicas.
4. **Bodas de Papel** — experiência web em React + TypeScript + Vite para convite de casamento.
5. **Análise de Mídias Removíveis** — ferramenta em Python para inspeção e recuperação de arquivos.

Nenhum desses projetos é apresentado como trabalho de outras marcas ou sites. O portfólio antigo e os projetos antigos do usuário permanecem intactos; eles apenas não são referenciados aqui.

## Registro e continuidade

- `plans/REGISTRO.md`: histórico do que foi feito, validações e correções.
- `plans/README.md`: índice de páginas, planos e status.
- `plans/*.plan.md`: objetivo, componentes, conteúdo e critérios de pronto de cada página.

Para retomar em outra sessão, leia o registro, escolha o plano da página e siga o fluxo conteúdo → HTML → CSS → JS → validação.

## Contato

- E-mail: [ronaldjordan.dev@gmail.com](mailto:ronaldjordan.dev@gmail.com)
- GitHub: [github.com/RONALDJORDAN](https://github.com/RONALDJORDAN)
- LinkedIn: [linkedin.com/in/ronald-jordan-dev](https://linkedin.com/in/ronald-jordan-dev)
